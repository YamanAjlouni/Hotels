import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SearchResults.scss';
import CityHeader from '../cityHeader/CityHeader';
import HotelList from '../hotelList/HotelList';
import { useParams } from 'react-router-dom'; // For extracting city name from path

const SearchResults = () => {
  const { city: cityName } = useParams(); // Extract city name from the path



  return (
    <div className="search-results">
      {cityName ? (
        <>
          <CityHeader  cityName={cityName} />
          <HotelList  cityName={cityName} />
        </>
      ) : (
        <p>No results found for the selected city.</p>
      )}
    </div>
  );
};

export default SearchResults;
