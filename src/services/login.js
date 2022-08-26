import axios from "axios";

export const login = async (username, password) => {
    const res = await axios.post(`/auth/signin`, {username, password});

    return res.data;
};
