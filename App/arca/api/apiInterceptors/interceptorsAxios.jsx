import axios from "axios";

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

apiInstance.interceptors.request.use(
    (config) => {
        console.log('Interceptor de la solicitud - Antes de la solicitud', config)
        return config;
    },
    (error) => {
        console.log('Error en el interceptor de la solicitud', error);
        return Promise.reject(error)
    }
);

export default apiInstance;