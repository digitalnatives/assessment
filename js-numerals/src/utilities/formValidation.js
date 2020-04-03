const formValidation = (value, setErrors) => {
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

export default formValidation;
