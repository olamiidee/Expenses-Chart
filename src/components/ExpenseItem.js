import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  return (
    <div className="flex justify-between items-center p-[0.5rem] bg-[#4b4b4b] expense-item">
      <ExpenseDate  date={props.date}/>
      <div className="flex flex-col gap-4 items-end justify-start expense-item__description">
        <h2 className="text-[1rem] text-white">{props.title}</h2>
        <div className="bg-[#40005d] text-[1rem] font-bold text-white border border-white rounded-[12px] p-[0.5rem]">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
