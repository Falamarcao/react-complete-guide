import { useState } from "react";

import Card from "../ui/Card";
import ExpensesFilter from "../ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filter, setFilter] = useState({ year: 2021 });

  const handleChange = (value) => setFilter({ year: value });

  return (
    <Card className="expenses">
      <ExpensesFilter {...filter} onChange={handleChange} />
      <ExpensesList {...filter} items={props.items} />
    </Card>
  );
}

export default Expenses;
