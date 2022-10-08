import React from "react";
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const inputNameisInvalid = !enteredNameIsValid && nameTouched;

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setNameTouched("");
  };

  const inputNameBlurHandler = (event) => {
    setNameTouched(true);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={inputNameBlurHandler}
          onChange={nameChangeHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {inputNameisInvalid && (
          <p className="error-text">Input field cannot be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
