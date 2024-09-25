// api.js
import supabase from './supabaseClient';

export const fetchCities = async () => {
  try {


    let { data: cities, error } = await supabase
      .from('cities')
      .select('*')



    if (error) throw error;
    console.log(cities)
    return cities;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};

export const fetchCityById = async (id) => {
  if (!id) {
    throw new Error('City ID is required');
  }

  try {
    const { data, error } = await supabase
      .from('cities')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching city:', error);
      throw error;
    }

    console.log('City data:', data); // Debugging line
    return data;
  } catch (error) {
    console.error('Error in fetchCityById:', error);
    throw error;
  }
};