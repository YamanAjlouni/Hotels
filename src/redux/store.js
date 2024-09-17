import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './slices/citySlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    cities: cityReducer,
    filters: filterReducer,
  },
});

export default store;
