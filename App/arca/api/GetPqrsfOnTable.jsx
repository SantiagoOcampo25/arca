import axios from "axios";

export const GetPqrsfOnTable = async () => {
    return axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/neg_dat_pres_pqrsf_index.php`)
        .then((response) => {
        return response.data;
        })
        .catch((error) => {
        console.log(error);
        return [];
        });
    }
