import ExpenseItem from "./ExpenseItem";
import { expenses } from "../core/dummyData";

import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        date={expenses[0].date}
        description={expenses[0].description}
        price={expenses[0].price}
      />
      <ExpenseItem {...expenses[1]} />
      <ExpenseItem {...expenses[2]} />
      <ExpenseItem {...expenses[3]} />
    </div>
  );
}

export default Expenses;
