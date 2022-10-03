import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleSave = (data) => {
    data.id = Math.random().toString(); // just for demonstration purposes... this could generate a duplicated id.
    props.onAddExpense(data);
  };

  const handleClick = () => setIsVisible(!isVisible);

  return (
    <div className="new-expense">
      {isVisible ? (
        <ExpenseForm onCancel={handleClick} onSave={handleSave} />
      ) : (
        <button onClick={handleClick}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
