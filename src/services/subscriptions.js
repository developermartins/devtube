import axios from "axios";

export const subscribe = async (userId) => {

    const res = await axios.put(`/users/sub/${userId}`);

};

export const unsubscribe = async (userId) => {

    const res = await axios.put(`/users/unsub/${userId}`);

};
