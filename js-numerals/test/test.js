import { numberToWord } from "../converter.js";

// Tests without any testing libary
// Check Browser Console

let test;
let actual;
let expected;
let result;

// First Test
test = 0;
actual = numberToWord(test);
expected = "Zero";
result = actual === expected;
console.log(test, actual, expected, result);

// Second Test
test = 105;
actual = numberToWord(test);
expected = "One hundred and five";
result = actual === expected;
console.log(test, actual, expected, result);

// Third Test
test = 204576;
actual = numberToWord(test);
expected = "Two hundred and four thousand five hundred and seventy-six";
result = actual === expected;
console.log(test, actual, expected, result);

// Forth Test
test = 123456789;
actual = numberToWord(test);
expected =
  "One hundred and twenty-three million and four hundred and fifty-six thousand seven hundred and eighty-nine";
result = actual === expected;
console.log(test, actual, expected, result);
