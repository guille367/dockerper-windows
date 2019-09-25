const { REACT_APP_API_URL } = process.env

const apiUrl = REACT_APP_API_URL

export const fetchWeather = (startDateIndex) => {
  return `${apiUrl}/SampleData/WeatherForecasts?startDateIndex=${startDateIndex}`
}