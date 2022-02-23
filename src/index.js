const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let morseResult = "";
  let result = "";
  const codeLength = expr.length;

  for (let n = 0; n < codeLength; n += 10) {
    let newExpr = expr.slice(n, n + 10);
    morseResult = "";
    for (let i = 0; i < 10; i += 2) {
      if (newExpr[i] === "0" && newExpr[i + 1] === "0") {
        morseResult += "";
      } else if (newExpr[i] === "1" && newExpr[i + 1] === "0") {
        morseResult += ".";
      } else if (newExpr[i] === "1" && newExpr[i + 1] === "1") {
        morseResult += "-";
      } else if (newExpr[i] === "*") {
        morseResult += " ";
        i += 10;
      }
    }
    for (let m = 0; m < Object.keys(MORSE_TABLE).length; m++) {
      if (morseResult == Object.keys(MORSE_TABLE)[m]) {
        result += Object.values(MORSE_TABLE)[m];
        break;
      } else if(morseResult === " ") {
        result += morseResult;
        break;
      }
    }
  }
  return result;
}

module.exports = {
  decode,
};
