import axios from "axios";

export const updateAccount = async (userId, accountData) => {

    const res = await axios.put(`/users/${userId}`, accountData);

    return res;
};

export const deleteAccount = async (userId) => {

    const res = await axios.delete(`/users/${userId}`);

    return res;
};