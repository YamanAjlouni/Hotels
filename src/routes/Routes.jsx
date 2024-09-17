import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import SearchResults from '../pages/searchResults/SearchResults';
import { HomePage } from '../HomePage';
import HotelDetails from '../pages/hotelDetails/HotelDetails';

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/:city/hotel/:id" element={<HotelDetails />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
