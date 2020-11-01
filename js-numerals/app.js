import { numberToWord } from "./converter.js";

const input = document.querySelector("input");
const button = document.querySelector(".btn");
const div = document.querySelector("form");
let h2Created = false;

loadEventListeners();

function loadEventListeners() {
  button.addEventListener("click", convertNumber);
}

function convertNumber(e) {
  e.preventDefault();

  let covnvertedNumber =
    input.value == "" ? "Enter a number first" : numberToWord(input.value);

  if (h2Created) {
    return (document.querySelector("h2").innerText = covnvertedNumber);
  }

  // Create element
  const h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode(covnvertedNumber));
  div.appendChild(h2);
  h2Created = true;
}
