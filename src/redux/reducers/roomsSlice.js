// hotelsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { GetRoomsDetails } from '../actions/RoomsAction';

// Create hotels slice
const roomSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
    selectedRoom: null,
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetRoomsDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetRoomsDetails.fulfilled, (state, action) => {
        state.rooms = action.payload;
        state.loading = false;
      })
      .addCase(GetRoomsDetails.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      
  },
});

export default roomSlice.reducer;
