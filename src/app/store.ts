import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './features/cityReducer';

const store = configureStore({
  reducer: {
    cityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
