import axios from "axios";

export const deleteVideo = async (videoId) => {

    const res = await axios.delete(`/videos/${videoId}`);

    return res;
};