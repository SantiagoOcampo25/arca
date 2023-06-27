import apiInstance from "../api/apiInterceptors/interceptorsAxios";

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

