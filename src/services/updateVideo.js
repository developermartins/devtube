import axios from "axios";

export const updateVideo = async (videoId, postData) => {

    const res = await axios.put(`/videos/${videoId}`, postData);

    return res;
};