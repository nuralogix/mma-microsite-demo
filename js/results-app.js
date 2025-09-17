/**
 * Renders the results in the designated container.
 * @param {Object} results - The processed results to display.
 * @param {Object} definitions - The point definitions for rendering.
 * @param {Array<Object>} sections - The sections to organize the results into.
 * @param {string} pageLocale - The locale of the page that will display the results.
 */
function renderResults(results, definitions, sections, pageLocale) {
    let container = document.getElementById('results-container')
    let timestamp = document.getElementById("timestamp")
    let measurementInfo = document.getElementById("measurementInfo")

    timestamp.innerHTML = Intl.DateTimeFormat(pageLocale, {
        dateStyle: 'medium',
        timeStyle: 'short'
    }).format(results["timestamp"])

    let snr = getPointResult("SNR", results)
    if (snr && !isNaN(snr)) {
        let snrInfo = document.createElement('span')
        let snrPointDefinition = definitions["SNR"]
        let snrDisplayValue = formatResultValue(
            snr, 
            snrPointDefinition.decimalPlaces, 
            snrPointDefinition.units, 
            pageLocale
        )
        snrInfo.id = "snrContainer"
        snrInfo.textContent = `SNR: ${snrDisplayValue} dB`
        measurementInfo.append(snrInfo)
    }

    let starRating = getPointResult("STAR_RATING", results)
    if (starRating && !isNaN(starRating)) {
        let stars = document.createElement('span')
        stars.id = "starsContainer" 
        for (let i = 1; i <= 5; i++) {
            let star = document.createElement('div')
            if (i <= starRating) {
                star.className = "star greenBackground"
            } else {
                star.className = "star greyBackground"
            }
            stars.append(star)
        }
        measurementInfo.appendChild(stars)
    }
    
    sections.forEach(section => {
        let titleEl = document.createElement('h2');
        titleEl.textContent = localize(section.titleLocalizationKey, pageLocale);
        container.appendChild(titleEl);
        var numberOfChildren = 0

        for (let i = 0; i < section.pointsIDs.length; i++) {
            let pointID = section.pointsIDs[i];
            let nextPointID = section.pointsIDs[i + 1];
            // Special handling for BP_SYSTOLIC and BP_DIASTOLIC combination
            if (pointID === "BP_SYSTOLIC" && nextPointID === "BP_DIASTOLIC") {
                renderBloodPressureRow(results, definitions, container, pageLocale);
                i++; // Skip the next ID since it's already processed
                numberOfChildren += 1;
                continue;
            }

            let result = getPointResult(pointID, results);

            let pointDefinition = definitions[pointID]
            if (!pointDefinition) continue;

            renderResultRow(result, definitions[pointID], container, pageLocale);

            numberOfChildren += 1;
        }

        if (numberOfChildren == 0) {
            container.removeChild(titleEl)
        }
    })
}

function getPointResult(pointID, results) {
    return results[convertPointIDStringToHashString(pointID)]
}

/**
 * Decodes a base64 and URI encoded NuraQR string.
 * @param {string} encodedString - The NuraQR string to decode.
 * @returns {Object} The decoded and decompressed results string and timestamp.
 */
function decodeNuraQRString(encodedString) {

    let resultsPayloadString = atob(decodeURIComponent(encodedString))
    let resultsPayloadByteArray = Uint8Array.from(resultsPayloadString, c => c.charCodeAt(0))

    let magicBytes = resultsPayloadByteArray.slice(0, 3)
    if (String(magicBytes) != String(Uint8Array.from([0x4e, 0x51, 0x31]))) {
        console.log(String(magicBytes))
        throw new Error('Invalid NuraResults format - Invalid header');
    }

    let timestamp
    let resultsObject

    try {
        let timestampByteArray = resultsPayloadByteArray.slice(3, 7)
        let timestampNumber = new DataView(timestampByteArray.buffer).getUint32(0, true)
        timestamp = convertCompactTimestampToDate(timestampNumber)
    } catch {
        throw new Error('Invalid NuraResults format - Invalid timestamp');
    }

    try {
        let resultsByteArray = resultsPayloadByteArray.slice(7)
        resultsObject = convertResultsByteArrayToResultsObject(resultsByteArray)
        resultsObject["timestamp"] = timestamp
    } catch {
        throw new Error('Invalid NuraResults format - Could not unzip or parse results');
    }

    return resultsObject
}

