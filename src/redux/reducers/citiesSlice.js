// citiesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { GetCitiesAction, GetDetailsByCityNameAction } from '../actions/CityAction';

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    cities: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetCitiesAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetCitiesAction.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(GetCitiesAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(GetDetailsByCityNameAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetDetailsByCityNameAction.fulfilled, (state, action) => {
        state.selectedCity = action.payload;
        state.loading = false;
      })
      .addCase(GetDetailsByCityNameAction.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default citiesSlice.reducer;
