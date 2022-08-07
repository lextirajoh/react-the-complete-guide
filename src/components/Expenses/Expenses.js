import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('');

  function handleShowYear(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // variabele voor de JSX code (conditional content)
  let expensesContent = <p>No expenses found.</p>;

  //  als filteredExpenses wel minimaal 1 item bevat dan return de JSX
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          handleShowYear={handleShowYear}
        />
        {expensesContent}
      </Card>
    </div>
  );
}
