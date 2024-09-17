import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RoomDetails from '../roomDetails/RoomDetails';
import './HotelDetails.scss';

const HotelDetails = () => {
  const { city, id } = useParams();
  const cityData = useSelector(state => state.cities[city]);
  const hotel = cityData?.hotels.find(hotel => hotel.id === parseInt(id));

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="hotel-detail">
      <div className="header">
        <img src={hotel.image} alt={hotel.name} />
        <h1>{hotel.name}</h1>
      </div>
      <div className="main-content">
        <p>{hotel.description}</p>
        <p className='hotel-stars'>{hotel.stars}</p>
        <div className="stars">
          {Array.from({ length: hotel.stars }).map((_, i) => (
            <i key={i} className="fa fa-star"></i>
          ))}
        </div>
        <RoomDetails rooms={hotel.rooms} />
      </div>
    </div>
  );
};

export default HotelDetails;
