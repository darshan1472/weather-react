import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const WeatherCard = ({ weather }) => {
  const getBackgroundImage = () => {
    if (!weather) return "";
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("clouds")) return "url(/images/cloudy.jpg)";
    if (main.includes("drizzle") || main.includes("rain"))
      return "url(/images/rainy.jpg)";
    if (main.includes("clear")) return "url(/images/sunny.jpg)";
    if (main.includes("snow") || main.includes("cold"))
      return "url(/images/snowy.jpg)";
    return "";
  };

  const backgroundStyle = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "30vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={backgroundStyle}>
      <Card>
        <CardContent>
          <Typography variant="h5">{weather.name}</Typography>
          <Typography variant="h6">{weather.weather[0].description}</Typography>
          <Typography variant="body1">
            Temperature: {weather.main.temp}°C
          </Typography>
          <Typography variant="body1">
            Humidity: {weather.main.humidity}%
          </Typography>
          <Typography variant="body1">
            Wind Speed: {weather.wind.speed} m/s
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherCard;
