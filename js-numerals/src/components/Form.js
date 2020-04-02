import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [errors, setErrors] = useState("");

  const validate = value => {
    let error = "";
    if (!value) {
      error = "Amount is required!";
      setErrors(error);
      return false;
    } else if (!/^[0-9,]*$/.test(value)) {
      error = "Invalid entry, please enter a digit or a digit with commas";
      setErrors(error);
      return false;
    } else {
      setErrors(error);
      return true;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    validate(event.target.amount.value);
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
        <p></p>
      </div>
    </div>
  );
};

export default Form;
