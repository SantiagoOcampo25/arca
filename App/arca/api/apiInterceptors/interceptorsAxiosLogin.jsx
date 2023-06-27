import axios from 'axios';
import { Navigate } from 'react-router-dom';

const apiInstanceLogin = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

apiInstanceLogin.interceptors.request.use(
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

apiInstanceLogin.interceptors.response.use(
  (response) => {
    console.log('Intercepted response:', response);
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('jwtToken');
      console.log('Error:', error.response);
      <Navigate to="/Login" replace={true} />
    }
    return Promise.reject(error.response.data);
  }
);

export default apiInstanceLogin;