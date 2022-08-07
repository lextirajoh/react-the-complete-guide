import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

export default function ExpensesList({ filteredExpenses }) {

  // als filteredExpenses niets bevat dan return deze JSX-code
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
  <ul className="expenses-list">
    {filteredExpenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ))}

  </ul>
  )
}
