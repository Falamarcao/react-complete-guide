import { useState } from "react";

import Card from "../ui/Card";
import ExpensesFilter from "../ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

function Expenses(props) {
  const [filter, setFilter] = useState({ year: 2021 });

  const handlerChange = (value) => setFilter({ year: value });

  return (
    <Card className="expenses">
      <ExpensesFilter {...filter} onChange={handlerChange} />
      {props.items
        .filter((item) => item.date.getFullYear() === filter.year)
        .map((item) => (
          <ExpenseItem key={item.id} {...item} />
        ))}
    </Card>
  );
}

export default Expenses;
