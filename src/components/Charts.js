import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import moment from "moment";
import "./Charts.css";

const Charts = () => {
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
          moment(response.data.m[i].d.timestamp).format("HH:mm") //per motius de disseny ui es redueix el format del timestamp a ts, per veure diferència s'hauria de fer servir aquest altre format:moment(response.data.m[i].d.timestamp).format("HH:mm:ss.SSS")
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
            borderColor: "rgba(233, 97, 90,0.9)",
            pointBorderColor: "rgba(233, 97, 90,0.9)",
            pointBorderWidth: 0.3,
            backgroundColor: "rgba(233, 97, 90,0.9)",
            borderWidth: 2,
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
            borderColor: "rgba(145, 178, 250,0.9)",
            pointBorderColor: "rgba(145, 178, 250,0.9)",
            pointBorderWidth: 0.3,
            backgroundColor: "rgba(145, 178, 250,0.9)",
            borderWidth: 2,
          },
        ],
      });

      setChartBarData({
        labels: labels.slice(0, 20),
        datasets: [
          {
            label: "Temperature",
            data: tempData.slice(0, 20),
            backgroundColor: "rgba(233, 97, 90, 1)",
            borderColor: "rgba(233, 97, 90, 1)",
          },

          {
            label: "Humidity",
            data: humiData.slice(0, 20),
            backgroundColor: "rgba(145, 178, 250,0.8)",
            borderColor: "rgba(145, 178, 250,0.8)",
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
    <section className="charts-container">
      <div className="bar-chart-container">
        <h3>Overview</h3>
        <div className="bar-chart">
          <Bar
            data={chartBarData}
            options={{
              legend: {
                display: true,
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
      <div className="line-charts-container">
        <div className="temp-chart-container">
          <h3>Temperature</h3>
          <h4>Last hour</h4>
          <div className="line-chart">
            <Line
              data={chartTempData}
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
        <div className="humidity-chart-container">
          <h3>Humidity</h3>
          <h4>Last hour</h4>
          <div className="line-chart">
            <Line
              data={chartHumData}
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
      </div>
    </section>
  );
};

export default Charts;
