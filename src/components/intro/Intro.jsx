import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './Intro.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { GetCitiesAction } from '../../redux/actions/CityAction';
import Spinner from '../spinner/Spinner';

export const Intro = () => {
  const dispatch = useDispatch();
  const { cities, loading, error } = useSelector((state) => state.cityData);

  useEffect(() => {
    dispatch(GetCitiesAction({ page: 1, size: 10 })); // Fetch cities when the component mounts
  }, [dispatch]);

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="intro-out-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {cities?.map((city) => (
          <SwiperSlide key={city.id}>
            <div className="city-slide">
              <img src={city.image_url} alt={city.name} className="city-image" />
              <div className="city-overlay">
                <h2 className="city-name">{city.name}</h2>
                {/* Pass city name or ID as a query parameter */}
                <Link to={`/search-results?city=${city.name}`} className="city-link">
                  Explore Hotels in {city.name}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
