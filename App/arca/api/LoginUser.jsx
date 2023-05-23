import axios from 'axios';

export const LoginUser = async (formData) => {
      return axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/data.php`, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => {
          response.data
        })
        .catch((error) => {
          throw error.response.data;
        });
};