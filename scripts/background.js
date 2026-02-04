import { generateFakeNumber } from "./generator.js";

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.target !== "background") return;
  if (message.type === "generate") {
    const country = message.country || "US";
    sendResponse(generateFakeNumber(country));
    return true;
  }
  if (message.type === "getLastCountry") {
    chrome.storage.local.get("lastCountry").then(({ lastCountry }) => sendResponse(lastCountry || "US"));
    return true;
  }
});
