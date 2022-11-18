import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <div className="flex justify-between items-center p-[0.5rem] bg-[#4b4b4b] rounded-xl expense-item">
      <ExpenseDate date={props.date} />
      <div className="flex flex-row gap-4 items-center justify-start expense-item__description">
        <h2 className="text-[1.25rem] text-white">{title}</h2>
        <div className="bg-[#40005d] text-[1.25rem] font-bold text-white border border-white rounded-[12px] py-[0.5rem] px-[1.5rem]">
          ${props.amount}
        </div>
      </div>
      <button
        className="border rounded-xl p-2 ml-2 text-white"
        onClick={clickHandler}
      >
        Change Title
      </button>
    </div>
  );
}
