import React, { useState } from "react";
import "./Form.css";
import convertToWords from "../utilities/convertToWords";
import validation from "../utilities/formValidation";

const Form = () => {
  const [errors, setErrors] = useState("");
  const [amountInWords, setamountInWords] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (validation(event.target.amount.value, setErrors)) {
      const result = convertToWords(event.target.amount.value);
      return setamountInWords(result);
    }
    setamountInWords("");
    return;
  };

  return (
    <div className="wrapper">
      <div className="content">
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            name="amount"
            className={`input ${errors && "is-error"}`}
          />
          {errors && <p className="error-text">{errors}</p>}
          <button>Convert To Words</button>
        </form>
        <hr />
        <p>{amountInWords}</p>
      </div>
    </div>
  );
};

export default Form;
