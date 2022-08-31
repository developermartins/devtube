import axios from "axios";

export const postVideos = async (postData) => {
    const res = await axios.post(`/videos/`, postData);

    return res.status;
};