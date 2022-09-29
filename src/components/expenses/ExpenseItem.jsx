import { useState } from "react";

import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [description, setDescription] = useState(props.description);

  // function onClickHandler() { }
  const onClickHandler = () => {
    setDescription("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{description}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
