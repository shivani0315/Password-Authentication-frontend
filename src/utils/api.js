import axios from 'axios'; 
import config from './config'; // Adjust the path if needed

const API_URL = config.apiBaseUrl; 

export const requestPasswordReset = (email) => {
    return axios.post(`${API_URL}/forgot-password`, { email });
};

export const resetPassword = (token, password) => {
    return axios.post(`${API_URL}/reset-password`, { token, password });
};
