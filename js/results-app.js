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
        let snrPointDefinition = definitions["SNR"] || { key: "SNR" }
        let snrDisplayValue = formatResultValue(
            snr, 
            snrPointDefinition.decimalPlaces, 
            snrPointDefinition.units, 
            pageLocale
        )
        snrInfo.id = "snrContainer"
        snrInfo.textContent = `SNR: ${snrDisplayValue} dB`

        let snrDialogBuilder = () => PointInfoDialog.buildPointInfoDialogOptions(snrPointDefinition, snr, pageLocale)
        let snrOpenDialog = () => {
            let dialogOptions = snrDialogBuilder()
            PointInfoDialog.showPointInfoDialog(dialogOptions.title, dialogOptions.content, pageLocale)
        }
        let snrIcon = PointInfoDialog.createResultInfoIcon(pageLocale, snrOpenDialog)
        snrInfo.appendChild(snrIcon)

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

        let starPointDefinition = definitions["STAR_RATING"] || { key: "STAR_RATING" }
        let starDialogBuilder = () => PointInfoDialog.buildPointInfoDialogOptions(starPointDefinition, starRating, pageLocale)
        let starOpenDialog = () => {
            let dialogOptions = starDialogBuilder()
            PointInfoDialog.showPointInfoDialog(dialogOptions.title, dialogOptions.content, pageLocale)
        }
        let starIcon = PointInfoDialog.createResultInfoIcon(pageLocale, starOpenDialog)
        stars.appendChild(starIcon)

        measurementInfo.appendChild(stars)
    }
    
    const healthScoreDef = definitions['HEALTH_SCORE']
    const healthScoreVal = getPointResult('HEALTH_SCORE', results)
    if (healthScoreDef) {
        renderWellnessDialCard(healthScoreVal, healthScoreDef, container, pageLocale)
    }

    const infoBar = document.createElement('div')
    infoBar.className = 'info-bar'
    infoBar.appendChild(measurementInfo)
    infoBar.appendChild(timestamp)
    container.appendChild(infoBar)

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

            // Hide BP_CVD when multi-year risk is present (it supersedes the single value)
            if (pointID === "BP_CVD" && hasMultiYearRiskResult(results, definitions)) {
                continue
            }

            // CVD multi-year risk renders its own slider row
            if (pointID === "CVD_MULTI_YEAR_RISK_PROBS") {
                let pointDefinition = definitions[pointID]
                if (pointDefinition && renderMultiYearRiskRow(results, pointDefinition, container, pageLocale)) {
                    numberOfChildren += 1
                }
                continue
            }

            let result = getPointResult(pointID, results);

            if(pointID === "TEMPERATURE_SENSOR" && (isNaN(result) || result === 0)) {
                // Fallback to BODY_TEMPERATURE if TEMPERATURE_SENSOR is not available
                console.log("Falling back to BODY_TEMPERATURE for temperature reading.");
                result = getPointResult("BODY_TEMPERATURE", results);
            }

            let pointDefinition = definitions[pointID]
            if (!pointDefinition) continue;

            // Skip rendering if result is not available and point is configured to hide when missing
            if (pointDefinition.hideWhenMissing && (result === undefined || isNaN(result))) {
                continue;
            }

            let titleKeyOverride = section.pointTitleOverrides?.[pointID] ?? null;
            renderResultRow(result, definitions[pointID], container, pageLocale, titleKeyOverride);

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

function getRawPointResult(pointID, results) {
    return results[convertPointIDStringToHashString(pointID)]
}

function getPointResults(pointID, results) {
    let count = getRawPointResult(`${pointID}_COUNT`, results)
    if (Number.isFinite(count)) {
        let resultCount = Math.max(0, Math.trunc(count))
        return Array.from({ length: resultCount }, (_, index) => getRawPointResult(`${pointID}_${index}`, results))
    }
    return [getRawPointResult(pointID, results)]
}

function hasPointResultValue(value) {
    return Number.isFinite(value)
}

function hasMultiYearRiskResult(results, definitions) {
    let pointDefinition = definitions["CVD_MULTI_YEAR_RISK_PROBS"]
    return Boolean(pointDefinition && getMultiYearRiskValues(results, pointDefinition).some(hasPointResultValue))
}

