import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './slices/citySlice';
import filterReducer from './slices/filterSlice';
import citiesReducer from './reducers/citiesSlice'
import hotelsReducer from './reducers/hotelsSlice'; // Import the hotels slice
import roomsReducer from './reducers/roomsSlice';
import specialOfferReducer from './reducers/specialOfferSlice';


const store = configureStore({
  reducer: {
    cities: cityReducer,
    filters: filterReducer,
    cityData: citiesReducer, // Change the key name here
    hotels: hotelsReducer,  // Add hotels slice here
    rooms : roomsReducer,
    special_offer : specialOfferReducer,

    
  },
});

export default store;
