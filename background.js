// background.js
chrome.commands.onCommand.addListener((command) => {
  if (command === "create_bug_report") {
    chrome.browserAction.openPopup(); // Opens the popup for bug report creation
  }
});
