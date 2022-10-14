import Chart from "../Chart";

const ExpensesChart = (props) => {
  // function to get Jan, Feb, Mar, ... etc
  const getMonthShortName = (monthNo) => {
    const date = new Date();
    date.setMonth(monthNo);
    return date.toLocaleString("en-US", { month: "short" });
  };

  // creating an Array using [getMonthShortName]
  const chartData = [...Array(12).keys()].map((i) => ({
    key: i,
    label: getMonthShortName(i),
    value: 0,
  }));

  // populating chatData.value
  for (const item of props.items) {
    const month = item.date.getMonth();
    chartData[month].value += item.price;
  }

  return <Chart key={chartData.id} data={chartData} />;
};

export default ExpensesChart;
