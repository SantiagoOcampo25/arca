import axios from 'axios';
import { Navigate } from 'react-router-dom';

const apiInstance = axios.create({
  URL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('jwtToken');
      <Navigate to="/Login" replace={true} />
    }
    return Promise.reject(error.response.data);
  }
);

export const LoginUser = async (formData) => {
  return apiInstance.post('/data.php', formData)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
