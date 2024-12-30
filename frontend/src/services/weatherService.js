import axios from 'axios';

const baseUrl = process.env.VUE_APP_BASE_URL;
const apiWeatherBaseUrl = `${baseUrl}/backend/get-weather`;


export async function fetchWeatherByCoordinates(lat, lon) {
  try {
    const response = await axios.post(
      apiWeatherBaseUrl,
      new URLSearchParams({ lat: lat, lon: lon }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return { error: error.message };
  }
}