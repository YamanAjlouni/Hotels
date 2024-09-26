// api.js
import supabase from "../config/supabaseClient";


/* /////////////////////////////// City /////////////////////////////// */

export const fetchCitiesAPI = async (page = 1, size = 10) => {
  try {
    let { data: cities, error } = await supabase
      .from('cities')
      .select('*')
      .range((page - 1) * size, page * size - 1); // Pagination logic

    if (error) throw error;
    return cities;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

export const fetchDetailsByCityNameAPI = async (cityName) => {
  try {
    let { data: cityDetails, error } = await supabase
      .from('cities')
      .select('*')
      .ilike('name', `%${cityName}%`);

    if (error) throw error;

    if (cityDetails.length === 0) {
      throw new Error(`No city found with the name: ${cityName}`);
    }

    return cityDetails[0]; // Return the first matching city (or modify if you want to return all)
  } catch (error) {
    console.error(`Error fetching city details for ${cityName}:`, error);
    throw error;
  }
};

/* /////////////////////////////// Hotels /////////////////////////////// */

export const fetchHotelsByCityNameAPI = async (cityName) => {
  try {
    // Step 1: Get the city ID by its name
    let { data: city, error: cityError } = await supabase
      .from('cities')
      .select('id') // Only selecting the ID
      .ilike('name', `%${cityName}%`); // Case-insensitive matching for city name

    if (cityError) throw cityError;

    if (city.length === 0) {
      throw new Error(`No city found with the name: ${cityName}`);
    }

    const cityId = city[0].id; // Get the city ID

    // Step 2: Fetch hotels by city ID
    let { data: hotels, error: hotelError } = await supabase
      .from('hotels')
      .select('*')
      .eq('cities', cityId); // Filter hotels by city_id

    if (hotelError) throw hotelError;

    return hotels; // Return the list of hotels for the city
  } catch (error) {
    console.error(`Error fetching hotels for city ${cityName}:`, error);
    throw error;
  }
};

export const fetchHotelById = async (id) => {
  try {
    // Step 1: Fetch hotel details by hotel ID
    let { data: hotel, error } = await supabase
      .from('hotels')
      .select('*') // Select all columns, or specify the columns you need
      .eq('id', id); // Use the 'eq' function to filter by hotel ID

    if (error) throw error;

    if (!hotel || hotel.length === 0) {
      throw new Error(`No hotel found with ID: ${id}`);
    }

    return hotel[0]; // Return the first (and only) matching hotel
  } catch (error) {
    console.error(`Error fetching hotel with ID ${id}:`, error);
    throw error;
  }
};




/* /////////////////////////////// Rooms /////////////////////////////// */

export const fetchRoomsByHotelIdAPI = async (hotelId) => {
  try {
    // Query the database for rooms by hotel ID
    let { data: rooms, error } = await supabase
      .from('rooms')
      .select('*')
      .eq('hotel_id', hotelId); // Filter rooms by hotel_id

    if (error) throw error;

    if (rooms.length === 0) {
      throw new Error(`No rooms found for hotel with ID: ${hotelId}`);
    }

    return rooms; // Return the list of rooms for the hotel
  } catch (error) {
    console.error(`Error fetching rooms for hotel ${hotelId}:`, error);
    throw error;
  }
};


/* /////////////////////////////// Special Offer /////////////////////////////// */

export const fetchSpecialOfferAPI = async () => {
  try {
    // Query the database for rooms by hotel ID
    let { data: special_offer, error } = await supabase
      .from('special_offer')
      .select('*')

    if (error) throw error;

    if (special_offer.length === 0) {
      throw new Error(`No Special Offer Available`);
    }

    return special_offer; // Return the list of rooms for the hotel
  } catch (error) {
    console.error(`Error fetching Special Offer`, error);
    throw error;
  }
};