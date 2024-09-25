import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CityHeader.scss';
import supabase from '../../config/supabaseClient';
// import { fetchCities } from '../../config/supabaseApi';

const CityHeader = ({ city }) => {
  // const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cities, setCities] = useState(null);

  // console.log(supabase)
  
  // fetchCities();

  useEffect(() => {
    const fetchCities = async () => {
      const { data, error } = await supabase
        .from('cities')
        .select()

      if (error) {
        console.error('Error fetching city:', error)
      }
      if (data) {
        setCities(data)
      }
    }

    fetchCities()
    
    
  }, [])
  useEffect(() => {console.log(cities)} , [ cities ])

  return (

    // <div className="city-header">
    //   <div className='city-details'>
    //     <h1>{city.city}</h1>
    //     <div>{city.description}</div>
    //   </div>
    //   <img src={city.image} alt={`${city.city} city`} className="city-image" />
    // </div>

    <div className="city-header">
      {cities && (
        <>
          {cities.map(city => (
            <>
              <div className='city-details'>
                <h1>{city.name}</h1>
                <div>{city.description}</div>
              </div>
              <img src={city.image_url} alt={`${city.name} city`} className="city-image" />
            </>

          ))}
        </>
      )}
    </div>
  );
  ;
}

// CityHeader.propTypes = {
//   city: PropTypes.number.isRequired // Expecting a cityId as a prop
// };

export default CityHeader;
