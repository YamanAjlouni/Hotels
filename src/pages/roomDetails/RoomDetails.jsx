import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RoomDetails.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetRoomsDetails } from '../../redux/actions/RoomsAction';
import Spinner from '../../components/spinner/Spinner';

const RoomDetails = ({ hotelId , hotelName}) => {
  const dispatch = useDispatch();
  const { rooms, loading, error } = useSelector(state => state.rooms);

  useEffect(() => {
    // Dispatch the action to fetch hotel by ID
    dispatch(GetRoomsDetails(hotelId));
  }, [hotelId, dispatch]);

  console.log(rooms)

  if (loading) return <div><Spinner /></div>;
  if (error) return <div>{error}</div>;
  

  return (
    <div className="room-details">
      {rooms.map((room, index) => (
        <Link
          to={`/room/${hotelName}/${room.room_name}`} // Dynamic routing
          key={index}
          state={{ room, hotelName }} // Pass room data to the next page
          className="room-item"
        >
          <img src={room.image_url} alt={`Room ${room.room_name}`} className="room-image" />
          <div>
            <p>Room Name: {room.room_name}</p>
            <p>Description: {room.description}</p>
            <p>{`Price: ${room.price} SYP`}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RoomDetails;
