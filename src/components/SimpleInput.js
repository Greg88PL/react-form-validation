import React from "react";
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const inputNameIsInvalid = !enteredNameIsValid && nameTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const inputEmailIsInvalid = !enteredEmailIsValid && emailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
    setEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName("");
    setNameTouched(false);
    setEnteredEmail("");
    setEmailTouched(false);
  };

  const inputNameBlurHandler = (event) => {
    setNameTouched(true);
  };

  const inputEmailBlurHandler = (event) => {
    setEmailTouched(true);
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
        {inputNameIsInvalid && (
          <p className="error-text">Name field cannot be empty</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="email">Your E-mail</label>
        <input
          onBlur={inputEmailBlurHandler}
          onChange={emailChangeHandler}
          type="email"
          id="email"
          value={enteredEmail}
        />
        {inputEmailIsInvalid && (
          <p className="error-text">E-mail field cannot be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
