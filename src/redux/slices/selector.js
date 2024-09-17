import { createSelector } from 'reselect';

const selectCityData = state => state.cities;
const selectFilters = state => state.filters;
const selectSelectedCity = state => state.cities.selectedCity;

export const makeSelectCity = createSelector(
  [selectCityData, selectSelectedCity],
  (cityData, selectedCity) => cityData[selectedCity]
);

export const makeSelectFilteredHotels = createSelector(
  [selectCityData, selectSelectedCity, selectFilters],
  (cityData, selectedCity, filters) => {
    const city = cityData[selectedCity];
    if (!city) return [];
    
    return city.hotels.filter(hotel => {
      let matches = true;
      if (filters.price) {
        matches = matches && hotel.price <= filters.price;
      }
      if (filters.stars) {
        matches = matches && hotel.stars >= filters.stars;
      }
      return matches;
    });
  }
);
