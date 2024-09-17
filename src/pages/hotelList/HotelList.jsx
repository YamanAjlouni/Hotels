// HotelList.js
import React from 'react';
import './HotelList.scss';
import HotelItem from '../hotelItem/HotelItem';

const HotelList = ({ hotels , city }) => {
  
  return (
    <div className="hotel-list">
      {hotels.map(hotel => (
        <HotelItem city={city} key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