/**
 * Converts a compact timestamp number into a date object
 * @param {number} compactTimestamp - The Uint32 representing the compact timestamp.
 * @returns {Date} A Date object that corresponds to the same date/time represented by `compactTimestamp`.
 */
function convertCompactTimestampToDate(compactTimestamp) {
    // Convert to string to ensure we can slice it
    let timestampString = compactTimestamp.toString()

    // Extract parts of the timestamp
    let year = parseInt("20" + timestampString.slice(0, 2), 10) // Assuming the year is 20xx
    let month = parseInt(timestampString.slice(2, 4), 10) - 1 // Month is 0-indexed in JavaScript Date
    let day = parseInt(timestampString.slice(4, 6), 10)
    let hour = parseInt(timestampString.slice(6, 8), 10)
    let minute = parseInt(timestampString.slice(8, 10), 10)

    // Create the Date object
    let date = new Date(year, month, day, hour, minute)

    return date;
}

/**
 * Converts NuraQR results payload byte array into key/value pairs
 * @param {Uint8Array} compactResultsString - The string containing the results to parse.
 * @returns {Object} An array of key/value pairs parsed from the input string.
 */
function convertResultsByteArrayToResultsObject(resultsByteArray) {
    var result = {};

    if (resultsByteArray.length % 4 != 0) {
        throw new Error('Invalid NuraResults format - Invalid results payload length');
    }

    for (let i = 0; i < resultsByteArray.length; i += 4) {
        let pointID = convertHashByteArrayToString(resultsByteArray.slice(i, i+2))
        let dataView = new DataView(resultsByteArray.slice(i+2, i+4).buffer)
        result[pointID] = parseFloat(getFloat16(dataView, 0, true).toFixed(2))
    }

    return result
}

/**
 * Builds a single result HTMLElement.
 * @param {Object} result - The result object containing the key and value.
 * @param {Object} pointDefinition - The point definition object for the result.
 * @returns {HTMLElement} The constructed result element.
 */
function renderResultRow(result, pointDefinition, container, locale) {
    let colorClass = getColorClass(result, pointDefinition);
    let formattedValue = formatResultValue(result, pointDefinition.decimalPlaces, pointDefinition.units, locale);    let resultEl = document.createElement('div');
    resultEl.className = `result`;

    let iconEl = document.createElement('div');
    iconEl.className = 'result-icon';
    loadSVGIcon(iconEl, pointDefinition.key);

    let nameLabel = document.createElement('span')
    nameLabel.className = "result-name"
    nameLabel.textContent = localize(`DFXPOINT_TITLE:${pointDefinition.key}`, locale)

    let valueEl = document.createElement('span')
    valueEl.className = `result-value ${colorClass}`
    valueEl.textContent = `${formattedValue}`

    let unitEl = document.createElement('span')
    if (pointDefinition.units !== "" && pointDefinition.units !== "PERCENT") {
        unitEl.className = `result-unit`
        unitEl.textContent = `${localize(`DFXPOINT_UNIT:${pointDefinition.units}`, locale)}`
    }

    resultEl.appendChild(iconEl)
    resultEl.appendChild(nameLabel)
    resultEl.appendChild(valueEl)
    resultEl.appendChild(unitEl)

    container.appendChild(resultEl)

    return resultEl
}

/**
 * Renders a special row for blood pressure results.
 * @param {Object} results - A dictionary containing measurement results.
 * @param {Object} definitions - An object containing point definitions.
 * @param {HTMLElement} container - The container to append the blood pressure row to.
 */
