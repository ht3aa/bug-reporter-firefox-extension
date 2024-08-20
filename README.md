# Bug Reporter Extension

## Overview

The Bug Reporter extension allows you to quickly create and manage bug reports directly from your browser. You can use keyboard shortcuts to open the extension, and the extension will help you format and copy bug reports to the clipboard.

## Installation and Usage

### Chrome

#### Installation

1. **Open Chrome**: Launch your Chrome browser.

2. **Navigate to Extensions**:
   - Go to `chrome://extensions/` in your address bar.

3. **Enable Developer Mode**:
   - Toggle the `Developer mode` switch in the top-right corner of the Extensions page.

4. **Load Unpacked Extension**:
   - Click the `Load unpacked` button.
   - Select the directory containing your extension files (e.g., `background.js`, `popup.html`, `popup.js`, and `manifest.json`).

5. **Verify Installation**:
   - The extension should now appear in your list of extensions. You can see its icon next to the address bar.

#### Key Mapping

- **Open Bug Reporter Popup**: Press `Ctrl+Alt+B` to open the Bug Reporter popup.

#### Usage

1. **Open the Popup**:
   - Press `Ctrl+Alt+B` to open the popup form.

2. **Fill Out the Form**:
   - Enter the bug title, pre-requisites, steps, test data, expected result, actual result, and page path.

3. **Submit the Form**:
   - Click the "Submit" button to copy the formatted bug report to the clipboard.

### Firefox

#### Installation

1. **Open Firefox**: Launch your Firefox browser.

2. **Navigate to Add-ons**:
   - Go to `about:addons` in your address bar.

3. **Enable Debugging**:
   - Click the gear icon and select `Debug Add-ons`.

4. **Load Temporary Add-on**:
   - Click the `Load Temporary Add-on` button.
   - Select the directory containing your extension files (e.g., `manifest.json`, `background.js`, `popup.html`, `popup.js`).

5. **Verify Installation**:
   - The extension should now appear in your list of temporary add-ons.

#### Key Mapping

- **Open Bug Reporter Popup**: Press `Ctrl+Alt+B` to open the Bug Reporter popup.

#### Usage

1. **Open the Popup**:
   - Press `Ctrl+Alt+B` to open the popup form.

2. **Fill Out the Form**:
   - Enter the bug title, pre-requisites, steps, test data, expected result, actual result, and page path.

3. **Submit the Form**:
   - Click the "Submit" button to copy the formatted bug report to the clipboard.

## Notes

- **Persistence**: The form data is saved locally and will persist across different sessions and tabs. You can continue where you left off even after restarting the browser.

- **Clipboard Copying**: Ensure that clipboard access is allowed in your browser settings to successfully copy the report to the clipboard.

## Troubleshooting

- **No Data Copied**: Check your browser’s permissions and ensure clipboard access is granted.
- **Key Mapping Issues**: Ensure no other extensions or browser settings override the specified key combinations.

---

Feel free to modify or update the extension based on your requirements and preferences.
