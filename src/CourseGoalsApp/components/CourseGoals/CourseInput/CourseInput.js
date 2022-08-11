import React, { useState } from 'react';
import styled from 'styled-components';
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
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

const FormControl = styled.div`
  margin: 0.5rem 0;

 & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : 'black')}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    background: ${props => (props.invalid ? 'red' : 'transparent')}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;