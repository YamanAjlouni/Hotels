import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import SearchResults from '../pages/searchResults/SearchResults';
import { HomePage } from '../HomePage';
import HotelDetails from '../pages/hotelDetails/HotelDetails';
import DetailSpecialOffer from '../pages/detailSpecialOffer/DetailSpecialOffer';
import DetailRoom from '../pages/detailRoom/DetailRoom';

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/:city/hotel/:id" element={<HotelDetails />} />
        <Route path="/offer-details" element={<DetailSpecialOffer />} /> 
        <Route path="/room/:hotelName/:roomName" element={<DetailRoom />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
