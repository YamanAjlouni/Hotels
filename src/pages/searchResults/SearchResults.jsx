import React, { useEffect } from 'react';
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

  const getQueryParams = (search) => {
    return new URLSearchParams(search);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const queryParams = getQueryParams(location.search);
    const city = queryParams.get('city');
    if (city && city !== selectedCity) {
      dispatch(setSelectedCity(city));
    }
  }, [location.search, selectedCity, dispatch]);

  const city = cityData[selectedCity];
  const filteredHotels = city?.hotels?.filter(hotel => {
    let matches = true;
    if (filters.price) {
      matches = matches && hotel.price <= filters.price;
    }
    if (filters.stars) {
      matches = matches && hotel.stars >= filters.stars;
    }
    return matches;
  });

  return (
    <div className="search-results">
      {city ? (
        <>
          <CityHeader city={city} />
          <HotelList city={city} hotels={filteredHotels} />
        </>
      ) : (
        <p>No results found for the selected city.</p>
      )}
    </div>
  );
};

export default SearchResults;
