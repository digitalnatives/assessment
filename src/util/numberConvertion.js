export default function convertToArabic(number){
    return createOutput(number);
}

function createOutput(number){
    const numberLen = number.length;

    switch (numberLen){
        case 1:
            return zeroToNine[number];
        case 2:
            return twoDigits(number, false);
        case 3:
            const lastTwoDigits = twoDigits(number.slice(-2), true);
            return `${zeroToNine[number[0]]} ${hundreds[0]} ${lastTwoDigits}`;
        case 4:
            return `${zeroToNine[number[0]]} ${hundreds[1]} ${getHundred(number.slice(-3))} ${twoDigits(number.slice(-2), true)}`;
        case 5:
            return `${twoDigits(number.slice(0, 2), false)} ${hundreds[1]} ${getHundred(number.slice(-3))} ${twoDigits(number.slice(-2), true)}`
        case 6:
            return `${zeroToNine[number[0]]} ${hundreds[0]} ${twoDigits(number.slice(1, 3), true)} ${hundreds[1]} ${getHundred(number.slice(-3))} ${twoDigits(number.slice(-2), true)}`
        case 7:
            return `${zeroToNine[number[0]]} ${hundreds[2]} ${zeroToNine[number[1]]} ${hundreds[0]} ${twoDigits(number.slice(2, 4), true)} ${hundreds[1]} ${getHundred(number.slice(-3))} ${twoDigits(number.slice(-2), true)}`
        default:
            return "Type in a number!"
    }
}

function twoDigits(twoDigits, needAnd) {
    let result;
    if(parseInt(twoDigits) === 0){
        return ""
    } else if (parseInt(twoDigits) < 10) {
        result = zeroToNine[twoDigits[1]];
    } else if (parseInt(twoDigits) >= 20) {
        const secondNumber = zeroToNine[twoDigits[1]] === "" ? "" : "-" + zeroToNine[twoDigits[1]]
        result = tensMultiple[twoDigits[0]] + secondNumber
    } else {
        result = tenToTwenty[twoDigits];
    }
    return needAnd ? "and " + result : result;
}

function getHundred(hundred){
    return zeroToNine[hundred[0]] === "" ? "" : zeroToNine[hundred[0]] + " " + hundreds[0]
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

const hundreds = ["hundred", "thousand", "million"]