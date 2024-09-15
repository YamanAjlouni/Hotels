import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './CityHeader.scss';

const CityHeader = ({ city }) => {
  return (
    <div className="city-header">
      <div className='city-details'>
        <h1>{city.name}</h1>
        <div>{city.description}</div>
      </div>
      <img src={city.image} alt={`${city.name} city`} className="city-image" />
    </div>
  );
};

CityHeader.propTypes = {
  city: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default CityHeader;
