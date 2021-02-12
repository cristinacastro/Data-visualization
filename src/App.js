import React from "react";
import TimeGroupedChart from "./components/TimeGroupedChart.js";
import TempDataChart from "./components/TempDataChart";
import HumidityDataChart from "./components/HumidityDataChart";

const App = () => {
  return (
    <div>
      <div>
        <TempDataChart />
      </div>
      <div>
        {" "}
        <HumidityDataChart />
      </div>
      <div>
        <TimeGroupedChart />
      </div>
    </div>
  );
};

export default App;
