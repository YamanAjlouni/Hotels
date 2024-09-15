// HotelList.js
import React from 'react';
import './HotelList.scss';
import HotelItem from '../hotelItem/HotelItem';

const HotelList = ({ hotels }) => {
  return (
    <div className="hotel-list">
      {hotels.map(hotel => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
