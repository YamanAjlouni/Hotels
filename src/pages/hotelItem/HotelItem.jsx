import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './HotelItem.scss';
import RoomDetails from '../roomDetails/RoomDetails';

const HotelItem = ({ hotel }) => {
  return (
    <div className="hotel-item">
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <div>
        <h2>{hotel.name}</h2>
        <p>{hotel.description}</p>
        <p>Stars: {hotel.stars}</p>
      </div>
      <RoomDetails rooms={hotel.rooms} />
    </div>
  );
};

HotelItem.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
        roomType: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string,
        image: PropTypes.string
      })
    ).isRequired
  }).isRequired
};

export default HotelItem;
