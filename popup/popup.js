import { generateFakeNumber } from "../scripts/generator.js";

const countrySelect = document.getElementById("country");
const generateBtn = document.getElementById("generate");
const resultsEl = document.getElementById("results");
const e164El = document.getElementById("e164");
const nationalEl = document.getElementById("national");

async function loadLastCountry() {
  const { lastCountry } = await chrome.storage.local.get("lastCountry");
  if (lastCountry) countrySelect.value = lastCountry;
}

function showResult({ e164, national }) {
  e164El.textContent = e164;
  nationalEl.textContent = national;
  resultsEl.classList.remove("hidden");
}

async function copyToClipboard(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    button.classList.add("copied");
    button.textContent = "Copied";
    setTimeout(() => {
      button.classList.remove("copied");
      button.textContent = "Copy";
    }, 1500);
  } catch (_) {
    button.textContent = "Failed";
    setTimeout(() => (button.textContent = "Copy"), 1500);
  }
}

async function saveLastCountry(country) {
  await chrome.storage.local.set({ lastCountry: country });
}

generateBtn.addEventListener("click", () => {
  const country = countrySelect.value;
  const result = generateFakeNumber(country);
  showResult(result);
  saveLastCountry(country);
});

document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", () => {
    const format = btn.getAttribute("data-format");
    const text = format === "e164" ? e164El.textContent : nationalEl.textContent;
    if (text) copyToClipboard(text, btn);
  });
});

loadLastCountry();
