import axios from 'axios';
import config from '../config';
import { City } from '../types/City';
import { WeatherData } from '../types/Weather';

const listCities = async (
  searchTerm: string,
  maxRows?: number
): Promise<City[]> => {
  try {
    const response = await axios.get('http://api.geonames.org/searchJSON', {
      params: {
        q: `${searchTerm}`,
        maxRows: maxRows ?? 8,
        username: config.geo_api.username,
      },
    });
    return response.data.geonames;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const getCurrentWeather = async (city: City): Promise<WeatherData> => {
  try {
    const response = await axios.get(config.open_weather_api.url, {
      params: {
        lat: city.lat,
        lon: city.lng,
        appid: config.open_weather_api.api_key,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export { getCurrentWeather, listCities };
