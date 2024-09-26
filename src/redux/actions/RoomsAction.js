import { createAsyncThunk } from '@reduxjs/toolkit';
import {  fetchRoomsByHotelIdAPI } from '../Api';


export const GetRoomsDetails = createAsyncThunk(
    'rooms/get',
    async (hotelId, { rejectWithValue }) => {
      try {
        const rooms = await fetchRoomsByHotelIdAPI(hotelId); // Using pagination info
        return rooms;
      } catch (error) {
        return rejectWithValue('Error fetching rooms');
      }
    }
  );