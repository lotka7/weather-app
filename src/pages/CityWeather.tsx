import moment from 'moment';
import { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../app/store';
import WeatherDetails from '../components/WeatherDetails';
import { getCurrentWeather } from '../data/services';
import { City } from '../types/City';
import { WeatherData } from '../types/Weather';

const CityWeather = () => {
  const [currWeather, setCurrWeather] = useState<WeatherData | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  const city = useSelector((state: RootState) =>
    state.cityReducer.find((city) => city.name.toLowerCase() === params.name)
  );

  const getCurrWeather = async (city: City) => {
    const res = await getCurrentWeather(city);
    console.log('metrics', res);
    setCurrWeather(res);
  };

  useEffect(() => {
    if (!city) return;
    getCurrWeather(city);
  }, [city]);

  if (!city) {
    return (
      <section>
        <FaChevronLeft onClick={() => navigate('/cities')} />
        <h2>City not found!</h2>
      </section>
    );
  }

  return (
    <>
      <div className='flex justify-center mr-16 -mt-14 mb-16 cursor-pointer'>
        <FaChevronLeft onClick={() => navigate('/cities')} size={20} />
      </div>
      <p className='text-5xl'>{moment().format('HH')}</p>
      <p className='text-5xl'>{moment().format('mm')}</p>
      <p className='font-bold text-2xl my-5'>{city.name}</p>

      {currWeather ? <WeatherDetails currentWeather={currWeather} /> : <></>}
    </>
  );
};

export default CityWeather;
