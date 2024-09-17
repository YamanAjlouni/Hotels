import React from 'react'
import { WhereTo } from './components/whereTo/WhereTo'
import SpecialOffer from './pages/specialOffer/SpecialOffer'
import specialOfferData from './data/specialOfferData'
import SuggestedHotels from './pages/suggestedHotels/SuggestedHotels'
import data from './data/data'
import suggestedHotelsdata from './data/suggestedHotelsdata'
import { Intro } from './components/intro/Intro'

export const HomePage = () => {
  return (
    <div>
      <Intro />
      <WhereTo />
      <SpecialOffer offers={specialOfferData} />
      <SuggestedHotels hotels={suggestedHotelsdata} />
    </div>
  )
}
