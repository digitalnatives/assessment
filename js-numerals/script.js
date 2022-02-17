'use strict';

//~ Made by Robert Więckowski

let numbers =
  'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(
    ' ',
  );
let tens = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');

function numberToWords(n) {
  let cutThousand =
    ~~((n - ~~~~(n / 1000000) * 1000000) / 1000) == 0
      ? ''
      : numberToWords(~~((n - ~~~~(n / 1000000) * 1000000) / 1000)) + ' thousand';

  if (!n) return 'Enter a number in the input field';
//   try {
//     throw new Error('Enter a number in the input field');
// } 
// catch (e) {
//   console.log(e.message);
// }
  if (n < 20) return numbers[n];
  let digits = n % 10;
  if (n < 100) return tens[~~(n / 10) - 2] + (digits ? '-' + numbers[digits] : '');
  if (n < 1000)
    return (
      numbers[~~(n / 100)] +
      ' hundred' +
      (n % 100 == 0 ? '' : ' and ' + numberToWords(n % 100))
    );
  if (n >= 1000 && n < 10000 && n - (n % 100) === ~~(n / 1000) * 1000)
    return (
      numberToWords(~~(n / 1000)) +
      ' thousand' +
      (n % 1000 != 0 ? ' and ' + numberToWords(n % 1000) : '')
    );
  if (n >= 1000 && n < 1000000)
    return (
      numberToWords(~~(n / 1000)) +
      ' thousand' +
      (n % 1000 != 0 ? ' ' + numberToWords(n % 1000) : '')
    );
  if (n >= 1000000 && n < 1000000000)
    return (
      numberToWords(~~(~~(n / 1000) / 1000)) +
      ' million ' +
      cutThousand +
      (n % 1000 != 0 ? ' ' + numberToWords(n % 1000) : '')
    );
  if (n >= 1000000000 && n < 1000000000000)
    return (
      numberToWords(~~(~~(~~(n / 1000) / 1000) / 1000)) +
      ' billion ' +
      (n % 1000000 != 0
        ? numberToWords(~~(~~(n / 1000) / 1000) % 1000) + ' million '
        : '') +
      cutThousand +
      (n % 1000 != 0 ? ' ' + numberToWords(n % 1000) : '')
    );
  if (n >= 1000000000000)
    return 'This number is outside the range of the converter';
  return;
}

//* And using this scheme, it is quite easy to add further code and convert larger numbers

// Text Display

  function displayText() {
    let inputVal = input.value;
    let handle = numberToWords(inputVal);
  output.innerHTML = handle;
}
let output = document.getElementById('output');
let input = document.getElementById('input');
input.addEventListener('input', displayText);

// Characters Validation

let inputField = document.getElementById('input');

let invChars = ['-', '+', 'e'];

inputField.addEventListener('keydown', function (e) {
  if (invChars.includes(e.key)) {
    e.preventDefault();
  }
});

//* Note of Tasks and some console.logs

// console.log(numberToWords(7))
// console.log(numberToWords(42))
// console.log(numberToWords(1999))
// console.log(numberToWords(2001))
// console.log(numberToWords(17999))
// console.log(numberToWords(342251))
// console.log(numberToWords(1300420))
// console.log(numberToWords(81300420))
// console.log(numberToWords(55241300420))

/*
7       === seven
42      === forty-two
1999    === one thousand nine hundred and ninety-nine
2001    === two thousand and one
17999   === seventeen thousand nine hundred and ninety-nine
342251  === three hundred and forty-two thousand two hundred and fifty-one
1300420 === one million three hundred thousand four hundred and twenty
*/