                    //   [0[0-9], 1[0-9], 2[0-9]] indexes
const collection = [ //  [[0-9],   [10-19],  20-90] nums
    ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
];
const and = "and ";
const milestones = {3: " thousand ", 6: " million ", 9: " billion "};

const onePlaces = [0, 2, 3, 5, 6, 8, 9, 11];
const teenPlaces = [1, 4, 7, 10];
const hundredPlaces = [2, 5, 8, 11];
const milestonePlaces = [3, 6, 9];
let placeValue = 0;
let sentence;
let skipNextDigit;


export default function convertToSentence(number) {
    sentence = "";
    skipNextDigit = false;

    const numLength = number.length;
    const numberAsString = number.toString();

    if (numLength >= 1) {
        if (number === "0") {
            return "zero"
        } else if (numLength > 12) {
            return "Sorry this number is too long even for me! :("
        } else if (numLength > 1 && number[0] === "0") {
            return "Sorry this is not a valid number! :("
        }
        for (let i = 0; i < numLength; i++) {
            const digit = parseInt(numberAsString[i]);
            const reversedPlace = numLength - (i + 1);
            const nextDigit = parseInt(numberAsString[i + 1]);

            if (onePlaces.includes(reversedPlace) && (digit !== 0 || milestonePlaces.includes(reversedPlace))) {
                dealWithOnes(digit, nextDigit, numberAsString, reversedPlace, i);
            }

            if (teenPlaces.includes(reversedPlace)) {
                dealWithTeens(digit, nextDigit);
            }
        }
    }
    return sentence;
}

function dealWithOnes(digit, nextDigit, numberAsString, reversedPlace, i) {
    const digitAfterNext = parseInt(numberAsString[i + 2]);

    placeValue = 0;

    addDigitIfNecessary(digit);

    switch (true) {
        case hundredPlaces.includes(reversedPlace):
            addHundredPlusAndWord(nextDigit, digitAfterNext);
            break;
        case milestonePlaces.includes(reversedPlace):
            addMilestonesPlusAndWord(digit, nextDigit, digitAfterNext, numberAsString, reversedPlace, i);
            break;
    }
}

function addDigitIfNecessary(digit) {
    if (!skipNextDigit) {
        sentence += collection[placeValue][digit];
    } else {
        skipNextDigit = false;
    }
}

function addHundredPlusAndWord(nextDigit, digitAfterNext) {
    sentence += " hundred ";
    if (nextDigit !== 0 || digitAfterNext !== 0) {
        sentence += and;
    }
}

function addMilestonesPlusAndWord(digit, nextDigit, digitAfterNext, numberAsString, reversedPlace, i) {
    if (digit !==0 || parseInt(numberAsString[i - 1]) !== 0 || parseInt(numberAsString[i - 2]) !== 0) {
        sentence += milestones[reversedPlace];
    }
    if (reversedPlace===3) {
        if (nextDigit === 0 && (digitAfterNext !== 0 || parseInt(numberAsString[i + 3]) !== 0)) {
            sentence += and;
        }
    }
}

function dealWithTeens(digit, nextDigit) {
    if (digit === 1) {
        addTeensThatStartsWith1ToSentence(nextDigit);
    } else {
        addTeensToSentence(digit, nextDigit);
    }
}

function addTeensThatStartsWith1ToSentence(nextDigit) {
    placeValue = 1;
    sentence += collection[placeValue][nextDigit];
    skipNextDigit = true;
}

function addTeensToSentence(digit, nextDigit) {
    placeValue = 2;
    sentence += collection[placeValue][digit];
    if (nextDigit !== 0 && digit !== 0) {
        sentence += "-";
    }
}