import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './slices/citySlice';
import filterReducer from './slices/filterSlice';
import citiesReducer from './reducers/citiesSlice'

const store = configureStore({
  reducer: {
    cities: cityReducer,
    filters: filterReducer,
    cityData: citiesReducer, // Change the key name here

    
  },
});

export default store;
