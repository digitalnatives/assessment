// DATABASE
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

  const orders = [
    { order: 0, suffix: "", connector: "", desc: "ones" },
    { order: 1, suffix: "", connector: "-", desc: "tens" },
    { order: 2, suffix: " hundred", connector: " and ", desc: "hundreds" },
  ];
  
  // numerals - words
  const ones = dictionary.EN;

// SCRIPT
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 10; i++) {
      const lowerBound = 1;
      const upperBound = 999;
      let num = Math.floor(Math.random() * (upperBound - lowerBound)) + lowerBound;
  
      let exponent = parseInt(Math.log10(num));
  
      let hit = true;
      let spelling = "";
      let connector = "";
  
      console.log(`${num}`);
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
  
      console.log(`${spelling}`);
    }
});
