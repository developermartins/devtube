import axios from "axios";

export const login = async (username, password) => {
    const res = await axios.post(`/auth/signin`, {username, password});

    return res.data;
};

export const loginWithGoogle = async (userData) => {
    const res = await axios.post(`/auth/google`, {
        name: userData.user.displayName,
        email: userData.user.email,
        img: userData.user.photoURL,
    });

    return res.data;
}