import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { v4 as uuidv4 } from 'uuid';

export default function NewExpense({ addExpenseHandler }) {
  // state voor tonen formulier na button klik
  const [isShowForm, setShowForm] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    addExpenseHandler(expenseData);
    setShowForm(false);
  }

  function handleShowForm() {
    setShowForm(true);
  }

  function handleCancelForm() {
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      {/* default state is false dus button wordt vertoond */}
      {!isShowForm && <button onClick={handleShowForm}>Add New Expense</button>}
      {/* button klik maakt state true en toont deze code */}
      {isShowForm && (
        <ExpenseForm saveExpenseDataHandler={saveExpenseDataHandler} handleCancelForm={handleCancelForm}/>
      )}
    </div>
  );
}