function renderBloodPressureRow(results, definitions, container, locale) {
    let systolicResult = results[convertPointIDStringToHashString("BP_SYSTOLIC")];
    let diastolicResult = results[convertPointIDStringToHashString("BP_DIASTOLIC")];
    let systolicDefinition = definitions["BP_SYSTOLIC"];
    let diastolicDefinition = definitions["BP_DIASTOLIC"];

    let resultEl = document.createElement('div');
    resultEl.className = `result`;    let iconEl = document.createElement('div');
    iconEl.className = 'result-icon';
    loadSVGIcon(iconEl, 'BP');

    let nameLabel = document.createElement('span');
    nameLabel.className = "result-name"
    nameLabel.textContent = `${localize("DFXPOINT_TITLE:BP", locale)}`;

    let bloodPressureValueEl = document.createElement('span');
    bloodPressureValueEl.className = `result-value`;

    let systolicValueEl = document.createElement('span');
    systolicValueEl.className = `${getColorClass(systolicResult, systolicDefinition)}`;
    systolicValueEl.textContent = `${formatResultValue(systolicResult, systolicDefinition.decimalPlaces, systolicDefinition.units, locale)}`;

    let separatorValueEl = document.createElement('span');
    separatorValueEl.className = `grey`;
    separatorValueEl.textContent = "\xa0/\xa0";

    let diastolicValueEl = document.createElement('span');
    diastolicValueEl.className = `${getColorClass(diastolicResult, diastolicDefinition)}`;
    diastolicValueEl.textContent = `${formatResultValue(diastolicResult, diastolicDefinition.decimalPlaces, diastolicDefinition.units, locale)}`;

    bloodPressureValueEl.appendChild(systolicValueEl);
    bloodPressureValueEl.appendChild(separatorValueEl);
    bloodPressureValueEl.appendChild(diastolicValueEl);

    let unitEl = document.createElement('span');
    unitEl.className = `result-unit`;
    unitEl.textContent = localize("DFXPOINT_UNIT:MMHG", locale);

    resultEl.appendChild(iconEl);
    resultEl.appendChild(nameLabel);
    resultEl.appendChild(bloodPressureValueEl);
    resultEl.appendChild(unitEl);

    container.appendChild(resultEl);
}

/**
 * Determines the color class for a given value based on its definition scales.
 * @param {number} value - The value to determine the color class for.
 * @param {Object} pointDefinition - The definition of the point including scale segments.
 * @returns {string} The color class for the given value.
 */
function getColorClass(value, pointDefinition) {
    let colorClass = 'grey';
    let decimalPlaces = pointDefinition.decimalPlaces;
    let roundedValue = roundToDecimalPlaces(value, decimalPlaces);
    let segments = pointDefinition.scales?.default?.segments;
    if (segments) {
        for (let i = 0; i < segments.length; i++) {
            let segment = segments[i];
            if (roundedValue >= segment.min && roundedValue < segment.max) {
                colorClass = segment.color;
                break;
            }

            // Special case for the last segment, if the value is equal to the max of the last segment
            if (i === segments.length - 1 && roundedValue === segment.max) {
                colorClass = segment.color;
                break;
            }
        }
    }

    return colorClass;
}

/**
 * Formats a numerical value to a specified number of decimal places.
 * @param {number} value - The value to format.
 * @param {number} decimalPlaces - The number of decimal places to format the value to.
 * @param {string} units - The units of the formatted value.
 * @param {string} locale - The locale code to be used for formatting
 * @returns {string} The formatted value as a string.
 */
function formatResultValue(value, decimalPlaces, units, locale) {
    let isPercentageUnit = units == "PERCENT"
    let roundedValue = roundToDecimalPlaces(value, decimalPlaces);
    let convertedValue = isPercentageUnit ? roundedValue / 100 : roundedValue
    let options = { 
        maximumFractionDigits: decimalPlaces, 
        minimumFractionDigits: decimalPlaces, 
        style: (isPercentageUnit ? "percent" : "decimal") 
    }
    if (isNaN(convertedValue)) {
        return "?"
    } else {
        return new Intl.NumberFormat(locale, options).format(convertedValue)
    }
}

