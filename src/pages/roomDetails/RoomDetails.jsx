// RoomDetails.js
import React from 'react';
import './RoomDetails.scss';

const RoomDetails = ({ rooms }) => {
    return (
        <div className="room-details">
            {rooms.map((room, index) => (
                <div key={index} className="room-item">
                    <img src={room.image} alt={`Room ${room.roomType}`} className="room-image" />
                    <div>
                        <p>Room Name: {room.roomName}</p>
                        <p>Room Type: {room.roomType}</p>
                        <p>{`Price: ${room.price} SYP `}</p>
                        <p>Description: {room.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RoomDetails;
