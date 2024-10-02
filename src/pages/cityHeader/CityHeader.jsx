import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './CityHeader.scss';
import { GetDetailsByCityNameAction } from '../../redux/actions/CityAction';
import Spinner from '../../components/spinner/Spinner';
import Error from '../../components/error/Error';

const CityHeader = ({ cityName }) => {
  const dispatch = useDispatch();

  const { selectedCity, loading, error } = useSelector(state => state.cityData);

  useEffect(() => {
    if (cityName) {
      dispatch(GetDetailsByCityNameAction(cityName));
    }
  }, [dispatch, cityName]);

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <p> <Error /></p>;
  }

  return (
    <div className="city-header">
      {selectedCity ? (
        <>
          <div className="city-details">
            <h1>{selectedCity.name}</h1>
            <div>{selectedCity.description}</div>
          </div>
          <img
            src={selectedCity.image_url}
            alt={`${selectedCity.name} city`}
            className="city-image"
          />
        </>
      ) : (
        <p>No city details found.</p>
      )}
    </div>
  );
};

CityHeader.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export default CityHeader;
