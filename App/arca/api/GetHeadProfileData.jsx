import axios from "axios";

export const GetHeadProfileData = async () => {
    return axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/neg_dat_U_edit_show.php`)
        .then((response) => {
        return response.data;
        })
        .catch((error) => {
        console.log(error);
        return [];
        });
    }