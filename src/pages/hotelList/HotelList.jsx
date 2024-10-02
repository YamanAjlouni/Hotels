// HotelList.js
import React, { useEffect } from 'react';
import './HotelList.scss';
import HotelItem from '../hotelItem/HotelItem';
import { useDispatch, useSelector } from 'react-redux';
import { GetHotelsByName } from '../../redux/actions/HotelsAction';
import { fetchHotelsByCityName } from '../../redux/reducers/hotelsSlice';
import Spinner from '../../components/spinner/Spinner';
import Error from '../../components/error/Error';

const HotelList = ({ city, cityName }) => {
  const dispatch = useDispatch();
  const { hotels, loading, error } = useSelector((state) => state.hotels);

  useEffect(() => {
    if (cityName) {
      dispatch(GetHotelsByName(cityName)); // Dispatch action to fetch hotels by city name
    }
  }, [cityName, dispatch]);

  if (loading) return <Spinner />;
  if (error) return <p><Error /></p>;


  return (
    <div className="hotel-list">
      {hotels.map(hotel => (
        <HotelItem city={cityName} key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;

