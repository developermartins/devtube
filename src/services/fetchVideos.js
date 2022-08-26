import axios from "axios";

export const fetchVideos = async (type) => {
    const res = await axios.get(`/videos/${type}`);

    return res.data;
};