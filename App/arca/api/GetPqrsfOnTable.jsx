import axios from "axios";

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

apiInstance.interceptors.request.use(
    (config) => {
        console.log('Interceptor de la solicitud - Antes de la solicitud GET PQRSF on table', config)
        return config;
    },
    (error) => {
        console.log('Error en el interceptor de la solicitud', error);
        return Promise.reject(error)
    }
);

export const GetPqrsfOnTable = async () => {
    return apiInstance.get('/neg_dat_pres_pqrsf_index.php')
        .then((response) => {
        console.log('Interceptor de respuesta - Respuesta de la solicitud GET PQRSF on table', response);
        return response.data;
        })
        .catch((error) => {
        console.log('Error en el interceptor de la respuesta de la solicitud GET PQRSF on table', error);
        return [];
        });
    }
