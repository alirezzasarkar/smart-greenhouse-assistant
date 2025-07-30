import axios from "./axiosInstance";

export const sendCode = (phone) =>
  axios.post("/users/auth/send-code/", { phone });

export const verifyCode = (phone, code) =>
  axios.post("/users/auth/verify-code/", { phone, code });

export const refreshTokenRequest = (refresh) =>
  axios.post("/users/auth/token/refresh/", { refresh });

export const getProfile = () => axios.get("/users/profile/");
export const updateProfile = (data) =>
  axios.put("/users/profile/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const patchProfile = (data) => axios.patch("/users/profile/", data);
