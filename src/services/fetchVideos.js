import axios from "axios";

export const fetchVideos = async () => {
    const res = await axios.get("/videos/random");

    return res.data;
};