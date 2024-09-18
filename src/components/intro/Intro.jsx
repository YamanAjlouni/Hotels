import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './Intro.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const Intro = () => {
  const cities = [
    {
      name: 'Damascus',
      image: require('../../assets/images/intro/syria-damascus.jpg'), // Replace with your actual image path
      link: 'search-results?city=Damascus'
    },
    {
      name: 'Lattakia',
      image: require('../../assets/images/intro/syria-lattakia.jpg'), // Replace with your actual image path
      link: 'search-results?city=Lattakia'
    },
    {
      name: 'Tartus',
      image: require('../../assets/images/intro/syria-tartus.jpg'), // Replace with your actual image path
      link: 'search-results?city=Tartus'
    },
    {
      name: 'Homs',
      image: require('../../assets/images/intro/sryia-homs.webp'), // Replace with your actual image path
      link: '/homs/hotels'
    },
    {
      name: 'Aleppo',
      image: require('../../assets/images/intro/syria-aleppo.jpg'), // Replace with your actual image path
      link: '/aleppo/hotels'
    }
  ];

  return (
    <div className="intro-out-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {cities.map((city, index) => (
          <SwiperSlide key={index}>
            <div className="city-slide" style={{ backgroundImage: `url(${city.image})` }}>
              <div className="city-overlay">
                <h2 className="city-name">{city.name}</h2>
                <Link to={city.link} className="city-link">
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
