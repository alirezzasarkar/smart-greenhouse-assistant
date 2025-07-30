// src/api/pestsApi.js
import axios from "./axiosInstance";

export const detectPest = (formData) =>
  axios.post("/pests/detect", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getPestInitList = () => axios.get("/pests/detect/init");

export const getPestHistory = () => axios.get("/pests/history");
