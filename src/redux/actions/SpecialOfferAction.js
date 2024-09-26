import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSpecialOfferAPI } from '../Api';


export const GetSpecialOffer = createAsyncThunk(
    'special/get',
    async ({ rejectWithValue }) => {
      try {
        const special_offer = await fetchSpecialOfferAPI(); // Using pagination info
        return special_offer;
      } catch (error) {
        return rejectWithValue('Error fetching special offer');
      }
    }
  );