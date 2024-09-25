import React from 'react';
import { Link } from 'react-router-dom';
import './RoomDetails.scss';

const RoomDetails = ({ rooms, hotelName }) => {
  return (
    <div className="room-details">
      {rooms.map((room, index) => (
        <Link
          to={`/room/${hotelName}/${room.roomName}`} // Dynamic routing
          key={index}
          state={{ room, hotelName }} // Pass room data to the next page
          className="room-item"
        >
          <img src={room.image} alt={`Room ${room.roomType}`} className="room-image" />
          <div>
            <p>Room Name: {room.roomName}</p>
            <p>Room Type: {room.roomType}</p>
            <p>{`Price: ${room.price} SYP`}</p>
            <p>Description: {room.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RoomDetails;
