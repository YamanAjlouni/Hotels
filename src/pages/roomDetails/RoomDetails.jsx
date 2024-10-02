import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetSpecialOfferRoom } from '../../redux/actions/SpecialOfferRoom';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import './RoomDetails.scss'; 

const RoomDetails = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const { selectedSpecialOffer, loading, error } = useSelector(state => state.special_offer);
  
  const [mainImageIndex, setMainImageIndex] = useState(0); // State to track main image index

  useEffect(() => {
    if (id) {
      dispatch(GetSpecialOfferRoom(id));
    }
  }, [dispatch, id]);

  // Function to change the main image when a thumbnail is clicked
  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  if (loading) return <div><Spinner /></div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="room-details-page">
      {selectedSpecialOffer?.map((room, roomIndex) => (
        <div key={roomIndex}>
          <div className="room-images">
            <div className="main-image-container">
              <img
                src={room.images?.[mainImageIndex]} 
                alt={`Main room image`}
                className="main-image"
              />
            </div>
            <div className="thumbnails">
              {room.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Room thumbnail ${index + 1}`}
                  className={`thumbnail ${index === mainImageIndex ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(index)} 
                />
              ))}
            </div>
          </div>
          <div className="room-info">
            <h3>{room.name}</h3>
            <p>Price: ${room.price}</p>
            <p>{room.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomDetails;
