import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './SearchResults.scss';
import CityHeader from '../cityHeader/CityHeader';
import HotelList from '../hotelList/HotelList';

const SearchResults = ({ cityData = {}, selectedCity = '', filters = {} }) => {
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    if (selectedCity && cityData[selectedCity]) {
      // Apply filters here if needed
      const city = cityData[selectedCity];
      let hotels = city.hotels || [];
      
      // Example of applying a filter (if needed):
      if (filters.price) {
        hotels = hotels.filter(hotel => hotel.price <= filters.price);
      }

      setFilteredHotels(hotels);
    }
  }, [selectedCity, filters, cityData]);

  const city = cityData[selectedCity];

  return (
    <div className="search-results">
      {city ? (
        <>
          <CityHeader city={city} />
          <HotelList hotels={filteredHotels} />
        </>
      ) : (
        <p>No results found for the selected city.</p>
      )}
    </div>
  );
};

SearchResults.propTypes = {
  cityData: PropTypes.object,
  selectedCity: PropTypes.string,
  filters: PropTypes.object
};

export default SearchResults;
