import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('');

  function handleShowYear(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          handleShowYear={handleShowYear}
        />
        <ExpensesChart filteredExpenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}
