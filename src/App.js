
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import WeatherCard from './components/WeatherCard';
import ForecastChart from './components/ForecastChart';
import { fetchCurrentWeather, fetchForecast } from './services/WeatherService';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async () => {
    const currentWeather = await fetchCurrentWeather(city);
    const forecastData = await fetchForecast(city);
    setWeather(currentWeather);
    setForecast(forecastData);
  };

  

  return (
   
      <Container>
        <Typography variant="h3" gutterBottom>Weather Dashboard</Typography>
        <TextField
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
        {weather && <WeatherCard weather={weather} />}
        {forecast && <ForecastChart forecast={forecast} />}
      </Container>
   
  );
};

export default App;
