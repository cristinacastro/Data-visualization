import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import moment from "moment";

const Charts = (props) => {
  const [chartTempData, setChartTempData] = useState({});
  const [chartHumData, setChartHumData] = useState({});
  const [chartBarData, setChartBarData] = useState({});

  const chart = async () => {
    try {
      const response = await axios.get(
        "https://ps8.pubnub.com/v2/subscribe/sub-c-5f1b7c8e-fbee-11e3-aa40-02ee2ddab7fe/pubnub-sensor-network/0?tt=16119418483411811"
      );

      const labels = [];
      const tempData = [];
      const humiData = [];

      for (let i = 0; i < response.data.m.length; i++) {
        labels.push(
          moment(response.data.m[i].d.timestamp).format("HH:mm:ss.SSS")
        );
        tempData.push(response.data.m[i].d.ambient_temperature);
        humiData.push(response.data.m[i].d.humidity);
      }
      console.log(response);
      setChartTempData({
        labels: labels,
        datasets: [
          {
            label: "Temperature",
            data: tempData,
            fill: false,
            borderColor: "rgba(186, 108, 120,0.8)",
            pointBorderColor: "rgba(186, 108, 120,0.9)",
          },
        ],
      });

      setChartHumData({
        labels: labels,
        datasets: [
          {
            label: "Humidity",
            data: humiData,
            fill: false,
            borderColor: "rgba(65, 103, 166,0.8)",
            pointBorderColor: "rgba(65, 103, 166,0.9)",
          },
        ],
      });

      setChartBarData({
        labels: labels.slice(0, 15),
        datasets: [
          {
            label: "Temperature",
            data: tempData.slice(0, 15),
            backgroundColor: "rgba(186, 108, 120, 1)",
            borderColor: "rgba(186, 108, 120, 1)",
          },

          {
            label: "Humidity",
            data: humiData.slice(0, 15),
            backgroundColor: "rgba(65, 103, 166,0.5)",
            borderColor: "rgba(65, 103, 166,0.5)",
          },
        ],
      });
    } catch (e) {
      console.log(e, "error while getting data");
    }
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <div className="temp-chart">
        <Line data={chartTempData} />
      </div>
      <div className="humidity-chart">
        <Line data={chartHumData} />
      </div>
      <Bar data={chartBarData} />
    </div>
  );
};

export default Charts;
