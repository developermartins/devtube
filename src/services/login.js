import axios from "axios";

export const login = async (email, password) => {
    const res = await axios.post(`/auth/signin`, {email, password});

    return res.data;
};

export const signup = async (email, username, password) => {
    const res = await axios.post(`/auth/signup`, {email, username, password});

    return res;
};

export const loginWithGoogle = async (userData) => {
    const res = await axios.post(`/auth/google`, {
        name: userData.user.displayName,
        email: userData.user.email,
        img: userData.user.photoURL,
    });

    return res.data;
}