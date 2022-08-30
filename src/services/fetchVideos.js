import axios from "axios";

export const fetchVideos = async (type) => {
    const res = await axios.get(`/videos/${type}`);

    return res.data;
};

export const fetchVideoById = async (id) => {
    const res = await axios.get(`/videos/find/${id}`);

    return res.data;
};

