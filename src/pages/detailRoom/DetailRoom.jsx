import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './DetailRoom.scss';

const DetailRoom = () => {
  const location = useLocation();
  const { room, hotelName } = location.state || {}; // Get room details passed via Link
  const [mainImage, setMainImage] = useState(room?.image); // Default to the main room image

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) {
    return <p>No room details available</p>;
  }

  const handleThumbnailClick = (image) => {
    if (image !== mainImage) {
      setMainImage(image);
    }
  };

  return (
    <div className="room-details-page">
      <h2>{hotelName}</h2>
      <div className="room-images">
        <div className="main-image-container">
          {/* Ensure the main image is always displayed */}
          <img src={mainImage || room.roomImages[0]} alt={room.roomName} className="main-image" />
        </div>
        {/* If there are multiple images, allow user to switch between them */}
        <div className="thumbnails">
          {/* Include the main image as a thumbnail if it's not in the list */}
          {[room.image, ...room.roomImages].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${room.roomName}-${index}`}
              className={`thumbnail ${image === mainImage ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>
      </div>
      <div className="room-info">
        <h3>Room: {room.roomName}</h3>
        <p>Room Type: {room.roomType}</p>
        <p>Price: {room.price} SYP</p>
        <p>Description: {room.description}</p>
        {/* Add more details if necessary */}
      </div>
    </div>
  );
};

export default DetailRoom;
 