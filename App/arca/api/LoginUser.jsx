import apiInstanceLogin from "../api/apiInterceptors/interceptorsAxiosLogin";

export const LoginUser = async (formData) => {
  return apiInstanceLogin.post('/data.php', formData)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
