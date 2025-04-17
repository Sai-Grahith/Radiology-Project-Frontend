import React from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

// Register required components
Chart.register(...registerables);

const ChartComponent = ({ data, options }) => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
