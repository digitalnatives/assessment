import {useState} from "react";

export default function NumToChar() {
    const [number, setNumber] = useState(0);

    let numSentence = convertToSentence(number);

    return(
        <div>
            <input
                type="number"
                onInput={(e) => setNumber(e.target.value)}
                min={1}
                step={1}
            />
            <h2>{numSentence}</h2>
        </div>
    )
}

function convertToSentence(number) {
    let sentence = "";  //   [0[0-10], 1[0-10], 2[0-7]] indexes
    const collection = [ //[ [0-9], [10-19], 20-90] nums
        ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    ];
    const and = "and ";
    const milestones = [" hundred ", " thousand ", " million ", " billion "];
    const numLength = number.length;
    const numberAsString = number.toString();
    let placeValue = 0;

    const onePlaces = [0, 2, 3, 5, 7, 8, 9, 11];
    const teenPlaces = [1, 4, 6, 10];

    if (numLength >= 1) {
        for (let i = 0; i < numLength; i++) {
            const digit = parseInt(numberAsString[i]);
            const reversedPlace = numLength-(i+1);
            const nextDigit = parseInt(numberAsString[i+1]);

            if (digit !== 0) {

                if (teenPlaces.includes(reversedPlace)) {
                    if (digit === 1) {
                        placeValue = 1;
                        sentence += collection[placeValue][nextDigit];
                    } else {
                        placeValue = 2;
                        sentence += collection[placeValue][digit];
                    }
                    if (parseInt(numberAsString[i+1]) !== 0) {
                        sentence += "-";
                    }
                }

                if (onePlaces.includes(reversedPlace)) {
                    placeValue = 0;
                    sentence += collection[placeValue][digit];
                    switch (reversedPlace){
                        case 2:
                            sentence += milestones[0];
                            if (nextDigit !== 0 || parseInt(numberAsString[i+2]) !== 0) {
                                sentence += and;
                            }
                            break;
                        case 3:
                            sentence += milestones[1];
                            if (nextDigit === 0  && (parseInt(numberAsString[i+2]) !== 0 || parseInt(numberAsString[i+3]) !== 0)) {
                                sentence += and;
                            }
                            break;
                        case 5:
                            sentence += milestones[2];
                            break;
                        case 7:
                            sentence += milestones[3];
                    }
                }
            } else if (numLength === 1) {
                sentence = 0;
            }
        }
    }
    return sentence;
}