# Copilot instructions for mma-microsite-demo

This is a small static microsite that decodes an encoded MMA device result payload from the URL and renders a localized, sectioned results page.

- **Entry point:** `index.html` — it loads `js/vendor/float16.min.js`, then `js/data.js`, `js/point-info-dialog.js`, and `js/results-app.js`.
- **Primary data flow:** URL param `r` -> `getResultsFromQueryString()` (in `index.html`) -> `decodeNuraQRString()` (in `js/results-app.js`) -> results object used by `renderResults()`.

Key details you must know when making code changes:

- The payload format: `decodeNuraQRString()` expects a base64+URI-encoded string. It checks header bytes `0x4e,0x51,0x31` ("NQ1"), reads a compact timestamp (bytes 3–6), then parses the remaining bytes as 4-byte entries: 2-byte point ID hash + 2-byte float16 value (parsed with `getFloat16` from `js/vendor/float16.min.js`).
- Result object keys are numeric-string hashes produced by `convertHashByteArrayToString` (e.g. `"12" + "34"` concatenation of the two bytes). To look up a human-friendly point value use:

  - `results[convertPointIDStringToHashString('HR_BPM')]` — see `convertPointIDStringToHashString()` in `js/results-app.js`.

- `js/data.js` defines `DeepAffexWebResultsData`:
  - `definitions.pointDefinitions` — measurement metadata (units, decimalPlaces, scales).
  - `sections` — groups and order used by `renderResults()`.
  - `translations` — localization entries referenced by `localize()`.

- Rendering and UI patterns:
  - `renderResults()` iterates `sections`, uses `renderResultRow()` and a special `renderBloodPressureRow()` when `BP_SYSTOLIC` + `BP_DIASTOLIC` pair is found.
  - Color logic comes from `pointDefinition.scales.default.segments`; color class names (e.g. `green`, `lightRed`) map to CSS in `index.html`.
  - Info dialogs are built with `PointInfoDialog` (`js/point-info-dialog.js`) which uses localization keys like `DFXPOINT_TITLE:KEY` and `DFXPOINT_DESC:KEY`.

- Localization and markdown:
  - Use `DeepAffexWebResultsData.translations` for strings; `getLocalizedValue(key, locale)` falls back to `entry.default` then the key.
  - `PointInfoDialog` will try to render markdown descriptions from `DFXPOINT_DESC:*` entries — add those to `js/data.js` if needed.

- Assets and icons:
  - SVG icons live in `assets/svg/<ICON>.svg` and are loaded via `loadSVGIcon()` (uses `fetch`, so serve over HTTP).
  - Images are in `assets/imgs/`.

- How to run locally (no build step):

  - Python: `python -m http.server 8080`
  - Node: `npx http-server -p 8080`

  Open the sample URL from `README.md` (contains a sample `?r=` payload) to test rendering.

- Debugging tips specific to this repo:
  - SVG fetches will fail on `file://` — always run an HTTP server.
  - Put a breakpoint in `decodeNuraQRString()` to inspect `resultsPayloadByteArray`, `timestamp`, or thrown errors.
  - `PointInfoDialog` has `POINT_INFO_DEBUG_LOGS` (currently `true`) — set to `false` to silence verbose logs.
  - If a point value is missing, remember that keys are hashes; missing definitions are in `data.js`.

- When adding measurements:
  - Add metadata to `definitions.pointDefinitions` in `js/data.js` (units, decimalPlaces, scales).
  - Add display/localization keys in `translations` and add a description key for `DFXPOINT_DESC:...` if you want the info-dialog markdown to appear.
  - Add an SVG icon named `<KEY>.svg` in `assets/svg/` and ensure `pointDefinition.key` matches the icon filename.

Files to inspect for change-context:
- `index.html` — page orchestration and inline runtime script.
- `js/data.js` — definitions, sections, translations (single source of truth for labels/units).
- `js/results-app.js` — decoding, rendering helpers, formatting, hashing and lookup.
- `js/point-info-dialog.js` — info dialog content builders and markdown resolution.

If anything above is unclear or you want more examples (e.g., adding a new point end-to-end), I can add a short example PR with the minimal changes and test URL. Please tell me which area you'd like expanded.
