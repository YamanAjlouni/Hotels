import supabase from "../config/supabaseClient";

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