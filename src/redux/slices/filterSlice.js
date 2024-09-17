import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    price: null,
    stars: null,
  },
  reducers: {
    setPriceFilter: (state, action) => {
      state.price = action.payload;
    },
    setStarsFilter: (state, action) => {
      state.stars = action.payload;
    },
  },
});

export const { setPriceFilter, setStarsFilter } = filterSlice.actions;
export default filterSlice.reducer;
