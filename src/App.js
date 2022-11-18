import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/ExpenseItem";
import "./index.css";

const App = () => {
  const items = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 20.09,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Kitchen Utencils",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    { id: "e4", title: "New Desk", amount: 450, date: new Date(2021, 5, 12) },
  ];

  return (
    <div>
      <NewExpense />
      <div className="expenses">
        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        />
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        />
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        />
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        />
      </div>
    </div>
  );
};

export default App;
