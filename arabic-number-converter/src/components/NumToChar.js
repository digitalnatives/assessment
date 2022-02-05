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
    const collector = [ones, tens];
    let numLength = (number.length);
    if (numLength >= 1) {
        if (number>9 && number<20) {
            let digit = number.toString()[0]
            numString = collector[numLength-1][digit][number.toString()[number.toString().length-1]]
        }
        else {
            for (let i = 0; i < numLength; i++) {
                let digit = parseInt(number.toString()[i]);
                if (digit !== 0) {
                    numString += collector[numLength-(i+1)][digit]
                }
            }
        }
    }
    return numString
}