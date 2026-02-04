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

## Sharing with others

### Option A: Chrome Web Store (one-click install for anyone)

1. Create a [Chrome Web Store developer account](https://chrome.google.com/webstore/devconsole) (one-time $5 registration).
2. Zip the extension: include only the extension files (e.g. `manifest.json`, `popup/`, `scripts/`), not `.git` or other project cruft. From the project folder:  
   `zip -r fake-phone-numbers.zip manifest.json popup scripts -x "*.DS_Store"`
3. In the [developer dashboard](https://chrome.google.com/webstore/devconsole), click **New item** and upload the zip.
4. Fill in the store listing: short description, detailed description, category (e.g. Developer Tools), and at least one screenshot (e.g. of the popup).
5. Submit for review. After approval (often 1–3 days), the extension gets a public link you can share. Anyone can install it with one click.

### Option B: Share the files (no store, no fee)

1. Zip the extension folder (or push to GitHub and share the repo).
2. Send the zip or repo link to others.
3. They unzip (or clone), open `chrome://extensions/`, turn on **Developer mode**, click **Load unpacked**, and select the folder. No review and no account needed; they just need these steps.
# fake-phone-numbers
