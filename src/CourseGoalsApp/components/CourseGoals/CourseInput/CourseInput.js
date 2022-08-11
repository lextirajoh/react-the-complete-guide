import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

export default function CourseInput({ addGoalHandler }) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  function goalInputChangeHandler(event) {
    // reset na setIsValid(false) wanneer gebruiker weer begint te typen
    if (event.target.value.trim().length !== 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    // versturen met lege input zet isValid (false) en stopt de functie (return)
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    addGoalHandler(enteredValue);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}
