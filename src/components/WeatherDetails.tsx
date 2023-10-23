import moment from 'moment';
import {
  FaAngleDown,
  FaAngleUp,
  FaSun,
  FaThermometerFull,
} from 'react-icons/fa';
import { WeatherData } from '../types/Weather';

const WeatherDetails = ({
  currentWeather,
}: {
  currentWeather: WeatherData;
}) => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex justify-center my-2'>
        <FaSun size={100} />
      </div>
      <h1>{currentWeather.weather[0].description.toLowerCase()}</h1>
      <div className='flex justify-center items-center space-x-3'>
        <FaThermometerFull />
        <div>{(currentWeather.main.temp - 273.15).toFixed(1)}</div>
      </div>
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
