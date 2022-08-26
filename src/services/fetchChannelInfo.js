import axios from "axios";

export const fetchChannelInfo = async (userId) => {

    const res = await axios.get(`/users/find/${userId}`);

    return res.data;
};