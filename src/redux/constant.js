import axios from 'axios';
import supabase from '../config/supabaseClient';

export const errorMessage = 'An unexpected error occurred !!'
const axiosInstance = axios.create({
    baseURL: supabase,
    // timeout: 10000,
});
// axiosInstance.defaults.headers.common['Accept-Language'] = 'ar'; // Replace 'en-US' with your desired language

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            const { status } = error.response;
            switch (status) {
                case 400:
                    console.error('Bad Request');
                    break;
                case 401:
                    console.error('Unauthorized');
                    window.location.href = '/'
                    break;
                case 403:
                    console.error('Forbidden');
                    break;
                case 404:
                    console.error('Not Found');
                    break;
                case 500:
                    console.error('Internal Server Error');
                    break;
                default:
                    console.error('An unexpected error occurred');
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
