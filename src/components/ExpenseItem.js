import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US",{month: "short"})
  const year = props.date.toLocaleString("en-US",{year: "numeric"})
  const day = props.date.toLocaleString("en-US",{year: "numeric"})

  return (
    <div>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div>
        <h2>{props.title}</h2>
        <div>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
