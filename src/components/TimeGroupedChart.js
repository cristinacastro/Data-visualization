import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import moment from "moment";

const TimeGroupedChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = async () => {
    try {
      const response = await axios.get(
        "https://ps8.pubnub.com/v2/subscribe/sub-c-5f1b7c8e-fbee-11e3-aa40-02ee2ddab7fe/pubnub-sensor-network/0?tt=16119418483411811"
      );

      const labels = [];
      const temperatureData = [];
      const humidityData = [];

      for (let i = 0; i < response.data.m.length; i++) {
        labels.push(
          moment(response.data.m[i].d.timestamp).format("HH:mm:ss.SSS")
        );
        humidityData.push(response.data.m[i].d.humidity);
        temperatureData.push(response.data.m[i].d.ambient_temperature);
      }

      //console.log(labels, "labels");
      //console.log(data, "data");

      setChartData({
        labels: labels.slice(0, 15),
        datasets: [
          {
            label: "Temperature",
            data: temperatureData.slice(0, 15),
            backgroundColor: "rgba(186, 108, 120, 1)",
            borderColor: "rgba(186, 108, 120, 1)",
          },
          {
            label: "Humidity",
            data: humidityData.slice(0, 15),
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
      <Bar data={chartData} />
    </div>
  );
};

export default TimeGroupedChart;
