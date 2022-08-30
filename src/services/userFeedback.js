import axios from "axios";

export const likeFunction = async (videoId) => {
    await axios.put(`/api/users/like/${videoId}`)
};

export const dislikeFunction = async (videoId) => {
    await axios.put(`/api/users/dislike/${videoId}`)
};
