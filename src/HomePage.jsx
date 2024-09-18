import React, { useEffect } from 'react';
import { WhereTo } from './components/whereTo/WhereTo';
import SpecialOffer from './pages/specialOffer/SpecialOffer';
import specialOfferData from './data/specialOfferData';
import SuggestedHotels from './pages/suggestedHotels/SuggestedHotels';
import suggestedHotelsdata from './data/suggestedHotelsdata';
import { Intro } from './components/intro/Intro';
// import BlogTips from './pages/blogTips/BlogTips'

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Intro />
      <WhereTo />
      <SpecialOffer offers={specialOfferData} />
      <SuggestedHotels hotels={suggestedHotelsdata} />
      {/* <BlogTips /> */}
    </div>
  );
};
