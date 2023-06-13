import axios from 'axios';

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

apiInstance.interceptors.request.use(
  (config) => {
    console.log('Interceptor de solicitud - Antes de la solicitud GET PQRSF on dashboard:', config);
    return config;
  },
  (error) => {
    console.error('Error en el interceptor de solicitud:', error);
    return Promise.reject(error);
  }
);

export const GetPqrsfList = async () => {
  return apiInstance.get('/pres_neg_dat_admin_pqrsf_show_.php')
    .then(response => {
      console.log('Interceptor de respuesta - Respuesta de la solicitud GET PQRSF on dashboard:', response);
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return [];
    });
};

