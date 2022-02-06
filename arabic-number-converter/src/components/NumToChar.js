import {useEffect, useState} from "react";

export default function NumToChar() {
    const [number, setNumber] = useState('0');

    let stringNum = convertToString(number);

    useEffect(() => {

    })

    return(
        <div>
            <input
                type="number"
                onInput={(e) => setNumber(e.target.value)}
                min={1}
                step={1}
            />
            <h2>{stringNum}</h2>
        </div>
    )
}

function convertToString(number) {
    let numString = "";
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tens = ["",["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundred = " hundred and "
    const collector = [ones, tens, ones];
    let numLength = (number.length);
    const numberAsString = number.toString();
    if (numLength >= 1) {
            for (let i = 0; i < numLength; i++) {
                let digit = parseInt(numberAsString[i]);
                let place = numLength-(i+1);
                if (digit !== 0) {
                    if (place === 1 && digit === 1) {
                        numString += collector[place][digit][numberAsString[numLength-1]];
                        break;
                    }
                    numString += collector[place][digit]
                    if (numLength-i === 2 && parseInt(numberAsString[numLength-1])!==0) {
                        numString+="-"
                    }
                    if (place===2) {
                        numString += hundred
                    }
                }
            // }
        }
    }
    return numString
}