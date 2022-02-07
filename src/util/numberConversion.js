export default function convertToText(input){
    if(validateInput(input)){
        return createOutput(formatInput(input));
    }else{
        return "Type in a number!";
    }
}

function validateInput(input){
    return input !== ""
}

function formatInput(input){
    return parseInt(input);
}

function createOutput(input){
    const number = input.toString()
    const numberLen = number.length;
    const finalTwoDigit = numberLen > 2 ? getTwoDigits(number.slice(-2)) : "";
    switch (numberLen){
        case 1:
            return oneDigit();
        case 2:
            return twoDigit();
        case 3:
            return createString(threeDigit());
        case 4:
            return createString(fourDigit());
        case 5:
            return createString(fiveDigit());
        case 6:
            return createString(sixDigit());
        case 7:
            return createString(sevenDigit());
        default:
            return "Higher numbers are coming soon!";
    }
    function oneDigit(){ return parseInt(number) === 0 ? "zero" : zeroToNine[number] }
    function twoDigit(){ return getTwoDigits(number) }
    function threeDigit(){ return `${getHundred(number[0], finalTwoDigit, true)} ${finalTwoDigit}` }
    function fourDigit(){ return `${getThousand(number[0])} ${getHundred(number.slice(-3), finalTwoDigit, true)} ${finalTwoDigit}` }
    function fiveDigit(){ return `${getThousand(number.slice(0, 2))} ${getHundred(number.slice(-3), finalTwoDigit, true)} ${finalTwoDigit}` }
    function sixDigit(){ return `${getHundredThousand(number[0], number.slice(1, 3))} ${getHundred(number[3], finalTwoDigit, true)} ${finalTwoDigit}` }
    function sevenDigit(){ return `${zeroToNine[number[0]]} ${hundreds[2]} ${getHundredThousand(number[1], number.slice(2, 4))} ${getHundred(number[4], finalTwoDigit, true)} ${finalTwoDigit}` }
}

function getTwoDigits(twoDigits) {
    let result;
    if(parseInt(twoDigits) === 0){
        return ""
    } else if (parseInt(twoDigits) < 10) {
        result = zeroToNine[twoDigits[1]];
    } else if (parseInt(twoDigits) >= 20) {
        const secondNumber = zeroToNine[twoDigits[1]] === "" ? "" : "-" + zeroToNine[twoDigits[1]]
        result = tenMultiples[twoDigits[0]] + secondNumber
    } else {
        result = tenToTwenty[twoDigits];
    }
    return result;
}

function getHundred(hundred, nextNumber, lastHundred){
    let result = zeroToNine[hundred[0]] === "" ? "" : zeroToNine[hundred[0]];
    if(lastHundred){
        if(nextNumber !== "" && result === ""){
            result += "and";
        }else if(result === ""){
            return result;
        }else if(nextNumber === ""){
            return result + " " + hundreds[0];
        }else{
            result += " " + hundreds[0] + " and"
        }
    }
    return result;
}

function getThousand(thousand){
    let result = "";
    if(parseInt(thousand) < 10){
        result += zeroToNine[thousand];
    }else{
        result += getTwoDigits(thousand);
    }
    return result === "" ? result : result + " " + hundreds[1];
}

function getHundredThousand(hundred, thousand){
    let result = ""
    const thousandPart = getTwoDigits(thousand);
    const hundredPart = getHundred(hundred, thousandPart, false);
    if(thousandPart === "" && hundredPart === ""){
        return result;
    }else if(hundredPart === ""){
        return thousandPart + " " + hundreds[1];
    }else if(thousandPart !== ""){
        result += hundredPart + " " + hundreds[0] + " and " + thousandPart + " " + hundreds[1]
    }else{
        result += hundredPart + " " + hundreds[0] + " " + hundreds[1];
    }
    return result;
}

function createString(convertedNumber){
    const splitConvertedNumbers = convertedNumber.split(" ").filter(element => element !== "");
    let formattedString = "";
    for (let i = 0; i < splitConvertedNumbers.length; i++) {
        if(i === splitConvertedNumbers.length - 1){
            formattedString += splitConvertedNumbers[i];
        }else{
            formattedString += splitConvertedNumbers[i] + " ";
        }
    }
    return formattedString;
}

const zeroToNine = {
    "0": "",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
}

const tenToTwenty = {
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
}

const tenMultiples = {
    "2": "twenty",
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
    "6": "sixty",
    "7": "seventy",
    "8": "eighty",
    "9": "ninety",
}

const hundreds = ["hundred", "thousand", "million"]