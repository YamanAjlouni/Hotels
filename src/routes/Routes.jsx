import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import { WhereTo } from '../components/whereTo/WhereTo';
import SearchResults from '../pages/searchResults/SearchResults';
import data from '../data/data'; // Import your data

const AppRoutes = () => {
  // Example state for selectedCity and filters
  const selectedCity = 'Damascus'; // This should come from your actual state management
  const filters = {}; // Add your actual filter logic here

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<WhereTo />} />
        <Route 
          path="/search-results" 
          element={<SearchResults cityData={data} selectedCity={selectedCity} filters={filters} />} 
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
