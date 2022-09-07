import axios from "axios";

export const postComment = async (comment) => {

    const res = await axios.post(`/video/comments/`, comment);

    return res;
};