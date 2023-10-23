import { AsyncPaginate } from 'react-select-async-paginate';
import { listCities } from '../data/services';
import { useState } from 'react';
import { City } from '../types/City';

// Custom styles
const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: '#003244',
    width: '250px',
    color: '#61dafb',
    cursor: 'pointer',
    border: '0',
    borderBottom: '1px solid #61dafb',
    borderRadius: '0px',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: '#003244',
    width: '250px',
    color: state.isFocused ? '#61dafb' : null,
  }),
  menuList: (provided: any, state: any) => ({
    ...provided,
    maxHeight: '1000px',
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: '#003244',
    width: 'calc(250px + 16px)',
    boxShadow: 'none',
    textAlign: 'left',
    color: state.isFocused ? '#61dafb' : null,
    overflow: 'hidden',
  }),
  input: (provided: any, state: any) => ({
    ...provided,
    color: '#61dafb',
    border: 0,
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: '#61dafb',
  }),
};

export default function Search({
  onSearchChange,
}: {
  onSearchChange: (searchData: { value: string; label: string }) => void;
}): JSX.Element | null {
  const [search, setSearch] = useState(null);

  const getOptions = async (
    inputValue: string
  ): Promise<{ options: { value: string; label: string }[] }> => {
    const res = await listCities(inputValue);
    console.log(res);
    return {
      options: res.map((city: City) => {
        return {
          value: `${city.lat}|${city.lng}|${city.countryCode}`,
          label: `${city.name}`,
        };
      }),
    };
  };

  const handleOnChange = (searchData: any) => {
    console.log('asdasd', searchData);
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={getOptions}
      className='bg-inherit'
      styles={customStyles}
    />
  );
}
