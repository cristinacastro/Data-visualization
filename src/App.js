import React from "react";
import "./App.css";
import Charts from "./components/Charts";

const App = () => {
  return (
    <div className="charts-container">
      <div className="line-charts">
        <Charts
          options={{
            legend: {
              display: false,
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default App;
