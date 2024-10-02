import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './WhereTo.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useDispatch, useSelector } from 'react-redux';
import { GetCitiesAction } from '../../redux/actions/CityAction';



const customStyles = {
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 4,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  control: (provided) => ({
    ...provided,
    border: '1px solid #ddd',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #007bff',
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#007bff' : provided.backgroundColor,
    color: state.isSelected ? 'white' : provided.color,
    '&:hover': {
      backgroundColor: '#004643',
      color : '#E9F7EF',
    },
  }),
};

export const WhereTo = () => {
  const [country, setCountry] = useState('');
  const [dates, setDates] = useState([null, null]);
  const [startDate, endDate] = dates;
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [childrenAges, setChildrenAges] = useState([]);
  const [errors, setErrors] = useState({
    country: false,
    dates: false,
    childrenAges: false
  });
  const dispatch = useDispatch();
  const { cities, loading, error } = useSelector(state => state.cityData);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    dispatch(GetCitiesAction({ page: 1, size: 20 })); // Fetch cities when the component mounts
  }, [dispatch]);


  const handleChildrenChange = (value) => {
    setChildren(value);
    setChildrenAges(Array.from({ length: value }, (_, i) => childrenAges[i] || ''));
  };

  const handleAgeChange = (index, age) => {
    const updatedAges = [...childrenAges];
    updatedAges[index] = age;
    setChildrenAges(updatedAges);
  };

  const validateForm = () => {
    const isCountryValid = country !== '';
    const isDatesValid = startDate !== null && endDate !== null;
    const isChildrenAgesValid = children === 0 || childrenAges.every((age) => age !== '');

    setErrors({
      country: !isCountryValid,
      dates: !isDatesValid,
      childrenAges: !isChildrenAgesValid,
    });

    return isCountryValid && isDatesValid && isChildrenAgesValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log({
        country,
        checkInDate: startDate,
        checkOutDate: endDate,
        adults,
        children,
        childrenAges
      });

      // Navigate to SearchResults with search parameters
      navigate(`/search-results?city=${country}&checkInDate=${startDate.toISOString()}&checkOutDate=${endDate.toISOString()}&adults=${adults}&children=${children}&childrenAges=${childrenAges.join(',')}`);

      resetForm();
    }
  };

  const resetForm = () => {
    setCountry('');
    setDates([null, null]);
    setAdults(1);
    setChildren(0);
    setChildrenAges([]);
  };

  return (
    <div className='where-to-out-container'>
      <div className='where-to-toping'>Where to?</div>
      <div className='where-to-details'>

        {/* Country Dropdown */}
        <div className='form-group'>
          <label htmlFor='country'>Select Country:</label>
            <Select
            id='country'
            value={cities.name}
            onChange={(option) => setCountry(option.value)}
            options={cities.map(city => ({ label: city.name, value: city.name }))} // Create options from the cities array
            styles={customStyles}
            aria-label='Country selection'
          />
          
          {errors.country && <span className='error-message'>Please select a country.</span>}
        </div>

        {/* Date Range Picker */}
        <div className='form-group'>
          <label htmlFor='date-range'>Select Dates:</label>
          <DatePicker
            selected={startDate}
            onChange={(update) => setDates(update)}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            isClearable
            placeholderText="Select check-in and check-out dates"
            id='date-range'
            aria-label='Date range picker'
            className={errors.dates ? 'error' : ''}
          />
          {errors.dates && <span className='error-message'>Please select valid dates.</span>}
        </div>

        {/* Travellers (Adults + Children Dropdown) */}
        <Dropdown className='traveller-dropdown'>
          <Dropdown.Toggle variant='primary' id='travellers-dropdown'>
            {adults} Adults, {children} Children
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className='traveller-counters'>
              {/* Adults Counter */}
              <div className='counter-item'>
                <label>Adults</label>
                <div className='counter-buttons'>
                  <button
                    onClick={() => setAdults(adults > 1 ? adults - 1 : 1)}
                    disabled={adults <= 1}
                    aria-label='Decrease adults count'
                  >
                    -
                  </button>
                  <span>{adults}</span>
                  <button onClick={() => setAdults(adults + 1)} aria-label='Increase adults count'>
                    +
                  </button>
                </div>
              </div>

              {/* Children Counter */}
              <div className='counter-item'>
                <label>Children</label>
                <div className='counter-buttons'>
                  <button
                    onClick={() => handleChildrenChange(children > 0 ? children - 1 : 0)}
                    disabled={children <= 0}
                    aria-label='Decrease children count'
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button onClick={() => handleChildrenChange(children + 1)} aria-label='Increase children count'>
                    +
                  </button>
                </div>
              </div>

              {/* Children Ages Dropdowns */}
              {children > 0 && (
                <div className='children-ages'>
                  <label>Children's Ages</label>
                  {Array.from({ length: children }).map((_, index) => (
                    <div key={index} className='age-group'>
                      <label htmlFor={`age-${index}`}>Age {index + 1}:</label>
                      <select
                        id={`age-${index}`}
                        value={childrenAges[index] || ''}
                        onChange={(e) => handleAgeChange(index, e.target.value)}
                        aria-label={`Age of child ${index + 1}`}
                        className={errors.childrenAges && childrenAges[index] === '' ? 'error' : ''}
                      >
                        <option value=''>Age</option>
                        {Array.from({ length: 17 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                  {errors.childrenAges && <span className='error-message'>Please select ages for all children.</span>}
                </div>
              )}
            </div>
          </Dropdown.Menu>
        </Dropdown>

        {/* Submit Button */}
        <button onClick={handleSubmit} className='submit-button' aria-label='Search button'>
          Search
        </button>
      </div>
    </div>
  );
};