function getMultiYearRiskValues(results, pointDefinition) {
    let values = getPointResults(pointDefinition.key, results)
    if (values.length === 1 && !hasPointResultValue(values[0])) {
        values = Array.from({ length: 20 }, (_, index) => {
            return getRawPointResult(`${pointDefinition.key}_${index + 1}`, results)
        })
    }
    return values
}

function renderMultiYearRiskRow(results, pointDefinition, container, locale) {
    let values = getMultiYearRiskValues(results, pointDefinition)

    const firstAvailableIndex = values.findIndex(hasPointResultValue)
    if (firstAvailableIndex === -1) {
        return false
    }

    let selectedIndex = values.length > 1 ? Math.min(9, values.length - 1) : firstAvailableIndex
    let selectedYear = selectedIndex + 1
    let selectedValue = values[selectedIndex]

    let resultEl = document.createElement('div')
    resultEl.className = 'result multi-year-result'
    resultEl.dataset.pointKey = pointDefinition.key

    let mainRow = document.createElement('div')
    mainRow.className = 'multi-year-main-row'

    let iconEl = document.createElement('div')
    iconEl.className = 'result-icon'
    loadSVGIcon(iconEl, pointDefinition.iconKey || pointDefinition.key)
    mainRow.appendChild(iconEl)

    let nameWrapper = document.createElement('div')
    nameWrapper.className = 'result-name-wrapper'
    let nameLabel = document.createElement('span')
    nameLabel.className = 'result-name'
    nameLabel.textContent = localize(`DFXPOINT_TITLE:${pointDefinition.key}`, locale)
    nameWrapper.appendChild(nameLabel)

    let openDialog = () => {
        let dialogOptions = PointInfoDialog.buildPointInfoDialogOptions(pointDefinition, selectedValue, locale)
        PointInfoDialog.showPointInfoDialog(dialogOptions.title, dialogOptions.content, locale)
    }
    nameWrapper.appendChild(PointInfoDialog.createResultInfoIcon(locale, openDialog))
    mainRow.appendChild(nameWrapper)

    let valueEl = document.createElement('span')
    valueEl.className = 'result-value'
    mainRow.appendChild(valueEl)
    resultEl.appendChild(mainRow)

    let yearLabel
    let slider
    if (values.length > 1) {
        yearLabel = document.createElement('div')
        yearLabel.className = 'multi-year-selected-label'
        resultEl.appendChild(yearLabel)

        let sliderRow = document.createElement('div')
        sliderRow.className = 'multi-year-slider-row'

        let minLabel = document.createElement('span')
        minLabel.textContent = '1'
        minLabel.setAttribute('aria-hidden', 'true')
        sliderRow.appendChild(minLabel)

        slider = document.createElement('input')
        slider.className = 'multi-year-slider'
        slider.type = 'range'
        slider.min = '1'
        slider.max = String(values.length)
        slider.step = '1'
        slider.value = String(selectedYear)
        slider.setAttribute('aria-label', localize('DFXPOINT_CVD_YEAR_SLIDER_LABEL', locale))

        let tickList = document.createElement('datalist')
        tickList.id = 'cvd-risk-year-ticks'
        for (let year = 1; year <= values.length; year++) {
            let tick = document.createElement('option')
            tick.value = String(year)
            tickList.appendChild(tick)
        }
        slider.setAttribute('list', tickList.id)
        sliderRow.appendChild(slider)
        sliderRow.appendChild(tickList)

        let maxLabel = document.createElement('span')
        maxLabel.textContent = String(values.length)
        maxLabel.setAttribute('aria-hidden', 'true')
        sliderRow.appendChild(maxLabel)
        resultEl.appendChild(sliderRow)
    }

    const colorClasses = ['green', 'lightGreen', 'yellow', 'lightRed', 'red', 'grey']
    const updateSelectedYear = year => {
        selectedYear = year
        selectedValue = values[year - 1]
        valueEl.classList.remove(...colorClasses)
        valueEl.classList.add(getColorClass(selectedValue, pointDefinition))
        valueEl.textContent = formatResultValue(
            selectedValue,
            pointDefinition.decimalPlaces,
            pointDefinition.units,
            locale
        )
        let yearTemplate = localize('DFXPOINT_CVD_YEAR_LABEL', locale)
        if (yearLabel) {
            yearLabel.textContent = yearTemplate.replace('{year}', year)
        }
        if (slider) {
            slider.setAttribute('aria-valuetext', yearLabel ? yearLabel.textContent : '')
        }
    }

    if (slider) {
        slider.addEventListener('input', event => {
            updateSelectedYear(Number(event.target.value))
        })
    }
    updateSelectedYear(selectedYear)
    container.appendChild(resultEl)
    return true
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
 * @param {HTMLElement} container - The container to append the row to.
 * @param {string} locale - The locale code.
 * @param {string|null} titleKeyOverride - Optional localization key override for the title.
 * @returns {HTMLElement} The constructed result element.
 */
function renderResultRow(result, pointDefinition, container, locale, titleKeyOverride = null) {
    // Convert 1–5 raw scores to 0–100% before any rendering
    const displayResult = PERCENT_OF_MAX_POINTS.has(pointDefinition.key) && !isNaN(result)
        ? result / 5 * 100
        : result

    let colorClass = getColorClass(displayResult, pointDefinition);
    let formattedValue = formatResultValue(displayResult, pointDefinition.decimalPlaces, pointDefinition.units, locale);
    let resultEl = document.createElement('div');
    resultEl.className = `result`;
    resultEl.dataset.pointKey = pointDefinition.key;

    let iconEl = document.createElement('div');
    iconEl.className = 'result-icon';
    loadSVGIcon(iconEl, pointDefinition.key);

    let titleKey = titleKeyOverride ?? `DFXPOINT_TITLE:${pointDefinition.key}`;
    let nameLabel = document.createElement('span')
    nameLabel.className = "result-name"
    nameLabel.textContent = localize(titleKey, locale)

    let valueEl = document.createElement('span')
    valueEl.className = `result-value ${colorClass}`
    valueEl.textContent = `${formattedValue}`

    let unitEl = document.createElement('span')
    if (pointDefinition.units !== "" && pointDefinition.units !== "PERCENT") {
        unitEl.className = `result-unit`
        unitEl.textContent = `${localize(`DFXPOINT_UNIT:${pointDefinition.units}`, locale)}`
    }

    resultEl.appendChild(iconEl)

    let nameWrapper = document.createElement('div')
    nameWrapper.className = 'result-name-wrapper'
    nameWrapper.appendChild(nameLabel)

    let dialogBuilder = () => PointInfoDialog.buildPointInfoDialogOptions(pointDefinition, displayResult, locale)
    let openDialog = () => {
        let dialogOptions = dialogBuilder()
        PointInfoDialog.showPointInfoDialog(dialogOptions.title, dialogOptions.content, locale)
    }
    if (shouldShowInfoIcon(pointDefinition.key)) {
        let infoIndicator = PointInfoDialog.createResultInfoIcon(locale, openDialog)
        nameWrapper.appendChild(infoIndicator)
    }
    resultEl.appendChild(nameWrapper)

    resultEl.appendChild(valueEl)
    resultEl.appendChild(unitEl)

    // Inline gauge bar below the main row
    let gaugeBar = createInlineGaugeBar(displayResult, pointDefinition)
    if (gaugeBar) {
        resultEl.appendChild(gaugeBar)
    }

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
    resultEl.className = `result`;
    resultEl.dataset.pointKey = 'BP';

    let iconEl = document.createElement('div');
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

    let nameWrapper = document.createElement('div')
    nameWrapper.className = 'result-name-wrapper'
    nameWrapper.appendChild(nameLabel)

    let openDialog = () => {
        let dialogOptions = PointInfoDialog.buildBloodPressureInfoDialogOptions(
            systolicDefinition,
            systolicResult,
            diastolicDefinition,
            diastolicResult,
            locale
        )
        PointInfoDialog.showPointInfoDialog(dialogOptions.title, dialogOptions.content, locale)
    }
    let infoIndicator = PointInfoDialog.createResultInfoIcon(locale, openDialog)
    nameWrapper.appendChild(infoIndicator)
    resultEl.appendChild(nameWrapper)

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
    return getLocalizedValue(key, locale) ?? key
}

function getLocalizedValue(key, locale) {
    let entry = DeepAffexWebResultsData.translations[key]
    if (!entry) {
        return null
    }
    return entry[locale] ?? entry.default ?? null
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
        .catch(() => {
            iconElement.innerHTML = '☆';
            iconElement.classList.add('fallback');
        });
}

function shouldShowInfoIcon(pointKey) {
    return pointKey !== 'RISKS_SCORE' && pointKey !== 'HEALTH_SCORE';
}

// Raw values for these points are on a 1–5 scale; display as percent-of-max (value/5*100)
const PERCENT_OF_MAX_POINTS = new Set(['VITAL_SCORE', 'PHYSIO_SCORE', 'MENTAL_SCORE', 'PHYSICAL_SCORE'])

const GAUGE_BAR_SKIP_POINTS = new Set(['AGE', 'IHB_COUNT', 'SNR'])

/**
 * Creates a compact inline colored gauge bar showing value position within scale segments.
 * Returns null when no scale segments are available for the point.
 * @param {number} result - The current value.
 * @param {Object} pointDefinition - The point definition including scales.
 * @returns {HTMLElement|null}
 */
function createInlineGaugeBar(result, pointDefinition) {
    if (GAUGE_BAR_SKIP_POINTS.has(pointDefinition.key)) return null
    if (typeof result !== 'number' || isNaN(result)) return null
    let segments = pointDefinition.scales?.default?.segments
    if (!segments || segments.length === 0) return null

    let boundaries = []
    let seen = new Set()
    segments.forEach(s => {
        if (typeof s.min === 'number' && !seen.has(s.min)) { seen.add(s.min); boundaries.push(s.min) }
        if (typeof s.max === 'number' && !seen.has(s.max)) { seen.add(s.max); boundaries.push(s.max) }
    })
    boundaries.sort((a, b) => a - b)
    if (boundaries.length < 2) return null

    let wrapper = document.createElement('div')
    wrapper.className = 'result-gauge-wrapper'

    let track = document.createElement('div')
    track.className = 'result-gauge-track'
    segments.forEach(segment => {
        let block = document.createElement('div')
        block.className = 'result-gauge-segment'
        block.style.backgroundColor = getSegmentColorValue(segment.color)
        track.appendChild(block)
    })

    // Pointer position
    let min = boundaries[0]
    let max = boundaries[boundaries.length - 1]
    let clampedValue = Math.min(Math.max(result, min), max)
    let totalSegments = boundaries.length - 1
    let ratio = 0
    for (let i = 0; i < totalSegments; i++) {
        let start = boundaries[i]
        let end = boundaries[i + 1]
        if (clampedValue >= end) { ratio = i + 1; continue }
        if (clampedValue >= start && clampedValue <= end) {
            let span = end - start
            ratio = i + (span > 0 ? (clampedValue - start) / span : 0)
            break
        }
    }
    let pct = Math.min(Math.max((ratio / totalSegments) * 100, 0), 100)

    let pointerWrapper = document.createElement('div')
    pointerWrapper.className = 'result-gauge-pointer-wrapper'

    let pointer = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    pointer.setAttribute('class', 'result-gauge-pointer')
    pointer.setAttribute('width', '12')
    pointer.setAttribute('height', '12')
    pointer.setAttribute('viewBox', '0 0 20 20')
    pointer.style.left = `${pct}%`
    let whitePath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    whitePath.setAttribute('d', 'M 10 3 L 2 17 L 18 17 Z')
    whitePath.setAttribute('fill', 'white')
    pointer.appendChild(whitePath)
    let strokePath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    strokePath.setAttribute('d', 'M 10 3 L 2 17 L 18 17 Z')
    strokePath.setAttribute('fill', 'none')
    strokePath.setAttribute('stroke', 'rgba(0,0,0,0.4)')
    strokePath.setAttribute('stroke-width', '3')
    strokePath.setAttribute('stroke-linejoin', 'round')
    pointer.appendChild(strokePath)
    pointerWrapper.appendChild(pointer)

    wrapper.appendChild(track)
    wrapper.appendChild(pointerWrapper)
    return wrapper
}

function getSegmentColorValue(colorKey) {
    const COLOR_MAP = {
        green: '#4CAF50',
        lightGreen: '#8BC34A',
        yellow: '#E8B428',
        lightRed: '#FD929D',
        red: '#F44336',
        grey: '#9E9E9E'
    }
    return COLOR_MAP[colorKey] ?? '#9E9E9E'
}

function renderWellnessDialCard(healthScoreValue, definition, container, locale) {
    const CX = 120, CY = 112, OR = 90, IR = 72
    const LB = definition.lowerBound ?? 0
    const UB = definition.upperBound ?? 100
    const segments = [...(definition.scales?.default?.segments ?? [])]
        .sort((a, b) => a.min - b.min)

    function toAngle(v) {
        return 180 * (1 - (Math.min(UB, Math.max(LB, v)) - LB) / (UB - LB))
    }

    function polar(r, deg) {
        const rad = deg * Math.PI / 180
        return { x: CX + r * Math.cos(rad), y: CY - r * Math.sin(rad) }
    }

    function f(n) { return n.toFixed(2) }

    function segPath(r1, r2, sa, ea) {
        const o1 = polar(r1, sa), o2 = polar(r1, ea)
        const i2 = polar(r2, ea), i1 = polar(r2, sa)
        return `M${f(o1.x)},${f(o1.y)} A${r1},${r1} 0 0,1 ${f(o2.x)},${f(o2.y)} L${f(i2.x)},${f(i2.y)} A${r2},${r2} 0 0,0 ${f(i1.x)},${f(i1.y)} Z`
    }

    const GAP = 0.8
    const segPaths = segments.map((seg, i) => {
        const isFirst = i === 0, isLast = i === segments.length - 1
        const sa = toAngle(seg.min + (isFirst ? 0 : GAP))
        const ea = toAngle(seg.max - (isLast ? 0 : GAP))
        return `<path d="${segPath(OR, IR, sa, ea)}" fill="${getSegmentColorValue(seg.color)}"/>`
    }).join('')

    const val = (isNaN(healthScoreValue) || healthScoreValue === undefined) ? LB : healthScoreValue
    const needleAngle = toAngle(val)
    const tickOuter = polar(OR + 6, needleAngle)
    const tickInner = polar(IR - 6, needleAngle)

    // labels just inside the inner arc at 20% and 80%, shifted 14px downward
    const p20 = polar(IR - 12, toAngle(20))
    const p80 = polar(IR - 12, toAngle(80))
    const labelDrop = 2

    const pct = (isNaN(healthScoreValue) || healthScoreValue === undefined) ? '--' : `${Math.round(healthScoreValue)}%`
    const title = localize('DFXPOINT_TITLE:HEALTH_SCORE', locale)

    const svg = `<svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" aria-label="${title}: ${pct}">
      ${segPaths}
      <line x1="${f(tickInner.x)}" y1="${f(tickInner.y)}" x2="${f(tickOuter.x)}" y2="${f(tickOuter.y)}" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <text x="${f(p20.x)}" y="${f(p20.y + labelDrop)}" fill="rgba(255,255,255,0.7)" font-size="13" text-anchor="middle">20</text>
      <text x="${f(p80.x)}" y="${f(p80.y + labelDrop)}" fill="rgba(255,255,255,0.7)" font-size="13" text-anchor="middle">80</text>
      <text x="${CX}" y="${CY - 10}" fill="white" font-size="36" font-weight="bold" text-anchor="middle" dominant-baseline="middle">${pct}</text>
    </svg>`

    const card = document.createElement('div')
    card.className = 'wellness-dial-card'
    card.innerHTML = svg

    const labelEl = document.createElement('p')
    labelEl.className = 'wellness-dial-label'
    labelEl.textContent = title

    const infoOpenDialog = () => {
        const opts = PointInfoDialog.buildPointInfoDialogOptions(definition, val, locale)
        PointInfoDialog.showPointInfoDialog(opts.title, opts.content, locale)
    }
    labelEl.appendChild(PointInfoDialog.createResultInfoIcon(locale, infoOpenDialog))

    card.appendChild(labelEl)

    container.appendChild(card)
}

/**
 * Renders the header.
 * @param {string} lang - The language code.
 */
function renderHeader(lang) {
    let header = document.getElementById('main-header');
    if (!header) return;
    let title = document.createElement('h1');
    title.textContent = localize("APP_NAME", lang);
    header.appendChild(title);
}

/**
 * Renders the disclaimer.
 * @param {string} lang - The language code.
 */
function renderDisclaimer(lang) {
    let container = document.getElementById('disclaimer-container');
    let p = document.createElement('p');
    p.className = "footer-disclaimer";
    p.style.fontSize = '16px';
    
    let icon = document.createElement('img');
    icon.src = 'assets/imgs/warning32.png';
    icon.alt = 'Warning';
    icon.style.width = '18px';
    icon.style.height = '18px';
    icon.style.marginRight = '5px';
    icon.style.verticalAlign = 'middle';
    icon.style.display = 'inline-block';
    
    let text = document.createTextNode(localize("RESULTS_DISCLAIMER", lang));
    
    p.appendChild(icon);
    p.appendChild(text);
    container.appendChild(p);
}

