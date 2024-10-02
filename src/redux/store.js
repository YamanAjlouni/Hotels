import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './slices/citySlice';
import filterReducer from './slices/filterSlice';
import citiesReducer from './reducers/citiesSlice'
import hotelsReducer from './reducers/hotelsSlice'; 
import roomsReducer from './reducers/roomsSlice';
import specialOfferReducer from './reducers/specialOfferSlice';


const store = configureStore({
  reducer: {
    cities: cityReducer,
    filters: filterReducer,
    cityData: citiesReducer,
    hotels: hotelsReducer,  
    rooms : roomsReducer,
    special_offer : specialOfferReducer,

    
  },
});

export default store;
