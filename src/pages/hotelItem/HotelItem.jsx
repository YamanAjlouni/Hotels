import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './HotelItem.scss';

const HotelItem = ({ hotel , city }) => {
  return (
    <Link to={`/${city.city}/hotel/${hotel.id}`} className="hotel-item-link">
      <div className="hotel-item">
        <h2>{hotel.name}</h2>
        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
        <div>
          <p>{hotel.description}</p>
          <p className='hotel-stars'> {hotel.stars}</p>
        </div>
      </div>
    </Link>
  )
};

HotelItem.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    stars: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired
};

export default HotelItem;
