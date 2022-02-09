import {useState} from "react";
import convertToSentence from "../util/convertNumbersToText";

export default function NumToChar() {
    const [number, setNumber] = useState(0);

    let numberAsText = convertToSentence(number);

    return(
        <div>
            <input
                type="number"
                onInput={(e) => setNumber(e.target.value)}
                min={1}
                step={1}
            />
            <h2>{numberAsText}</h2>
        </div>
    )
}