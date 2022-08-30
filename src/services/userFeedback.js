import axios from "axios";

export const likeFunction = async (videoId) => {
    await axios.put(`/users/like/${videoId}`)
};

export const dislikeFunction = async (videoId) => {
    await axios.put(`/users/dislike/${videoId}`)
};

export const fetchVideoComments = async (videoId) => {
    const res = await axios.get(`/video/comments/${videoId}`);

    return res.data;
};
