import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const handleSave = (data) => {
    // just for demonstration purposes... this could generate a duplicated id.
    data.id = Math.random().toString();

    props.onAddExpense(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={handleSave} />
    </div>
  );
};

export default NewExpense;
