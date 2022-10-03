import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

import { expenses } from "./core/dummyData";

function App() {
  const handlerAddExpense = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={handlerAddExpense} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
