import axios from 'axios';

export const logoutUser = async (token) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/logout.php`, null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;

    } catch (error) {
        throw error.response.data;
    }
};
