import axios from "axios";

export const updateAccount = async (userId, accountData) => {

    const res = await axios.put(`/users/${userId}`, accountData);

    return res.data;
};