import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSpecialOfferRoomsAPI } from '../Api';

export const GetSpecialOfferRoom = createAsyncThunk(
  'special/getRoom',
  async (id, { rejectWithValue }) => {  // Accept 'id' as a parameter
    try {
      const selectedSpecialOffer = await fetchSpecialOfferRoomsAPI(id); // Pass 'id' to the API function
      return selectedSpecialOffer;
    } catch (error) {
      return rejectWithValue('Error fetching special offer room');
    }
  }
);
