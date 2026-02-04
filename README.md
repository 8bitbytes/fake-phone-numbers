# Fake Phone Numbers (Chrome Extension)

Generate fake US and Canada phone numbers using **NANP reserved ranges** (555-0100 through 555-0199) so test data never reaches real users. Safe for forms, signups, and test environments.

## Install (unpacked)

1. Open Chrome and go to `chrome://extensions/`.
2. Turn on **Developer mode** (top right).
3. Click **Load unpacked**.
4. Select the folder containing this extension (the folder with `manifest.json`).

The extension will appear in your toolbar and in the extensions menu.

## Using the extension

1. Click the extension icon in the toolbar.
2. Choose **United States** or **Canada**.
3. Click **Generate**.
4. Copy either the **E.164** format (e.g. `+12125550142`) or **National** format (e.g. `(212) 555-0142`) using the **Copy** buttons.

The last selected country is saved for next time.

## Number format

- **Reserved range**: NPA (area code) + exchange **555** + line **0100–0199** (per NANPA).
- **E.164**: `+1` followed by 10 digits (e.g. `+12125550142`).
- **National**: `(NPA) 555-XXXX` (e.g. `(212) 555-0142`).

These numbers are designated fictitious and non-working and are safe for testing.

