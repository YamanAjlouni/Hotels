import React, { useEffect } from 'react';
import './SpecialOffer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetSpecialOffer } from '../../redux/actions/SpecialOfferAction';
import Spinner from '../../components/spinner/Spinner';
import { useNavigate } from 'react-router';

const SpecialOffer = () => {
  const dispatch = useDispatch();
  const { special_offer, loading, error } = useSelector(state => state.special_offer);
  const navigate = useNavigate()


  useEffect(() => {
    // Dispatch the action to fetch hotel by ID
    dispatch(GetSpecialOffer());
  }, [dispatch]);

  const handleRoomClick = (roomId) => {
    navigate(`/room-details/${roomId}`);
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="special-offer-container">
      <h2>Special Offers</h2>
      <div className="special-offer-list">
        {special_offer.map(hotel => (
          <div className="special-offer-item" key={hotel.id} onClick={() => handleRoomClick(hotel.id)}>
            <img src={hotel.image_url} alt={hotel.hotel_name} className="room-image" />
            <div className="hotel-details">
              <h3>{hotel.hotel_name}</h3>
              <p className='city-name'>City: {hotel.city}</p>
              <div className="room-info">
                <p className='room-into-name'>Room: {hotel.room_name}</p>
                <p>Price: {hotel.room_price} SYP</p>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div >
  );
};

export default SpecialOffer;
