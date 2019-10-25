import { useState } from "react";

// custom hook for textinput elements
export function useInput(name, defaultValue, validate, regex) {
  // set up the state for the input item and error
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(null);

  // updates the state onChange event
  function handleChange(e) {
    // set the state no matter what
    setValue(e.target.value);
    setError(null); // hide error on input
  }

  // when component loses focus run validation
  function handleBlur() {
    handleValidate();
  }

  // call validate if supplied and set error appropriately
  function handleValidate() {
    const valid = validate && validate(value, regex);
    // hide error on empty email
    if (valid === "empty") {
      setError(null);
    }
    setError(!valid);
    return valid;
  }

  return {
    props: {
      name,
      value,
      onChange: handleChange,
      onBlur: handleBlur,
      error
    },
    validate: handleValidate
  };
}
