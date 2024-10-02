import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHotelById, fetchHotelsByCityNameAPI, fetchSuggestedHotelsAPI } from '../Api';


export const GetSuggestedHotels = createAsyncThunk(
  'hotels/getHotels',
  async (_, { rejectWithValue }) => {
    try {
      const hotels = await fetchSuggestedHotelsAPI();
      return hotels;
      console.log(hotels)
    } catch (error) {
      return rejectWithValue('Error fetching hotels');
    }
  }
);


export const GetHotelsByName = createAsyncThunk(
    'hotels/getByName',
    async (cityName, { rejectWithValue }) => {
      try {
        const cities = await fetchHotelsByCityNameAPI(cityName); // Using pagination info
        return cities;
      } catch (error) {
        return rejectWithValue('Error fetching hotels');
      }
    }
  );

  export const GetHotelById = createAsyncThunk(
    'hotels/getByID',
    async (id, { rejectWithValue }) => {
      try {
        const hotel = await fetchHotelById(id); // Using pagination info
        return hotel;
      } catch (error) {
        return rejectWithValue('Error fetching hotel');
      }
    }
  );