import apiInstance from "../api/apiInterceptors/interceptorsAxios";

export const GetHeadProfileData = async () => {
    return apiInstance.get('/neg_dat_U_edit_show.php')
        .then((response) => {
            console.log('Interceptor de respuesta - Respuesta de la solicitud GET on profile', response);
            return response.data;
        })
        .catch((error) => {
            console.log('Error en el interceptor de la respuesta de la solicitud GET on profile', error);
            return [];
        });
}