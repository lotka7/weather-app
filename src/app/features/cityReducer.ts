import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../types/City';

const initialState: City[] = [
  {
    lat: '47.49835',
    lng: '19.04045',
    name: 'Budapest',
    countryCode: 'HU',
  },
];

const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<City>) => {
      state.push(action.payload);
    },
    removeCity: (state, action: PayloadAction<City>) => {
      return state.filter((city) => city !== action.payload);
    },
  },
});

export const { addCity, removeCity } = citySlice.actions;
export default citySlice.reducer;
