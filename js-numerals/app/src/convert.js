export function convert(inputNumber) {
  const data = {
    ones: {
      0: "",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
    },
    teens: {
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
    },
    tens: {
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty",
      6: "sixty",
      7: "seventy",
      8: "eighty",
      9: "ninety",
    },
  };

  let result;
  let num = parseInt(inputNumber);
  let numberString = num.toString();
  let numberLength = numberString.length;

  if (numberLength === 1) {
    result = data.ones[num];
  } else if (numberLength === 0) {
    result = "";
  } else if (numberLength === 2 && num < 20) {
    result = data.teens[num];
  } else if (numberLength === 2) {
    const a = numberString.slice(1, 2);
    result =
      data.tens[numberString.slice(0, 1)] +
      (a === "0" ? "" : "-" + data.ones[numberString.slice(1, 2)]);
  } else if (numberLength === 3) {
    let andHundred = numberString.slice(1, 3);
    result =
      convert(numberString.slice(0, 1)) +
      (andHundred === "00"
        ? " hundred "
        : " hundred and " + convert(numberString.slice(1, 3)));
  } else if (numberLength > 3 && numberLength < 6) {
    let andThousand = numberString.slice(-3, -1);
    result =
      convert(numberString.slice(0, -3)) +
      (andThousand === "00" ? " thousand and " : " thousand ") +
      convert(numberString.slice(-3));
  } else if (numberLength === 6) {
    let andHundred2 = numberString.slice(1, 3);
    result =
      convert(numberString.slice(0, 1)) +
      " hundred " +
      (andHundred2 === "00" ? "" : " and ") +
      convert(numberString.slice(1, 3)) +
      " thousand " +
      convert(numberString.slice(3, 6));
  } else if (numberLength < 10) {
    result =
      convert(numberString.slice(0, -6)) +
      " million " +
      convert(numberString.slice(-6));
  }
  num = "";

  return result.replace("  ", " ");
}
