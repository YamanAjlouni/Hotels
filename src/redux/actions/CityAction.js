// actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCitiesAPI } from '../Api';

export const GetCitiesAction = createAsyncThunk(
  'cities/get',
  async (info, { rejectWithValue }) => {
    try {
      const cities = await fetchCitiesAPI(info.page, info.size); // Using pagination info
      return cities;
    } catch (error) {
      return rejectWithValue('Error fetching cities');
    }
  }
);
