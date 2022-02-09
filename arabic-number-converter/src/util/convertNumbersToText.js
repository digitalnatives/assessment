const collection = [ //  [[0-9],   [10-19],  20-90] nums
    ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
];
export default function convertToSentence(number) {
    let sentence = "";  //   [0[0-10], 1[0-10], 2[0-7]] indexes
    const and = "and ";
    const milestones = [" hundred ", " thousand ", " million ", " billion "];
    const numLength = number.length;
    const numberAsString = number.toString();
    let placeValue = 0;
    let skipNextDigit = false;

    const onePlaces = [0, 2, 3, 5, 6, 8, 9, 11];
    const teenPlaces = [1, 4, 7, 10];

    if (numLength >= 1) {
        for (let i = 0; i < numLength; i++) {
            const digit = parseInt(numberAsString[i]);
            const reversedPlace = numLength - (i + 1);
            const nextDigit = parseInt(numberAsString[i + 1]);
            const previousDigit = parseInt(numberAsString[i - 1]);

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

                if (digit !== 0 || reversedPlace === 3 || reversedPlace === 6 || reversedPlace === 5 || reversedPlace === 9) {
                    if (onePlaces.includes(reversedPlace)) {
                        const digitAfterNext = parseInt(numberAsString[i + 2])
                        placeValue = 0;
                        if (!skipNextDigit) {
                            sentence += collection[placeValue][digit];
                        } else {
                            skipNextDigit = false;
                        }
                        switch (reversedPlace) {
                            case 2:
                                sentence += " hundred ";
                                if (nextDigit !== 0 || digitAfterNext !== 0) {
                                    sentence += and;
                                }
                                break;
                            case 3:
                                if (digit!==0 || previousDigit !== 0)
                                sentence += " thousand ";
                                if (nextDigit === 0 && (digitAfterNext !== 0 || parseInt(numberAsString[i + 3]) !== 0)) {
                                    sentence += and;
                                }
                                break;
                            case 5:
                                if (digit !== 0) {
                                    sentence += " hundred " ;
                                    if (nextDigit === 0 && digitAfterNext === 0) {
                                        sentence += "thousand "
                                    }
                                    if (nextDigit !== 0 || digitAfterNext !== 0) {
                                        sentence += "and "
                                    }
                                }
                                break;
                            case 6:
                                sentence += " million "
                                break;
                            case 8:
                                sentence += " hundred ";
                                if (nextDigit !==0 || digitAfterNext !== 0) {
                                    sentence += and;
                                }
                                break;
                            case 9:
                                sentence += " billion "
                                break;
                            case 11:
                                sentence += " hundred "
                                if (nextDigit !==0 || digitAfterNext !== 0) {
                                    sentence += and;
                                }
                                break;
                        }

                    }
                }
        }
    }
    return sentence;
}