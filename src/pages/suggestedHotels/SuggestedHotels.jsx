import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './SuggestedHotels.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetSuggestedHotels } from '../../redux/actions/HotelsAction';
import Spinner from '../../components/spinner/Spinner';
import Error from '../../components/error/Error';




const SuggestedHotels = ({ city }) => {
  const navigate = useNavigate();
  const { SuggestedHotels, loading, error } = useSelector(state => state.hotels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSuggestedHotels());
  }, [dispatch]);
  console.log(SuggestedHotels)


  const handleCardClick = (hotelId, hotelCity) => {
    navigate(`/${hotelCity}/hotel/${hotelId}`);
  };

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <p> <Error /></p>;
  }

  return (
    <div className="suggested-hotels">
      <h2>Suggested Hotels</h2>
      <div className="swiper-wrapper-out-container">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            }
          }}
          pagination={{ clickable: true }}
          navigation
          className="swiper-container"
        >
          {SuggestedHotels?.map(hotel => (
            <SwiperSlide key={hotel.id}>
              <div 
                className="hotel-card"
                onClick={() => handleCardClick(hotel.hotel_id)}
              >
                <img src={hotel.hotels.image_url} alt={hotel.hotels.name} className="hotel-image" />
                <div className="hotel-info">
                  <h3>{hotel.hotels.name}</h3>
                  <p>{hotel.hotels.cities.name}</p>
                  <p>{hotel.hotels.description}</p>
                  <span className="hotel-stars">{hotel.hotels.stars}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

SuggestedHotels.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      // price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      rooms: PropTypes.arrayOf(
        PropTypes.shape({
          roomType: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          description: PropTypes.string,
          image: PropTypes.string
        })
      )
    })
  ).isRequired,
  city: PropTypes.string, // Added city prop for navigation
};

export default SuggestedHotels;
