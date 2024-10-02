// actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCitiesAPI, fetchDetailsByCityNameAPI } from '../Api';

// Action to fetch cities with pagination
export const GetCitiesAction = createAsyncThunk(
  'cities/get',
  async (info, { rejectWithValue }) => {
    try {
      const cities = await fetchCitiesAPI(info.page, info.size); // Using pagination info
      return cities;
    } catch (error) {
      return rejectWithValue('Error fetching cities  ');
    }
  }
);

// Action to fetch details by city name
export const GetDetailsByCityNameAction = createAsyncThunk(
  'cities/getByName',
  async (cityName, { rejectWithValue }) => {
    try {
      // Call the API to fetch city details by city name
      const cityDetails = await fetchDetailsByCityNameAPI(cityName);
      return cityDetails;
    } catch (error) {
      return rejectWithValue(`Error fetching details for city: ${cityName}`);
    }
  }
);
