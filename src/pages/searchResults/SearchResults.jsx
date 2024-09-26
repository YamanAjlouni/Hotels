import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SearchResults.scss';
import CityHeader from '../cityHeader/CityHeader';
import HotelList from '../hotelList/HotelList';
import { useLocation } from 'react-router-dom';
import { setSelectedCity } from '../../redux/slices/citySlice';

const SearchResults = () => {
  const cityData = useSelector(state => state.cities);
  const filters = useSelector(state => state.filters);
  const selectedCity = useSelector(state => state.cities.selectedCity);
  const dispatch = useDispatch();
  const location = useLocation();
  const [cityName , setCityName] = useState('')

  // Helper function to get query params
  const getQueryParams = (search) => {
    return new URLSearchParams(search);
  };

  // Get city from query parameters
  useEffect(() => {
    const queryParams = getQueryParams(location.search);
    const city = queryParams.get('city'); // Extract the city from query string (e.g., ?city=Damascus)
    const name = queryParams.get('city'); // Extract the city from query string (e.g., ?city=Damascus)
    setCityName(name)

    if (city && city !== selectedCity) {
      dispatch(setSelectedCity(city)); // Dispatch the city to Redux if it's not already selected
    }
  }, [location.search, selectedCity, dispatch]);

  const city = cityData[selectedCity]; // Retrieve the city data from Redux

  // Apply filters to hotels
  

  return (
    <div className="search-results">
      {city ? (
        <>
          <CityHeader city={city} cityName={cityName} />
          <HotelList city={city} cityName={cityName} />
        </>
      ) : (
        <p>No results found for the selected city.</p>
      )}
    </div>
  );
};

export default SearchResults;
