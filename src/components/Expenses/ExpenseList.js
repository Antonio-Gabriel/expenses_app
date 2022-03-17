import { ExpenseItem } from "./ExpenseItem";

import "./ExpenseList.css";

export function ExpenseList({ items }) {
  let expenseContent = (
    <p className="expenses-list__fallback">No expenses found.</p>
  );

  if (!!items.length) {
    expenseContent = items.map((expense) => (
      <li key={expense.id}>
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </li>
    ));
  }

  return <ul className="expenses-list">{expenseContent}</ul>;
}
