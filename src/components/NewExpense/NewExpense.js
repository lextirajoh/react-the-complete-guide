import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { v4 as uuidv4 } from 'uuid';

function NewExpense({ addExpenseHandler }) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    addExpenseHandler(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseDataHandler={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
