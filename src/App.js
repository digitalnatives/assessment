import convertToArabic from "./util/numberConvertion";
import {useState} from "react";

function App() {
    const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div>
        <h2 id="output">{convertToArabic(inputValue)}</h2>
      </div>
      <div>
        <label htmlFor="input">Number:</label>
        <input type="number" min="0" id="input" value={inputValue} onChange={handleChange}/>
      </div>
    </div>
  );

  function handleChange(event) {
      setInputValue(event.target.value)
  }
}

export default App;
