import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const initialState = {
    description: "",
    price: "",
    date: "",
  };
  const [state, setState] = useState(initialState);

  const handleChange = (event) =>
    // This could result in a not desired state, because React schedules updates to the state.
    // setState({ ...state, [event.target.name]: event.target.value });
    // So we neet to do in this way instead.
    setState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    state.date = new Date(state.date); // Convert
    props.onSave(state); // Use
    setState(initialState); // Clear
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={state.description}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            name="price"
            min="0.00"
            step="0.01"
            value={state.price}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            value={state.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
