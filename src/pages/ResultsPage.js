import React from "react";
import ResultsDisplay from "../components/ResultsDisplay";
import ChartComponent from "../components/ChartComponent";

const ResultsPage = () => {
  const chartData = {
    labels: ["X-Ray 1", "X-Ray 2", "X-Ray 3"],
    datasets: [
      {
        label: "Confidence (%)",
        data: [95, 87, 92],
        borderColor: "#3f51b5",
        backgroundColor: "rgba(63, 81, 181, 0.4)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="results-page">
      <h1>Step 3: Results</h1>
      <ResultsDisplay diagnosis="Fracture detected in the upper limb. Consult a specialist." />
      <ChartComponent data={chartData} options={chartOptions} />
    </div>
  );
};

export default ResultsPage;
