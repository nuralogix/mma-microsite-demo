const PointInfoDialog = (() => {
    const POINT_DESCRIPTION_KEYS = {
        IHB_COUNT: 'IHB',
        BR_BPM: 'BREATHING',
        HRV_SDNN: 'HRV',
        BP_SYSTOLIC: 'BP_SYS',
        BP_DIASTOLIC: 'BP_DIA',
        BMI_CALC: 'BMI',
        ABSI: 'BSI',
        WAIST_TO_HEIGHT: 'WATHR',
        BP_RPP: 'CARDIACWORKLOAD',
        BP_CVD: 'CVD_RISK',
        BP_HEART_ATTACK: 'HEART_ATTACK_RISK',
        BP_STROKE: 'STROKE_RISK',
        SNR: 'SNR',
        OVERALL_METABOLIC_RISK_PROB: 'OVERALL_METABOLIC_RISK_PROB',
        HPT_RISK_PROB: 'HYPERTENSION_RISK',
        DBT_RISK_PROB: 'TYPE2_DIABETES',
        HDLTC_RISK_PROB: 'HYPERCHOLESTEROLEMIA_RISK',
        TG_RISK_PROB: 'HYPERTRIGLYCERIDEMIA_RISK',
        FLD_RISK_PROB: 'FLD_RISK_PROB',
        HBA1C_RISK_PROB: 'HBA1C_RISK_PROB',
        MFBG_RISK_PROB: 'MFBG_RISK_PROB',
        SKINAGE: 'SKINAGE',
        CARDIACWORKLOAD: 'CARDIACWORKLOAD',
        VASCULARAGE: 'VASCULARAGE',
        VASCULARCAPACITY: 'VASCULARCAPACITY'
    }

    const POINTS_WITHOUT_INDICATOR = new Set(['AGE', 'SNR'])

    const STAR_POINT_IDS = new Set(['SIGNAL_STAR_INFO', 'STAR_RATING'])

    const SEGMENT_COLOR_MAP = {
        green: '#4CAF50',
        lightGreen: '#8BC34A',
        yellow: '#E8B428',
        lightRed: '#FD929D',
        red: '#F44336',
        grey: '#9E9E9E'
    }

    const POINT_INFO_DEBUG_LOGS = true

    let pointInfoDialogOverlay = null

    function logPointInfoDebug(message, payload = {}) {
        if (!POINT_INFO_DEBUG_LOGS) {
            return
        }
        console.info('[PointInfoDialog]', message, payload)
    }

    function buildPointInfoDialogOptions(pointDefinition, pointValue, locale) {
        let title = null;
        if (pointDefinition && pointDefinition.key) {
            let localizedTitle = getLocalizedValue(`DFXPOINT_TITLE:${pointDefinition.key}`, locale);
            if (localizedTitle) {
                title = localizedTitle;
            }
        }
        return {
            title: title,
            content: createPointInfoBody(pointDefinition, locale, pointValue)
        }
    }

    function buildBloodPressureInfoDialogOptions(systolicDefinition, systolicValue, diastolicDefinition, diastolicValue, locale) {
        let fragment = document.createDocumentFragment()
        let strings = getInfoDialogStrings(locale)
        let intro = document.createElement('p')
        intro.textContent = strings.bloodPressureIntro
        fragment.appendChild(intro)

        fragment.appendChild(
            createPointInfoSubSection(
                localize('DFXPOINT_TITLE:BP_SYSTOLIC', locale),
                systolicDefinition,
                systolicValue,
                locale
            )
        )
        fragment.appendChild(
            createPointInfoSubSection(
                localize('DFXPOINT_TITLE:BP_DIASTOLIC', locale),
                diastolicDefinition,
                diastolicValue,
                locale
            )
        )

        return {
            title: localize('DFXPOINT_TITLE:BP', locale),
            content: fragment
        }
    }

    function createResultInfoIcon(locale, onActivate) {
        let indicator = document.createElement('span')
        indicator.className = 'result-info-icon'
        let strings = getInfoDialogStrings(locale)
        indicator.title = strings.moreInfoLabel
        indicator.setAttribute('aria-hidden', 'true')
        indicator.textContent = 'i'
        indicator.addEventListener('click', event => {
            event.stopPropagation()
            onActivate()
        })
        return indicator
    }

    function showPointInfoDialog(title, content, locale) {
        let overlay = ensurePointInfoDialog()
        let titleEl = overlay.querySelector('.point-info-title')
        let contentEl = overlay.querySelector('.point-info-content')
        let closeBtn = overlay.querySelector('.point-info-close')
        let strings = getInfoDialogStrings(locale)

        if (title) {
            titleEl.textContent = title
            titleEl.style.display = 'block'
        } else {
            titleEl.style.display = 'none'
        }
        contentEl.innerHTML = ''
        contentEl.appendChild(content)
        closeBtn.setAttribute('aria-label', strings.closeLabel)

        overlay.classList.add('visible')
        document.body.classList.add('info-dialog-open')
        closeBtn.focus()
    }

    function hidePointInfoDialog() {
        if (!pointInfoDialogOverlay) {
            return
        }
        pointInfoDialogOverlay.classList.remove('visible')
        document.body.classList.remove('info-dialog-open')
    }

    function createPointInfoSubSection(title, pointDefinition, pointValue, locale) {
        let wrapper = document.createElement('div')
        wrapper.className = 'point-info-subsection'
        let heading = document.createElement('h3')
        heading.textContent = title
        wrapper.appendChild(heading)
        wrapper.appendChild(createPointInfoBody(pointDefinition, locale, pointValue))
        return wrapper
    }

    function createPointInfoBody(pointDefinition, locale, pointValue) {
        let enhancedSection = document.createElement('div')
        enhancedSection.className = 'point-info-body'

        let indicator = createSegmentsIndicator(pointDefinition, pointValue, locale)
        if (indicator) {
            enhancedSection.appendChild(indicator)
            logPointInfoDebug('Added segments indicator to dialog body', { pointKey: pointDefinition.key })
        }

        let descriptionBlock = createPointDescriptionBlock(pointDefinition, pointValue, locale)
        if (descriptionBlock) {
            enhancedSection.appendChild(descriptionBlock)
            logPointInfoDebug('Added description block to dialog body', { pointKey: pointDefinition.key })
        } else {
            logPointInfoDebug('Description block missing', { pointKey: pointDefinition.key })
        }

        let fragment = document.createDocumentFragment()
            fragment.appendChild(enhancedSection)
            
        return fragment
    }

    function createLegacyPointInfoContent(pointDefinition, locale) {
        let fragment = document.createDocumentFragment()
        let strings = getInfoDialogStrings(locale)
        let measurementName = localize(`DFXPOINT_TITLE:${pointDefinition.key}`, locale)
        let unitLabel = getLocalizedUnit(pointDefinition.units, locale)

        let summary = document.createElement('p')
        if (unitLabel) {
            summary.textContent = formatInfoTemplate(strings.summaryWithUnit, { title: measurementName, unit: unitLabel })
        } else {
            summary.textContent = formatInfoTemplate(strings.summaryWithoutUnit, { title: measurementName })
        }
        fragment.appendChild(summary)

        if (typeof pointDefinition.lowerBound === 'number' && typeof pointDefinition.upperBound === 'number') {
            let rangeParagraph = document.createElement('p')
            let lowerText = formatValueWithUnit(pointDefinition.lowerBound, pointDefinition, locale)
            let upperText = formatValueWithUnit(pointDefinition.upperBound, pointDefinition, locale)
            rangeParagraph.textContent = `${strings.rangeLabel}: ${lowerText} - ${upperText}`
            fragment.appendChild(rangeParagraph)
        }

        let segments = pointDefinition.scales?.default?.segments
        if (segments && segments.length > 0) {
            let legendTitle = document.createElement('p')
            legendTitle.className = 'point-info-legend-title'
            legendTitle.textContent = strings.legendLabel
            fragment.appendChild(legendTitle)

            let list = document.createElement('ul')
            list.className = 'point-info-scale-list'
            segments.forEach(segment => {
                list.appendChild(createLegendListItem(segment, pointDefinition, locale))
            })
            fragment.appendChild(list)
        }

        return fragment
    }

    function createLegendListItem(segment, pointDefinition, locale) {
        let listItem = document.createElement('li')
        let color = segment.color || 'grey'
        let swatch = document.createElement('span')
        swatch.className = `point-info-color-swatch ${color}`
        listItem.appendChild(swatch)

        let strings = getInfoDialogStrings(locale)
        let rangeText = formatSegmentRange(segment, pointDefinition, locale)
        let colorLabel = getColorLabelLabel(color, locale)
        let textSpan = document.createElement('span')
        textSpan.textContent = `${rangeText} - ${colorLabel}`
        listItem.appendChild(textSpan)

        return listItem
    }

    function formatSegmentRange(segment, pointDefinition, locale) {
        let strings = getInfoDialogStrings(locale)
        let minText = typeof segment.min === 'number' ? formatValueWithUnit(segment.min, pointDefinition, locale) : null
        let maxText = typeof segment.max === 'number' ? formatValueWithUnit(segment.max, pointDefinition, locale) : null

        if (minText && maxText) {
            return formatInfoTemplate(strings.rangeBetween, { min: minText, max: maxText })
        }
        if (minText) {
            return formatInfoTemplate(strings.rangeAtLeast, { value: minText })
        }
        if (maxText) {
            return formatInfoTemplate(strings.rangeAtMost, { value: maxText })
        }
        return strings.noRange
    }

    function formatValueWithUnit(value, pointDefinition, locale) {
        if (typeof value !== 'number') {
            return '?'
        }
        let formatted = formatResultValue(value, pointDefinition.decimalPlaces ?? 0, pointDefinition.units ?? '', locale)
        let unit = pointDefinition.units
        if (!unit || unit === 'PERCENT') {
            return formatted
        }
        let unitLabel = getLocalizedUnit(unit, locale)
        return unitLabel ? `${formatted} ${unitLabel}` : formatted
    }

    function getLocalizedUnit(unitKey, locale) {
        if (!unitKey) {
            return ''
        }
        return localize(`DFXPOINT_UNIT:${unitKey}`, locale)
    }

    function getColorLabelLabel(colorKey, locale) {
        let strings = getInfoDialogStrings(locale)
        return strings.colorLabels[colorKey] || colorKey
    }

    function createPointDescriptionBlock(pointDefinition, pointValue, locale) {
        if (!pointDefinition) {
            logPointInfoDebug('Missing point definition for description block', { locale })
            return null
        }
        logPointInfoDebug('Resolving point description', { pointKey: pointDefinition.key, locale })
        if (STAR_POINT_IDS.has(pointDefinition.key)) {
            logPointInfoDebug('Rendering star info content', { pointKey: pointDefinition.key })
            return createStarInfoContent(pointValue, locale)
        }
        if (pointDefinition.key === 'HR_BPM') {
            logPointInfoDebug('Routing to heart rate info content', { pointValue, locale })
            let heartRateBlock = createHeartRateInfoContent(pointValue, locale)
            if (heartRateBlock) {
                return heartRateBlock
            }
            logPointInfoDebug('Heart rate block unavailable, falling back to markdown lookup', { pointValue, locale })
        }
        if (pointDefinition.key === 'MSI') {
            logPointInfoDebug('Routing to MSI info content', { pointValue, locale })
            let msiBlock = createMsiInfoContent(pointValue, locale)
            if (msiBlock) {
                return msiBlock
            }
            logPointInfoDebug('MSI block unavailable, falling back to markdown lookup', { pointValue, locale })
        }
        let descriptionKey = getDescriptionLocalizationKey(pointDefinition.key)
        if (!descriptionKey) {
            logPointInfoDebug('No description localization key found', { pointKey: pointDefinition.key })
            return null
        }
        let localizationKey = `DFXPOINT_DESC:${descriptionKey}`
        let localizationRecord = resolveDescriptionLocalization(localizationKey)
        if (!localizationRecord) {
            logPointInfoDebug('No markdown found for localization key', {
                pointKey: pointDefinition.key,
                localizationKey,
                locale,
                hasTranslationEntry: false
            })
            return null
        }
        let markdown = getMarkdownFromLocalizationEntry(localizationRecord, locale)
        if (!markdown) {
            logPointInfoDebug('Description localization entry missing locale content', {
                pointKey: pointDefinition.key,
                localizationKey,
                locale,
                source: localizationRecord.source
            })
            return null
        }
        logPointInfoDebug('Rendering markdown description', {
            pointKey: pointDefinition.key,
            localizationKey,
            locale,
            source: localizationRecord.source
        })
        return createMarkdownElement(markdown, locale)
    }

    function getDescriptionLocalizationKey(pointKey) {
        if (!pointKey) {
            return null
        }
        return POINT_DESCRIPTION_KEYS[pointKey] || pointKey
    }

    function createHeartRateInfoContent(pointValue, locale) {
        if (typeof pointValue !== 'number' || isNaN(pointValue)) {
            logPointInfoDebug('Heart rate info missing point value', { pointValue })
            return null
        }
        let config = getHeartRateContentConfig(pointValue)
        if (!config) {
            logPointInfoDebug('Heart rate config not found for value', { pointValue })
            return null
        }
        logPointInfoDebug('Rendering heart rate markdown', { pointValue, config })
        return buildStatefulMarkdownBlock(config.titleKey, config.descriptionKey, locale)
    }

    function createMsiInfoContent(pointValue, locale) {
        if (typeof pointValue !== 'number' || isNaN(pointValue)) {
            logPointInfoDebug('MSI info missing point value', { pointValue })
            return null
        }
        let config = getMsiContentConfig(pointValue)
        if (!config) {
            logPointInfoDebug('MSI config not found for value', { pointValue })
            return null
        }
        logPointInfoDebug('Rendering MSI markdown', { pointValue, config })
        return buildStatefulMarkdownBlock(config.titleKey, config.descriptionKey, locale)
    }

    function buildStatefulMarkdownBlock(titleKey, descriptionKey, locale) {
        let localizationRecord = resolveDescriptionLocalization(descriptionKey)
        if (!localizationRecord) {
            logPointInfoDebug('Missing translation entry for stateful markdown', { descriptionKey, locale })
            return null
        }
        let markdown = getMarkdownFromLocalizationEntry(localizationRecord, locale)
        if (!markdown) {
            logPointInfoDebug('Stateful markdown missing after fallback', {
                descriptionKey,
                locale,
                source: localizationRecord.source
            })
            return null
        }
        let container = document.createElement('div')
        container.className = 'point-info-special-block'
        let label = document.createElement('p')
        label.className = 'point-info-state-label'
        label.textContent = `${localize('DFXPOINT_DESC:STRESS_STATE', locale)}: ${localize(titleKey, locale)}`
        container.appendChild(label)
        let markdownElement = createMarkdownElement(markdown, locale)
        if (markdownElement) {
            container.appendChild(markdownElement)
        } else {
            logPointInfoDebug('Markdown renderer returned null', { descriptionKey })
        }
        return container
    }

    function getHeartRateContentConfig(value) {
        if (value < 60) {
            return {
                titleKey: 'DFXPOINT_DESC:HR_TITLE_1',
                descriptionKey: 'DFXPOINT_DESC:HR_1'
            }
        }
        if (value <= 100) {
            return {
                titleKey: 'DFXPOINT_DESC:HR_TITLE_2',
                descriptionKey: 'DFXPOINT_DESC:HR_2'
            }
        }
        return {
            titleKey: 'DFXPOINT_DESC:HR_TITLE_3',
            descriptionKey: 'DFXPOINT_DESC:HR_3'
        }
    }

    function getMsiContentConfig(value) {
        if (value < 2) {
            return {
                titleKey: 'DFXPOINT_DESC:STRESS_TITLE_1',
                descriptionKey: 'DFXPOINT_DESC:STRESS_1'
            }
        }
        if (value < 3) {
            return {
                titleKey: 'DFXPOINT_DESC:STRESS_TITLE_2',
                descriptionKey: 'DFXPOINT_DESC:STRESS_2'
            }
        }
        if (value < 4) {
            return {
                titleKey: 'DFXPOINT_DESC:STRESS_TITLE_3',
                descriptionKey: 'DFXPOINT_DESC:STRESS_3'
            }
        }
        if (value < 5) {
            return {
                titleKey: 'DFXPOINT_DESC:STRESS_TITLE_4',
                descriptionKey: 'DFXPOINT_DESC:STRESS_4'
            }
        }
        return {
            titleKey: 'DFXPOINT_DESC:STRESS_TITLE_5',
            descriptionKey: 'DFXPOINT_DESC:STRESS_5'
        }
    }

    function createStarInfoContent(pointValue, locale) {
        let container = document.createElement('div')
        container.className = 'point-info-star-content'
        let starRow = document.createElement('div')
        starRow.className = 'point-info-stars'
        let rating = typeof pointValue === 'number' && !isNaN(pointValue) ? Math.ceil(pointValue) : 0
        rating = clamp(rating, 0, 5)
        for (let i = 1; i <= 5; i++) {
            let star = document.createElement('div')
            star.className = `star ${i <= rating ? 'greenBackground' : 'greyBackground'}`
            starRow.appendChild(star)
        }
        container.appendChild(starRow)
        let markdown = getLocalizedValue('DFXPOINT_DESC:STAR_RATING', locale)
        if (markdown) {
            let markdownElement = createMarkdownElement(markdown, locale)
            if (markdownElement) {
                container.appendChild(markdownElement)
            }
        }
        return container
    }

    function createSegmentsIndicator(pointDefinition, pointValue, locale) {
        if (!pointDefinition || typeof pointValue !== 'number' || isNaN(pointValue)) {
            return null
        }
        if (POINTS_WITHOUT_INDICATOR.has(pointDefinition.key)) {
            return null
        }
        let segments = pointDefinition.scales?.default?.segments
        if (!segments || segments.length === 0) {
            return null
        }
        let boundaries = getSegmentBoundaries(segments)
        if (boundaries.length < 2) {
            return null
        }
        let indicator = document.createElement('div')
        indicator.className = 'point-info-segments'

        let valueLabel = document.createElement('div')
        valueLabel.className = `point-info-current-value ${getColorClass(pointValue, pointDefinition)}`
        valueLabel.textContent = formatValueWithUnit(pointValue, pointDefinition, locale)
        indicator.appendChild(valueLabel)

        let labelsRow = document.createElement('div')
        labelsRow.className = 'point-info-segment-labels'
        boundaries.forEach(boundary => {
            let label = document.createElement('span')
            label.textContent = formatSegmentLabel(boundary, pointDefinition, locale)
            labelsRow.appendChild(label)
        })
        indicator.appendChild(labelsRow)

        let trackWrapper = document.createElement('div')
        trackWrapper.className = 'point-info-segments-track-wrapper'

        let track = document.createElement('div')
        track.className = 'point-info-segments-track'
        segments.forEach(segment => {
            let block = document.createElement('div')
            block.className = 'point-info-segment-block'
            block.style.backgroundColor = getSegmentColorValue(segment.color)
            track.appendChild(block)
        })

        let pointer = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        pointer.setAttribute('class', 'point-info-segment-pointer')
        pointer.setAttribute('width', '15')
        pointer.setAttribute('height', '15')
        pointer.setAttribute('viewBox', '0 0 20 20')
        pointer.style.left = `${calculatePointerPercent(pointValue, boundaries)}%`
        // White fill triangle
        let whitePath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        whitePath.setAttribute('d', 'M 10 2 L 3 18 L 17 18 Z')
        whitePath.setAttribute('fill', 'white')
        pointer.appendChild(whitePath)
        // Black stroke triangle with rounded corners
        let blackPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        blackPath.setAttribute('d', 'M 10 2 L 3 18 L 17 18 Z')
        blackPath.setAttribute('fill', 'none')
        blackPath.setAttribute('stroke', 'black')
        blackPath.setAttribute('stroke-width', '5')
        blackPath.setAttribute('stroke-linejoin', 'round')
        pointer.appendChild(blackPath)
        trackWrapper.appendChild(track)
        trackWrapper.appendChild(pointer)
        indicator.appendChild(trackWrapper)
        return indicator
    }

    function formatSegmentLabel(value, pointDefinition, locale) {
        if (typeof value !== 'number') {
            return ''
        }
        let decimals = typeof pointDefinition.decimalPlaces === 'number' ? pointDefinition.decimalPlaces : 0
        return formatResultValue(value, decimals, pointDefinition.units ?? '', locale)
    }

    function getSegmentBoundaries(segments) {
        let boundaries = new Set()
        segments.forEach(segment => {
            if (typeof segment.min === 'number') {
                boundaries.add(segment.min)
            }
            if (typeof segment.max === 'number') {
                boundaries.add(segment.max)
            }
        })
        return Array.from(boundaries).sort((a, b) => a - b)
    }

    function calculatePointerPercent(pointValue, boundaries) {
        if (!boundaries || boundaries.length < 2) {
            return 0
        }
        let min = boundaries[0]
        let max = boundaries[boundaries.length - 1]
        let clampedValue = clamp(pointValue, min, max)
        let totalSegments = boundaries.length - 1
        let ratio = 0

        for (let i = 0; i < totalSegments; i++) {
            let start = boundaries[i]
            let end = boundaries[i + 1]
            if (clampedValue >= end) {
                ratio = i + 1
                continue
            }
            if (clampedValue >= start && clampedValue <= end) {
                let span = end - start
                let progress = span > 0 ? (clampedValue - start) / span : 0
                ratio = i + progress
                break
            }
        }

        return clamp((ratio / totalSegments) * 100, 0, 100)
    }

    function clamp(value, min, max) {
        if (typeof value !== 'number' || isNaN(value)) {
            return min
        }
        return Math.min(Math.max(value, min), max)
    }

    function getSegmentColorValue(colorKey) {
        if (!colorKey) {
            return SEGMENT_COLOR_MAP.grey
        }
        return SEGMENT_COLOR_MAP[colorKey] || colorKey
    }

    function resolveDescriptionLocalization(localizationKey) {
        if (!localizationKey) {
            return null
        }
        logPointInfoDebug('Checking window.DeepAffexWebResultsData', { exists: !!window.DeepAffexWebResultsData, translations: !!window.DeepAffexWebResultsData?.translations })
        let datasetEntry = DeepAffexWebResultsData?.translations?.[localizationKey]
        logPointInfoDebug('Dataset entry for', { localizationKey, exists: !!datasetEntry })
        if (datasetEntry) {
            return { entry: datasetEntry, source: 'dataset' }
        }
        return null
    }

    function getMarkdownFromLocalizationEntry(localizationRecord, locale) {
        if (!localizationRecord || !localizationRecord.entry) {
            return null
        }
        return localizationRecord.entry[locale] ?? localizationRecord.entry.default ?? null
    }

    function createMarkdownElement(markdownText, locale) {
        if (!markdownText) {
            logPointInfoDebug('createMarkdownElement received empty text')
            return null
        }
        let wrapper = document.createElement('div')
        wrapper.className = 'point-info-markdown'
        wrapper.appendChild(renderMarkdownToFragment(replaceAppNamePlaceholders(markdownText, locale)))
        return wrapper
    }

    function renderMarkdownToFragment(markdownText) {
        let fragment = document.createDocumentFragment()
        if (!markdownText) {
            return fragment
        }
        let normalized = markdownText.replace(/\r\n/g, '\n')
        let lines = normalized.split('\n')
        let index = 0
        let unorderedList = null
        let orderedList = null

        function flushLists() {
            if (unorderedList) {
                fragment.appendChild(unorderedList)
                unorderedList = null
            }
            if (orderedList) {
                fragment.appendChild(orderedList)
                orderedList = null
            }
        }

        while (index < lines.length) {
            let line = lines[index]
            if (!line.trim()) {
                flushLists()
                index++
                continue
            }

            if (isTableStart(lines, index)) {
                flushLists()
                let table = parseMarkdownTable(lines, index)
                fragment.appendChild(table.element)
                index = table.nextIndex
                continue
            }

            let headingMatch = line.match(/^(#{1,4})\s+(.*)$/)
            if (headingMatch) {
                flushLists()
                let level = Math.min(headingMatch[1].length, 4)
                let headingTag = level <= 2 ? 'h3' : 'h4'
                let heading = document.createElement(headingTag)
                heading.innerHTML = convertInlineMarkdown(headingMatch[2])
                fragment.appendChild(heading)
                index++
                continue
            }

            let unorderedMatch = line.match(/^\s*[-*]\s+(.*)$/)
            if (unorderedMatch) {
                if (orderedList) {
                    fragment.appendChild(orderedList)
                    orderedList = null
                }
                if (!unorderedList) {
                    unorderedList = document.createElement('ul')
                    unorderedList.className = 'point-info-markdown-list'
                }
                let listItem = document.createElement('li')
                listItem.innerHTML = convertInlineMarkdown(unorderedMatch[1])
                unorderedList.appendChild(listItem)
                index++
                continue
            }

            let orderedMatch = line.match(/^\s*\d+\.\s+(.*)$/)
            if (orderedMatch) {
                if (unorderedList) {
                    fragment.appendChild(unorderedList)
                    unorderedList = null
                }
                if (!orderedList) {
                    orderedList = document.createElement('ol')
                    orderedList.className = 'point-info-markdown-list'
                }
                let listItem = document.createElement('li')
                listItem.innerHTML = convertInlineMarkdown(orderedMatch[1])
                orderedList.appendChild(listItem)
                index++
                continue
            }

            let paragraphLines = [line]
            index++
            while (index < lines.length) {
                let nextLine = lines[index]
                if (!nextLine.trim() || /^(#{1,4})\s+/.test(nextLine) || /^\s*[-*]\s+/.test(nextLine) || /^\s*\d+\.\s+/.test(nextLine) || isTableStart(lines, index)) {
                    break
                }
                paragraphLines.push(nextLine)
                index++
            }
            flushLists()
            let paragraph = document.createElement('p')
            paragraph.innerHTML = paragraphLines.map(item => convertInlineMarkdown(item.trim())).join('<br>')
            fragment.appendChild(paragraph)
        }

        flushLists()
        return fragment
    }

    function isTableStart(lines, index) {
        if (index + 1 >= lines.length) {
            return false
        }
        return /^\s*\|/.test(lines[index]) && isTableSeparator(lines[index + 1])
    }

    function parseMarkdownTable(lines, startIndex) {
        let headerCells = splitTableRow(lines[startIndex])
        let nextIndex = startIndex + 2
        let rows = []
        while (nextIndex < lines.length) {
            let rowLine = lines[nextIndex]
            if (!rowLine.trim() || !/\|/.test(rowLine)) {
                break
            }
            if (!/^\s*\|/.test(rowLine)) {
                break
            }
            rows.push(splitTableRow(rowLine))
            nextIndex++
        }

        let table = document.createElement('table')
        let thead = document.createElement('thead')
        let headerRow = document.createElement('tr')
        headerCells.forEach(cell => {
            let th = document.createElement('th')
            th.innerHTML = convertInlineMarkdown(cell)
            headerRow.appendChild(th)
        })
        thead.appendChild(headerRow)
        table.appendChild(thead)

        if (rows.length) {
            let tbody = document.createElement('tbody')
            rows.forEach(row => {
                let tr = document.createElement('tr')
                row.forEach(cell => {
                    let td = document.createElement('td')
                    td.innerHTML = convertInlineMarkdown(cell)
                    tr.appendChild(td)
                })
                tbody.appendChild(tr)
            })
            table.appendChild(tbody)
        }

        return { element: table, nextIndex }
    }

    function splitTableRow(line) {
        return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim())
    }

    function isTableSeparator(line) {
        return /^\s*\|?[-:\s|]+\|?\s*$/.test(line)
    }

    function convertInlineMarkdown(text) {
        if (!text) {
            return ''
        }
        let escaped = escapeHtml(text)
        escaped = escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer noopener">$1</a>')
        escaped = escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        escaped = escaped.replace(/__(.+?)__/g, '<strong>$1</strong>')
        escaped = escaped.replace(/(^|\s)_(.+?)_(?=$|\s|[.,;:!?\)])/g, (_, prefix, value) => `${prefix}<em>${value}</em>`)
        escaped = escaped.replace(/(^|\s)\*(.+?)\*(?=$|\s|[.,;:!?\)])/g, (_, prefix, value) => `${prefix}<em>${value}</em>`)
        return escaped
    }

    function escapeHtml(text) {
        return text.replace(/[&<>"]|'|/g, char => {
            switch (char) {
                case '&': return '&amp;'
                case '<': return '&lt;'
                case '>': return '&gt;'
                case '"': return '&quot;'
                case "'": return '&#39;'
                default: return char
            }
        })
    }

    function replaceAppNamePlaceholders(text, locale) {
        if (!text) {
            return ''
        }
        return text.replace(/\{APP_NAME\}/g, getAppName(locale))
    }

    function getAppName(locale) {
        if (typeof window !== 'undefined' && window.APP_NAME) {
            return window.APP_NAME
        }
        return localize('APP_NAME', locale)
    }

    function getInfoDialogStrings(locale) {
        let normalized = (locale || 'en').split('-')[0].toLowerCase()
        return INFO_DIALOG_STRINGS[normalized] || INFO_DIALOG_STRINGS.default
    }

    function formatInfoTemplate(template, replacements) {
        return template.replace(/\{(\w+)\}/g, (_, key) => replacements[key] ?? '')
    }

    function ensurePointInfoDialog() {
        if (pointInfoDialogOverlay) {
            return pointInfoDialogOverlay
        }
        let overlay = document.createElement('div')
        overlay.className = 'point-info-overlay'
        overlay.setAttribute('role', 'dialog')
        overlay.setAttribute('aria-modal', 'true')

        let dialog = document.createElement('div')
        dialog.className = 'point-info-dialog'

        let closeButton = document.createElement('button')
        closeButton.type = 'button'
        closeButton.className = 'point-info-close'
        dialog.appendChild(closeButton)

        let titleEl = document.createElement('h2')
        titleEl.className = 'point-info-title'
        dialog.appendChild(titleEl)

        let contentEl = document.createElement('div')
        contentEl.className = 'point-info-content'
        dialog.appendChild(contentEl)

        overlay.appendChild(dialog)
        document.body.appendChild(overlay)

        overlay.addEventListener('click', event => {
            if (event.target === overlay) {
                hidePointInfoDialog()
            }
        })

        closeButton.addEventListener('click', hidePointInfoDialog)

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && overlay.classList.contains('visible')) {
                hidePointInfoDialog()
            }
        })

        pointInfoDialogOverlay = overlay
        return overlay
    }

    const INFO_DIALOG_STRINGS = {
        default: {
            moreInfoLabel: 'More info',
            summaryWithUnit: '{title} is measured in {unit}.',
            summaryWithoutUnit: '{title} is a unitless score.',
            rangeLabel: 'Typical range',
            legendLabel: 'Color legend',
            rangeBetween: '{min} - {max}',
            rangeAtLeast: '>= {value}',
            rangeAtMost: '<= {value}',
            noRange: 'Range unavailable',
            closeLabel: 'Close',
            bloodPressureIntro: 'Blood pressure pairs systolic (upper) and diastolic (lower) readings.',
            colorLabels: {
                green: 'Optimal',
                lightGreen: 'Good',
                yellow: 'Caution',
                lightRed: 'Elevated',
                red: 'High',
                grey: 'No data'
            }
        },
        zh: {
            moreInfoLabel: '更多信息',
            summaryWithUnit: '{title}以{unit}为单位。',
            summaryWithoutUnit: '{title}为无单位评分。',
            rangeLabel: '典型范围',
            legendLabel: '颜色含义',
            rangeBetween: '{min} - {max}',
            rangeAtLeast: '>= {value}',
            rangeAtMost: '<= {value}',
            noRange: '暂无范围',
            closeLabel: '关闭',
            bloodPressureIntro: '血压由收缩压（上压）和舒张压（下压）两部分组成。',
            colorLabels: {
                green: '最佳',
                lightGreen: '良好',
                yellow: '注意',
                lightRed: '偏高',
                red: '危险',
                grey: '暂无'
            }
        },
        ko: {
            moreInfoLabel: '자세히 보기',
            summaryWithUnit: '{title}는 {unit} 단위로 표시됩니다.',
            summaryWithoutUnit: '{title}는 단위가 없는 점수입니다.',
            rangeLabel: '권장 범위',
            legendLabel: '색상 안내',
            rangeBetween: '{min} - {max}',
            rangeAtLeast: '>= {value}',
            rangeAtMost: '<= {value}',
            noRange: '범위 정보 없음',
            closeLabel: '닫기',
            bloodPressureIntro: '혈압은 수축기(위)와 이완기(아래) 수치로 구성됩니다.',
            colorLabels: {
                green: '양호',
                lightGreen: '좋음',
                yellow: '주의',
                lightRed: '높음',
                red: '매우 높음',
                grey: '데이터 없음'
            }
        }
    }

    return {
        buildPointInfoDialogOptions,
        buildBloodPressureInfoDialogOptions,
        showPointInfoDialog,
        hidePointInfoDialog,
        createResultInfoIcon
    }
})()

if (typeof window !== 'undefined') {
    window.PointInfoDialog = PointInfoDialog
}
