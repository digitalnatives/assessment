export default function convertToArabic(number){
    return createOutput(number);
}

function createOutput(number){
    const numberLen = number.length;
    let output = "";
    switch (numberLen){
        case 1:
            return zeroToNine[number];
        case 2:
            return twoDigits(number, false);
        case 3:
            const lastTwoDigits = twoDigits(number.slice(-2), true);
            return `${zeroToNine[number[0]]} ${hundreds[0]} ${lastTwoDigits}`;
        case 4:
            const hundred = zeroToNine[number[1]] === "" ? "" : zeroToNine[number[1]] + " " + hundreds[0];
            return `${zeroToNine[number[0]]} ${hundreds[1]} ${hundred} ${twoDigits(number.slice(-2), true)}`;
    }
}

function twoDigits(twoDigits, numberLenGreaterThanTwo) {
    let result;
    if(parseInt(twoDigits) === 0){
        return ""
    } else if (parseInt(twoDigits) < 10) {
        result = zeroToNine[twoDigits[1]];
    } else if (parseInt(twoDigits) >= 20) {
        result = tensMultiple[twoDigits[0]] + " " + zeroToNine[twoDigits[1]]
    } else {
        result = tenToTwenty[twoDigits];
    }
    return numberLenGreaterThanTwo ? "and " + result : result;
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

const tensMultiple = {
    "2": "twenty",
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
    "6": "sixty",
    "7": "seventy",
    "8": "eighty",
    "9": "ninety",
}

const hundreds = ["hundred", "thousand"]