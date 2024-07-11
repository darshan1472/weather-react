import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const WeatherCard = ({ weather }) => {
  const getBackgroundImage = () => {
    if (!weather) return "";
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("clouds")) return "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcloudy%2Bweather&psig=AOvVaw3XHI4Qi0RDVdg7JqDqnND1&ust=1720786164350000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICk5pP6nocDFQAAAAAdAAAAABAE)";
    if (main.includes("drizzle") || main.includes("rain"))
      return "url(./images/rainy.jpg)";
    if (main.includes("clear")) return "url(./images/sunny.jpg)";
    if (main.includes("snow") || main.includes("cold"))
      return "url(./images/snowy.jpg)";
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
