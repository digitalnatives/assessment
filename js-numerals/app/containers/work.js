function calculate(value){
//** COMMENTS :

//** number-number key arrays. They are on the same position, this is how the matching system finds the pairs.

let ott = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','hundred','thousand','million']
let ottNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90,100,1000,1000000]

//** two variables and conditions to decide few basic things. What happens if the value is 0 (returns "zero").
//** if it minus it sets a flag for let minus and add "minus" string at the end.

let minus = 0
if (value === 0){return 'zero'}
if (value < 0) {minus++}

//** arrNum core function gets the value, and turn it into an array of numbers. Before we call this function, we already took care of that the "value" is clean.
//** with clean it means that its a number data type, without integers and without having a 0 at the beginning. It can be minus number though. The current limitation is 9 digit
//** but its very easy to expand it in case of need.

let arrNum = value.toString().split("").reverse().map(function(e){return parseInt(e)})

//** the main idea is to slice the array into 3 digit parts. Than with a function match the 3 digits, and call this function 3 times (or if we build more chunks and expand, than more times)

let lastPart = arrNum.splice(0,3).reverse();
let middlePart = arrNum.splice(0,3).reverse();
let begPart = arrNum.splice(0,3).reverse();

//** we need the READY arrays to map here, the matches who got "translated" into strings.

let lastPartReady = [];
let middlePartReady = [];
let begPartReady = [];

//** the parts are for building a final string with the result.

let part1 = "";
let part2 = "";
let part3 = "";

function getPart(x,y,scale){

//** We work from right to the left. First we check if we need to write numbers 1-9 or 11-19. Since they called different than from 21-99.

let lastLength = x.length
if (lastLength !== 0){
if (x[lastLength-2] === 1 && x[lastLength-2] !== 0){
  x[lastLength-1] = x[lastLength-1] + 10;
  x.splice(lastLength-2,1)
} else {
  x[lastLength-2] = x[lastLength-2]*10
}

//** once we are ready with the transformations, we add the hundreds. Hundred is just a number, and later the algorythm will find its pair.

if (lastLength === 3){
if (x[1] != 0){
  x.splice(1,0,100)}
}

//** Here is the matching process with .map()

y = x.map(function(e){
  for (var i = 0; i < ottNum.length; i++){
    if (e === ottNum[i]){return ott[i]}
  }})
//** we must take out the not-needed zeros.

y.forEach(function(item, i) { if (item == "zero") y[i] = ""; });

//** and also dont forget about adding the correct units (thousands or millions or billions if we decide to expend the script

y.push(scale)
return y}}

//** here we put the things together. The function is only called, when it makes sense.

if (begPart.length != 0){part1 = getPart(begPart,begPartReady,"million").join(" ")}
if (middlePart.length != 0){part2 = getPart(middlePart,middlePartReady,"thousand").join(" ")}
part3 = getPart(lastPart,lastPartReady," ").join(" ")

//** putting the string together and getting rid of the undefineds.

var ress = part1 + " " + part2 + " " + part3
var finalResult = ress.replace(/undefined/g," ")

//** dont forget to add the minus

if (minus != 0){finalResult = "minus" + finalResult}

//** unfortunatelly some hundreds and thousands span into not proper places to, we go and take down the combinations below

let frs = ress.replace(/undefined/g,"")
let frs2 = frs.replace("thousand  hundred","thousand")
let frs3 = frs2.replace("million  hundred","million")
let finalResult = frs3.replace("million   thousand","million")
return finalResult
}
