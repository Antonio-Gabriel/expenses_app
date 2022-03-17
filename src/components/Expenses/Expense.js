import { useState } from "react";

import { ExpenseList } from "./ExpenseList";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpensesChart } from "./ExpensesChart";

import "./Expense.css";

export function Expense({ items }) {
  const [filteredYear, setFilteredYear] = useState("2022");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </div>
  );
}
