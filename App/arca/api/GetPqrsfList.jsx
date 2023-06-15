import axios from 'axios';

export const GetPqrsfList = async () => {
  return axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/pres_neg_dat_admin_pqrsf_show_.php`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return [];
    });
};
