import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './HotelDetails.scss';
import { GetHotelById } from '../../redux/actions/HotelsAction';
import RoomDetails from '../roomDetails/RoomDetails';
import Spinner from '../../components/spinner/Spinner';

const HotelDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedHotel, loading, error } = useSelector(state => state.hotels);

  useEffect(() => {
    // Dispatch the action to fetch hotel by ID
    dispatch(GetHotelById(id));
  }, [id, dispatch]);

  console.log(selectedHotel)

  if (loading) return <div><Spinner /></div>;
  if (error) return <div>{error}</div>;

  // Ensure selectedHotel is not null before trying to access its properties
  if (!selectedHotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="hotel-detail">
      <div className="header">
        {/* Check if selectedHotel.image exists before rendering the img tag */}
        {selectedHotel.image_url ? (
          <img src={selectedHotel.image_url} alt={selectedHotel.name} />
        ) : (
          <div>No image available</div>
        )}
        <h1>{selectedHotel.name}</h1>
      </div>
      <div className="main-content">
        <p>{selectedHotel.description}</p>
        <p className='hotel-stars'>{selectedHotel.stars}</p>
        <div className="stars">
          {Array.from({ length: selectedHotel.stars }).map((_, i) => (
            <i key={i} className="fa fa-star"></i>
          ))}
        </div>
        {/* You can also pass rooms to RoomDetails component */}
        <RoomDetails hotelId={id} hotelName={ selectedHotel.name} />
      </div>
    </div>
  );
};

export default HotelDetails;
