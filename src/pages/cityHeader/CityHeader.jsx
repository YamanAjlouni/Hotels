import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './CityHeader.scss';
import { GetDetailsByCityNameAction } from '../../redux/actions/CityAction';
import Spinner from '../../components/spinner/Spinner';

const CityHeader = ({ cityName }) => {
  const dispatch = useDispatch();

  // Select the city details from Redux state
  const city = useSelector(state => state.cityData.selectedCity);
  const loading = useSelector(state => state.cityData.loading);
  const error = useSelector(state => state.cityData.error);

  // Fetch the city details when the component mounts
  useEffect(() => {
    if (cityName) {
      dispatch(GetDetailsByCityNameAction(cityName));
    }
  }, [dispatch, cityName]);

  // Render loading, error or city data
  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <p>Error loading city details: {error}</p>;
  }
  console.log(city)

  return (
    <div className="city-header">
      {city ? (
        <>
          <div className="city-details">
            <h1>{city.name}</h1>
            <div>{city.description}</div>
          </div>
          <img
            src={city.image_url}
            alt={`${city.name} city`}
            className="city-image"
          />
        </>
      ) : (
        <p>No city details found.</p>
      )}
    </div>
  );
};

// PropTypes to enforce expected props
CityHeader.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export default CityHeader;
