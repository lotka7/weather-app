import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCity } from '../app/features/cityReducer';
import Search from '../components/Search';
import { City } from '../types/City';

const CityAdd = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSearchChange = (searchData: {
    value: string;
    label: string;
  }) => {
    const [lat, lng, countryCode] = searchData.value.split('|');
    console.log('lat, lng', lat, lng);
    const currentCity = { lat, lng, name: searchData.label, countryCode };
    setSelectedCity(currentCity);
  };

  const handleAddCity = () => {
    console.log('selectedCity', selectedCity);
    if (selectedCity) {
      dispatch(addCity(selectedCity));
      setSelectedCity(null);
      navigate('/cities');
    }
  };

  return (
    <>
      <div className='flex justify-center mr-16 -mt-14 mb-16 cursor-pointer'>
        <FaChevronLeft onClick={() => navigate('/cities')} size={20} />
      </div>
      <div className='flex justify-center'>
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      {selectedCity ? (
        <div
          onClick={handleAddCity}
          className='text-green-400 text-4xl cursor-pointer'
        >
          +
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CityAdd;
