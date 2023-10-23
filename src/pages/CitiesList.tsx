import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';

const CitiesList = () => {
  const citiesState = useSelector((state: RootState) => state.cityReducer);

  const navigate = useNavigate();

  return (
    <>
      {citiesState.map((city) => (
        <div
          key={city.name + city.lat + city.lng}
          onClick={() => navigate(`/cities/${city.name.toLowerCase()}`)}
          className='cursor-pointer text-3xl mb-2'
        >
          {city.name}
        </div>
      ))}
      <div
        onClick={() => {
          navigate('/cities/add');
        }}
        className='text-green-400 text-4xl cursor-pointer'
      >
        +
      </div>
    </>
  );
};

export default CitiesList;