/**
 * Localizes a given key using the default language setting.
 * @param {string} key - The localization key to translate.
 * @param {string} locale - The locale code to be used for looking up the localized string
 * @returns {string} The localized string or the key if not found.
 */
function localize(key, locale) {
    // Assuming a simple scenario with only default language
    return  DeepAffexWebResultsData.translations[key][locale] ||
            DeepAffexWebResultsData.translations[key]?.default ||
             key;
}

/**
 * Gets the current browser locale.
 * @returns {string} The current browser locale.
 */
function getLocale() {
    return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
}

/**
 * Hashes a Point ID String to 16-bits  
 * @param {string} string - The string to be hashed.
 * @returns {Uint8Array} A byte array of the hash.
 */
function convertPointIDStringToHashByteArray(pointID) {
    return crc16(pointID)
}

/**
 * Hashes a Point ID String to 16-bits  
 * @param {string} string - The string used to calculate CRC-16.
 * @returns {Uint8Array} A byte array of the CRC-16 checksum.
 */
function convertPointIDStringToHashString(pointID) {
    let keyBytes = convertPointIDStringToHashByteArray(pointID)
    return convertHashByteArrayToString(keyBytes)
}

/**
 * Converts a 16-bit hash to a string 
 * @param {Uint8Array} pointIDBytes - The 16-bit hash
 * @returns {string} String conversion
 */
function convertHashByteArrayToString(pointIDBytes) {
    return `${pointIDBytes[0]}${pointIDBytes[1]}`
}

/**
 * Calculates CRC-16 checksum of a string.
 * @param {string} string - The string used to calculate CRC-16.
 * @returns {Uint8Array} A byte array of the CRC-16 checksum.
 */
function crc16(string) {
    let buffer = Array.from(string).map(character => character.charCodeAt(0));
    var crc = 0xFFFF;
    var odd;

    for (var i = 0; i < buffer.length; i++) {
        crc = crc ^ buffer[i];
        for (var j = 0; j < 8; j++) {
            odd = crc & 0x0001;
            crc = crc >> 1;
            if (odd) {
                crc = crc ^ 0xA001;
            }
        }
    }

    // Split the crc into two bytes (MSB and LSB)
    let msb = (crc & 0xFF00) >> 8;
    let lsb = crc & 0x00FF;

// Return as a Uint8Array - little-endian
    return new Uint8Array([lsb, msb]);
}

/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} value - The value to round.
 * @param {number} decimalPlaces - The number of decimal places to round to.
 * @returns {number} The rounded value.
 */
function roundToDecimalPlaces(value, decimalPlaces) {
    if (isNaN(value)) {
        return value;
    }
    return Number(Math.round(value+'e'+decimalPlaces)+'e-'+decimalPlaces);
}

/**
 * Loads SVG content using fetch for webview compatibility.
 * @param {HTMLElement} iconElement - The icon element to populate with SVG content.
 * @param {string} iconName - The name of the SVG icon to load.
 */
function loadSVGIcon(iconElement, iconName) {
    fetch(`assets/svg/${iconName}.svg`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })        .then(svgContent => {
            // Replace black colors and gray colors with currentColor to allow CSS color control
            svgContent = svgContent.replace(/fill="black"/g, 'fill="currentColor"');
            svgContent = svgContent.replace(/stroke="black"/g, 'stroke="currentColor"');
            svgContent = svgContent.replace(/fill="%23cccccc"/g, 'fill="currentColor"');
            svgContent = svgContent.replace(/fill="#cccccc"/g, 'fill="currentColor"');
            svgContent = svgContent.replace(/fill="#1D1D1B"/g, 'fill="currentColor"');
            
            // Insert the SVG content directly
            iconElement.innerHTML = svgContent;
        })
        .catch(error => {
            console.warn(`Could not load icon: ${iconName}`, error);
            // Fallback: use a generic icon character with CSS styling
            iconElement.innerHTML = '●';
            iconElement.classList.add('fallback');
        });
}