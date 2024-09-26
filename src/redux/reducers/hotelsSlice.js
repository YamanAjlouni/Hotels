// hotelsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { GetHotelsByName, GetHotelById } from '../actions/HotelsAction';

// Create hotels slice
const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: {
    hotels: [],
    selectedHotel: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Optionally, add any synchronous reducers here
  },
  extraReducers: (builder) => {
    builder
      // Handle GetHotelsByName actions
      .addCase(GetHotelsByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetHotelsByName.fulfilled, (state, action) => {
        state.hotels = action.payload;
        state.loading = false;
      })
      .addCase(GetHotelsByName.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      
      // Handle GetHotelById actions
      .addCase(GetHotelById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedHotel = null;
      })
      .addCase(GetHotelById.fulfilled, (state, action) => {
        state.selectedHotel = action.payload;
        state.loading = false;
      })
      .addCase(GetHotelById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default hotelsSlice.reducer;
