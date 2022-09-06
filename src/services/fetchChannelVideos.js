import axios from "axios";

export const fetchChannelVideos = async (userId) => {

    const res = await axios.get(`/videos/channel/${userId}`);

    return res.data;
};