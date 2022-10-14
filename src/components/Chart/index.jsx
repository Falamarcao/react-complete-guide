import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const values = props.data.map((data) => data.value);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {props.data.map((e) => (
        <ChartBar {...e} maxValue={maxValue} />
      ))}
    </div>
  );
};

export default Chart;
