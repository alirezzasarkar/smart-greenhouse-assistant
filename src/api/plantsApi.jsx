import axios from "./axiosInstance";

export const detectPlant = (formData) =>
  axios.post("/plants/detect/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getPlantHistory = () => axios.get("/plants/history/");
