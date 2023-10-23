import moment from 'moment';
import {
  FaAngleDown,
  FaAngleUp,
  FaCloud,
  FaCloudRain,
  FaSun,
  FaThermometerFull,
} from 'react-icons/fa';
import { WeatherData } from '../types/Weather';

export enum WeatherCategory {
  clear_sky = 'clear sky',
  few_clouds = 'few clouds',
  scattered_clouds = 'scattered clouds',
  broken_clouds = 'broken clouds',
  rain = 'rain',
  thunderstorm = 'thunderstorm',
  snow = 'snow',
  mist = 'mist',
}

const WeatherDetails = ({
  currentWeather,
}: {
  currentWeather: WeatherData;
}) => {
  const getIcon = (category: WeatherCategory): JSX.Element => {
    // TODO - finish icons by enum
    switch (category) {
      case WeatherCategory.clear_sky:
        return <FaSun size={100} />;
      case WeatherCategory.few_clouds:
        return <FaCloud size={100} />;
      case WeatherCategory.broken_clouds:
        return <FaCloud size={100} />;
      case WeatherCategory.scattered_clouds:
        return <FaCloud size={100} />;
      case WeatherCategory.rain:
        return <FaCloudRain size={100} />;
      default:
        return <FaSun size={100} />;
    }
  };
  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex justify-center my-2'>
        {getIcon(
          currentWeather.weather[0].description.toLowerCase() as WeatherCategory
        )}{' '}
      </div>
      <h1>{currentWeather.weather[0].description.toLowerCase()}</h1>
      <div className='flex justify-center items-center space-x-3'>
        <FaThermometerFull />
        <div>{(currentWeather.main.temp - 273.15).toFixed(1)}</div>
      </div>
      {/* ---- TODO - change icons  ---- */}
      <div className='flex justify-center items-center space-x-3'>
        <FaSun />
        <FaAngleUp />
        <div>{moment.unix(currentWeather.sys.sunrise).format('HH:mm')}</div>
      </div>
      <div className='flex justify-center items-center space-x-3'>
        <FaAngleDown />
        <FaSun />
        <div>{moment.unix(currentWeather.sys.sunset).format('HH:mm')}</div>
      </div>
    </div>
  );
};

export default WeatherDetails;
