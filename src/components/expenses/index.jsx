import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((value) => (
        <ExpenseItem key={value.id} {...value} />
      ))}
    </Card>
  );
}

export default Expenses;
