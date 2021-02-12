import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import moment from "moment";

const TempDataChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = async () => {
    try {
      const response = await axios.get(
        "https://ps8.pubnub.com/v2/subscribe/sub-c-5f1b7c8e-fbee-11e3-aa40-02ee2ddab7fe/pubnub-sensor-network/0?tt=16119418483411811"
      );

      const labels = [];
      const data = [];

      for (let i = 0; i < response.data.m.length; i++) {
        labels.push(
          moment(response.data.m[i].d.timestamp).format("HH:mm:ss.SSS")
        );
        data.push(response.data.m[i].d.ambient_temperature);
      }

      //console.log(labels, "labels");
      //console.log(data, "data");

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Temperature",
            data: data,
            fill: false,
            backgroundColor: "rgba(186, 108, 120,0.8)",
            borderColor: "rgba(186, 108, 120,0.9)",
            pointBorderColor: "rgba(186, 108, 120,0.9)",
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
      <Line data={chartData} />
    </div>
  );
};

export default TempDataChart;
