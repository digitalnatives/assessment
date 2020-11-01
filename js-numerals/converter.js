const zeroTo19 = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "forteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const twentyTo90 = [
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const rest = [
  "",
  "thousand",
  "million",
  "billion",
  "trillion",
  "quadrillion",
  "quintillion",
];

// Spits out an array of digits grouped in three
function chunkNumbers(enteredNumber) {
  enteredNumber = enteredNumber + "";
  let numberv2 =
    enteredNumber.length % 3 === 0
      ? enteredNumber
      : enteredNumber.length % 3 === 2
      ? "0" + enteredNumber
      : "00" + enteredNumber;

  return numberv2.match(/.{1,3}/g);
}

export function numberToWord(enteredNumber) {
  let chunk = chunkNumbers(enteredNumber);
  let word = "";
  let chunkLength = chunk.length;
  let isZero = false;
  for (let x in chunk) {
    let nonZeroDigit = false;
    let starstWithOne = false;
    let chunkPart = parseInt(chunk[x]);

    // Checks if the whole number is zero
    if (chunkPart === 0) {
      isZero = true;
      continue;
    }

    for (let i = 0; i < 3; i++) {
      let numb = parseInt(chunk[x][i]);

      // Checks if the part of the chunk has a zero
      if (numb == 0 && !starstWithOne) {
        continue;
      }

      // Checks the hundredths place
      if (i == 0) {
        word += zeroTo19[numb];
        word += chunkPart % 100 === 0 ? " hundred" : " hundred and ";
        continue;
      }

      // Checks the tenths place
      if (i == 1) {
        if (numb == 1) {
          starstWithOne = true;
          continue;
        }
        word += twentyTo90[numb - 1];
        nonZeroDigit = true;
        continue;
      }

      // Checks the ones place
      if (i == 2 && starstWithOne) {
        starstWithOne = false;
        word += zeroTo19[numb + 10];
        continue;
      } else {
        word += nonZeroDigit ? "-" + zeroTo19[numb] : zeroTo19[numb];
        continue;
      }
    }

    // Rest Joiner
    if (chunkLength > 1 && !isZero) {
      chunkLength--;
      if (chunkLength >= 2) {
        word += " " + rest[chunkLength] + " and ";
        continue;
      }
      word += " " + rest[chunkLength] + " ";
    }
  }

  // "One million and " remover
  word = word.replace(/ and $/gm, "");

  // Word or Zero
  word = enteredNumber == 0 ? zeroTo19[0] : word;

  //Capitalize
  word = word.charAt(0).toUpperCase() + word.slice(1);

  return word;
}
