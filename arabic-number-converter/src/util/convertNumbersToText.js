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


export default function convertToSentence(number) {
    let sentence = "";
    const numLength = number.length;
    const numberAsString = number.toString();
    let placeValue = 0;

    let skipNextDigit = false;

    if (numLength >= 1) {
        for (let i = 0; i < numLength; i++) {
            const digit = parseInt(numberAsString[i]);
            const reversedPlace = numLength - (i + 1);
            const nextDigit = parseInt(numberAsString[i + 1]);

            if (teenPlaces.includes(reversedPlace)) {
                if (digit === 1) {
                    placeValue = 1;
                    sentence += collection[placeValue][nextDigit];
                    skipNextDigit = true;
                } else {
                    placeValue = 2;
                    sentence += collection[placeValue][digit];
                    if (nextDigit !== 0 && digit !== 0) {
                        sentence += "-";
                    }
                }
            }

            if (digit !== 0 || milestonePlaces.includes(reversedPlace)) {
                if (onePlaces.includes(reversedPlace)) {
                    const digitAfterNext = parseInt(numberAsString[i + 2]);
                    const previousDigit = parseInt(numberAsString[i - 1]);
                    placeValue = 0;
                    if (!skipNextDigit) {
                        sentence += collection[placeValue][digit];
                    } else {
                        skipNextDigit = false;
                    }
                    switch (true) {
                        case hundredPlaces.includes(reversedPlace):
                            sentence += " hundred ";
                            if (nextDigit !== 0 || digitAfterNext !== 0) {
                                sentence += and;
                            }
                            break;
                        case milestonePlaces.includes(reversedPlace):
                            if (digit !==0 || previousDigit !== 0 || parseInt(numberAsString[i - 2]) !== 0) {
                                sentence += milestones[reversedPlace];
                            }
                            if (reversedPlace===3) {
                                if (nextDigit === 0 && (digitAfterNext !== 0 || parseInt(numberAsString[i + 3]) !== 0)) {
                                    sentence += and;
                                }
                            }
                            break;
                    }
                }
            }
        }
    }
    return sentence;
}
