import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/data';

const citySlice = createSlice({
  name: 'cities',
  initialState: data,
  reducers: {
    setSelectedCity: (state, action) => {
      return { ...state, selectedCity: action.payload };
    },
  },
});

export const { setSelectedCity } = citySlice.actions;
export default citySlice.reducer;
