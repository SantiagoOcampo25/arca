import apiInstance from "../api/apiInterceptors/interceptorsAxios";

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
