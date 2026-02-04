/**
 * Generates fake NANP phone numbers using reserved range 555-0100 to 555-0199.
 * Safe for testing; these numbers are not assigned to real subscribers.
 */

const US_AREA_CODES = [
  "201", "202", "212", "213", "214", "310", "312", "323", "404", "415",
  "469", "503", "516", "602", "617", "702", "713", "718", "720", "732",
  "786", "818", "832", "858", "862", "908", "909", "914", "917", "929"
];

const CA_AREA_CODES = [
  "204", "226", "236", "249", "250", "289", "306", "343", "365", "403",
  "416", "418", "431", "437", "438", "450", "506", "514", "519", "548",
  "579", "581", "587", "604", "613", "639", "647", "672", "705", "709",
  "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"
];

const EXCHANGE = "555";
const LINE_MIN = 100; // 0100
const LINE_MAX = 199; // 0199

/**
 * @param {'US'|'CA'} country
 * @returns {{ e164: string, national: string }}
 */
export function generateFakeNumber(country) {
  const areaCodes = country === "CA" ? CA_AREA_CODES : US_AREA_CODES;
  const npa = areaCodes[Math.floor(Math.random() * areaCodes.length)];
  const line = LINE_MIN + Math.floor(Math.random() * (LINE_MAX - LINE_MIN + 1));
  const lineStr = String(line).padStart(4, "0");
  const digits = `1${npa}${EXCHANGE}${lineStr}`;
  const e164 = `+${digits}`;
  const national = `(${npa}) ${EXCHANGE}-${lineStr}`;
  return { e164, national };
}
