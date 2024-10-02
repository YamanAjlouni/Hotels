import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Rooms.scss';
import Spinner from '../../components/spinner/Spinner';
import { GetRoomsDetails } from '../../redux/actions/RoomsAction';

export const Rooms = ({ hotelId }) => {
  const dispatch = useDispatch();
  const { rooms, loading, error } = useSelector((state) => state.rooms); // Select rooms state from Redux

  useEffect(() => {
    if (hotelId) {
      dispatch(GetRoomsDetails(hotelId)); // Dispatch the async thunk to fetch rooms
    }
  }, [dispatch, hotelId]);

  if (loading) return <Spinner />;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="rooms-container">
      {rooms.length > 0 ? (
        rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image_url} alt={room.name} className="room-image" />
            <div className="room-info">
              <h3 className="room-name">{room.name}</h3>
              <p className="room-description">{room.description}</p>
              <p className="room-price">Price: ${room.price}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="no-rooms">No rooms available for this hotel.</div>
      )}
    </div>
  );
};

export default Rooms;
