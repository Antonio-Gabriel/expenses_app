import { useState } from "react";

import "./ExpenseForm.css";

export function ExpenseForm({ onSaveExpenseDate }) {
  const [data, setData] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  function handleChangeInputEvent(event) {
    setData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    const expenseData = {
      ...data,
      date: new Date(data.date),
    };

    onSaveExpenseDate(expenseData);

    setData({
      title: "",
      amount: 0,
      date: "",
    });
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChangeInputEvent}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={data.amount}
            onChange={handleChangeInputEvent}
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={data.date}
            onChange={handleChangeInputEvent}
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
