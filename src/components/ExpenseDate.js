function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="bg-[#2a2a2a] text-white flex flex-col items-center justify-center w-[5.5rem] h-[5.5rem] border border-[#ececec] rounded-xl ">
      <div className="text-[0.75rem] font-bold">{month}</div>
      <div className="text-[0.75rem]">{year}</div>
      <div className="text-[1.5rem] font-bold">{day}</div>
    </div>
  );
}

export default ExpenseDate;
