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

const inputElement = document.querySelector(".input_element");
inputElement.addEventListener("input", converter);

export default function converter(e) {
  let inputNum = e.target.value.replace(/[^\d]/g, "");
  let result;

  const outputElement = document.querySelector(".output_element");

  if (inputNum === null) {
    result = "Kérlek adj meg egy számot";
    return;
  } else {
    result = conversionTool(inputNum);
  }

  outputElement.innerHTML = result;

  return result;
}

function conversionTool(inputNum) {
  let result;
  let num = parseInt(inputNum);
  let numberString = num.toString();

  //let numberLength = inputNum ? inputNum.replace(/^[0]+/, "").length : 0;
  let numberLength = numberString.length;

  if (numberLength === 1) {
    result = data.ones[num];
  } else if (numberLength === 0) {
    result = "";
  } else if (numberLength === 2 && num < 20) {
    console.log(3);
    result = data.teens[num];
  } else if (numberLength === 2) {
    result =
      data.tens[numberString.slice(0, 1)] +
      "-" +
      data.ones[numberString.slice(1, 2)];
  } else if (numberLength === 3) {
    let andHundred = numberString.slice(1, 3);
    result =
      conversionTool(numberString.slice(0, 1)) +
      (andHundred === "00"
        ? " hundred "
        : " hundred and " + conversionTool(numberString.slice(1, 3)));
  } else if (numberLength > 3 && numberLength < 6) {
    let andThousand = numberString.slice(-3);
    result =
      conversionTool(numberString.slice(0, -3)) +
      (andThousand === "000"
        ? " thousand "
        : " thousand and " + conversionTool(numberString.slice(-3)));
  } else if (numberLength === 6) {
    result =
      conversionTool(numberString.slice(0, 1)) +
      " hundred and " +
      conversionTool(numberString.slice(1, 3)) +
      " thousand " +
      conversionTool(numberString.slice(3, 6));
  } else if (numberLength < 10) {
    result =
      conversionTool(numberString.slice(0, -6)) +
      " million " +
      conversionTool(numberString.slice(-6));
  }
  num = "";

  return result;
}
