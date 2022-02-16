'use strict';

//~ Made by Robert Więckowski

//* SOLUTION

let num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
let tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function n2w(n){
    let ct = (~~((n-(~~(~~(n/1000000))*1000000))/1000)) == 0 ? '': n2w(~~((n-(~~(~~(n/1000000))*1000000))/1000)) + " thousand";
  
    if (!n) return "Enter a number in the input field"
    if (n < 20) return num[n];
    let dig = n%10;
    if (n < 100) return tens[~~(n/10)-2] + (dig? "-" + num[dig]: "");
    if (n < 1000) return num[~~(n/100)] +" hundred" + (n%100 == 0? "": " and " + n2w(n%100));
    if (n >= 1000 && n < 10000 && (n - n%100) === ~~(n/1000)*1000) return n2w(~~(n/1000)) + " thousand" + (n%1000 != 0? " and " + n2w(n%1000): "");
    if (n >= 1000 && n < 1000000) return n2w(~~(n/1000)) + " thousand" + (n%1000 != 0? " " + n2w(n%1000): "");
    if (n >= 1000000 && n < 1000000000) return n2w(~~(~~(n/1000)/1000)) + ' million ' + ct  + (n%1000 != 0? " " + n2w(n%1000): "");
    if (n >= 1000000000 && n <= 999999999999) return n2w(~~(~~(~~(n/1000)/1000)/1000)) + ' billion ' + ((n%1000000 != 0) ? n2w((~~(~~(n/1000)/1000))%1000)  + ' million ' : "") + ct  + (n%1000 != 0? " " + n2w(n%1000): "");
    if (n > 999999999999) return "This number is outside the range of the converter"
    return     
    }

//* And using this scheme, it is quite easy to add further code and convert larger numbers 

//? Text Display

function displayText() {
    let inputVal = input.value;
    let handle = n2w(inputVal);
    output.innerHTML = handle;
}
let button = document.getElementById('changeText');
let output = document.getElementById('output');
let input = document.getElementById('input');
input.addEventListener('input', displayText);

//? Characters Validation 

let inputField = document.getElementById("input");

let invChars = [
  "-",
  "+",
  "e",
];

inputField.addEventListener("keydown", function(e) {
  if (invChars.includes(e.key)) {
    e.preventDefault();
  }
});

//? Note of Tasks and some console.logs

// console.log(n2w(7))
// console.log(n2w(42))
// console.log(n2w(1999))
// console.log(n2w(2001))
// console.log(n2w(17999))
// console.log(n2w(342251))
// console.log(n2w(1300420))
// console.log(n2w(81300420))
// console.log(n2w(55241300420))

/*
7       === seven
42      === forty-two
1999    === one thousand nine hundred and ninety-nine
2001    === two thousand and one
17999   === seventeen thousand nine hundred and ninety-nine
342251  === three hundred and forty-two thousand two hundred and fifty-one
1300420 === one million three hundred thousand four hundred and twenty
*/

