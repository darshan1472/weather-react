import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, CardContent, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ForecastChart = ({ forecast }) => {
  const dates = forecast.list.map((item) =>
    new Date(item.dt * 1000).toLocaleDateString()
  );
  const temperatures = forecast.list.map((item) => item.temp.day);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">7-Day Forecast</Typography>
        <Line data={data} />
      </CardContent>
    </Card>
  );
};

export default ForecastChart;
