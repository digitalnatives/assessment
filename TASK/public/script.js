// MODULE: DATABASE
const contactObj = {
  firstName: "Alejandro",
  lastName: "",
  contact: {
    mobile: "+36201234567",
    email: "first.last@mail.com",
  },
};

const dictionary = {
  HU: {},
  EN: {
    0: " ",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
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
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  },
  SP: {
    0: " ",
    1: "uno",
    2: "dos",
    3: "tres",
    4: "cuatro",
    5: "cinco",
    6: "seis",
    7: "siete",
    8: "ocho",
    9: "nueve",
    10: "diez",
    11: "once",
    12: "doce",
    13: "trece",
    14: "catorce",
    15: "quince",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "veinte",
    30: "treinta",
    40: "fourty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  },
};

// The digits in large numbers are in groups of three places.
// The groups are called periods.
const groups = ["", "", "thousand", "million", "billion", "trillion"];

// Each period repeats the same three (3) place-value names: hundreds, tens, ones
const PERIOD = 3;
// place-value names
const orders = [
  { order: 0, suffix: "", connector: "", desc: "ones" },
  { order: 1, suffix: "", connector: "-", desc: "tens" },
  { order: 2, suffix: " hundred", connector: " and ", desc: "hundreds" },
];

// numerals - words
const ones = dictionary.EN;

// MODULE: SCRIPT

// To be improved
const otherStyle = (number) => {
  const thousands = getPlaceValues(Math.floor(number / 100));
  const ones = number % 100 != 0 ? `and ${getPlaceValues(number % 100)}` : ``;

  return `${thousands} ${orders[2].suffix} ${ones}`;
};

const getPlaceValues = (num) => {
  let hit = true;
  let spelling = "";
  let connector = "";

  do {
    let exponent = parseInt(Math.log10(num));

    hit = ones.hasOwnProperty(num);
    let key = hit ? num : parseInt(num / Math.pow(10, exponent));

    // [key * Math.pow(10, exponent)] - "extended" key takes priority
    let spelled = ones[key * Math.pow(10, exponent)] ?? ones[key];
    spelling += `${connector}${spelled}${orders[exponent].suffix}`;

    // connector - "", "-", "thousand"
    connector = orders[exponent].connector;
    num = num % Math.pow(10, exponent);
  } while (!hit && num != 0);

  //debug;
  return spelling;
};

const getGroups = (num) => {
  const wrk_arr = num.split("").map((digit) => parseInt(digit));
  const len =
    parseInt(wrk_arr.length / PERIOD) +
    parseInt(+Boolean(wrk_arr.length % PERIOD || false));
  const groups = [];
  let end = undefined; // The undefined property indicates that a variable has not been assigned a value, or not declared at all
  for (let i = 1; i <= len; i++) {
    const start = -(PERIOD * i);
    groups.unshift(wrk_arr.slice(start, end).join(""));
    end = start;
  }

  return groups;
};

const process = (num) => {
  const periods = getGroups(num.toString());

  let spelled = "";
  let formatted = "";
  let separator = " ";
  periods.forEach((period, index, thisObj) => {
    spelled =
      period != 0
        ? spelled +
          `${getPlaceValues(+period).trim()}  ${
            groups[thisObj.length - index]
          }${separator}`
        : spelled;

    formatted = period != 0 ? formatted + `${period}${separator}` : formatted;
  });
  console.log(`${formatted} -> ${spelled}`);

  return {
    formatted,
    spelled,
  };
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    console.log(event.target.getAttribute("type"));
  });
  document.addEventListener("keydown", (event) => {
    console.log(event.target.getAttribute("id"));
    if (event.target.getAttribute("id") === "input" && event.key === "Enter") {
      const number = event.target.value;

      const spelledObj = process(number);

      document.getElementById("otherWay").style.display = 'none';

      document.getElementById("spelled").textContent = spelledObj.spelled;
      document.getElementById("formatted").value = spelledObj.formatted;

      // Call US/UK styles - to be improved
      let ukUsa = '';
      if (number.length === 4) {
        if (number % 100 != 0) ukUsa = `USA style --> ${otherStyle(number)}`;
        if (number % 100 == 0 && number > 1000 && number <= 2000)
        ukUsa = `UK style--> ${otherStyle(number)}`;

        document.getElementById("otherWay").style.display = 'block';
        document.getElementById("otherWay").textContent = ukUsa;
      }
    }
  });

  // DIV - Contact information
  document.getElementById("contact").innerHTML = `                
  <div>${contactObj.firstName} </div> 
  <div>&#9742; ${contactObj.contact.mobile} </div> 
  <div>&#10148; ${contactObj.contact.email}</div>                
`;
});

module.exports = process;
