const API_KEY = '1d8fc3d00bf93cc337ddeee1122593c0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  return response.json();
};

export const fetchForecast = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast/daily?q=${city}&cnt=7&appid=${API_KEY}&units=metric`);
  return response.json();
};
