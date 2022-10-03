import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

import { expenses as dummyData } from "./core/dummyData";

function App() {
  const [expenses, setExpenses] = useState(dummyData);
  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
