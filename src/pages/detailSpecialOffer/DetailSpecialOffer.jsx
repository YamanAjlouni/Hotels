import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './DetailSpecialOffer.scss';

const DetailSpecialOffer = () => {
  const location = useLocation();
  const { offer } = location.state || {}; // Use a default empty object if no offer is found
  const [mainImage, setMainImage] = useState(offer?.roomImages[0]); // Default to the first image

  console.log(offer)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!offer) {
    return <p>No offer details available</p>; // Handle the case where no offer data is available
  }

  return (
    <div className="offer-details-container">
      <h2>{offer.hotelName}</h2>
      <p className="city-name">City: {offer.city}</p>
      <div className="offer-images">
        <div className="main-image-container">
          <img src={mainImage} alt={offer.roomName} className="main-image" />
        </div>
        <div className="thumbnails">
          {offer.roomImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${offer.roomName}-${index}`}
              className="thumbnail"
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="offer-info">
        <h3>Room: {offer.roomName}</h3>
        <p>Price: ${offer.roomPrice}</p>
        {/* Add more details about the room and hotel if needed */}
      </div>
    </div>
  );
};

export default DetailSpecialOffer;
