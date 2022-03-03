import "./App.css";
import { convert } from "./convert";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function onChange(e) {
    const pattern = /\D/g;
    let result = "";

    setInput(e.target.value);
    if (e.target.value === "") {
      result = "";
    } else if (e.target.value.match(pattern)) {
      result = "Please give only numbers";
    } else if (e.target.value.length > 9) {
      result = "Too big number";
    } else {
      result = convert(e.target.value.replace(/^\D+$/g, ""));
    }

    setResult(result);

    return result;
  }

  return (
    <>
      <div className="container">
        <h1>Arabic number conversion tool</h1>
        <div className="input_element">
          <input
            type="text"
            value={input}
            onChange={onChange}
            className="input_number"
            name="number"
            placeholder="Type a number"
            autoComplete="off"
          />
          <div className="output_element">{result}</div>
        </div>
      </div>
    </>
  );
}

export default App;
