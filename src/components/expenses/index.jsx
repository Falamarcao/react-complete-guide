import { useState } from "react";

import Card from "../ui/Card";
import ExpensesFilter from "../ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

function Expenses(props) {
  const [filter, setFilter] = useState({ year: 2021 });

  const handleChange = (value) => setFilter({ year: value });

  const filteredItems = props.items.filter(
    (item) => item.date.getFullYear() === filter.year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter {...filter} onChange={handleChange} />
      <ExpensesChart items={filteredItems} />
      <ExpensesList {...filter} items={filteredItems} />
    </Card>
  );
}

export default Expenses;
