import axios from "./axiosInstance";

export const getFertilizerDetections = () => axios.get("/fertilizer/detect/");

export const createFertilizerDetection = (data) =>
  // data = {plant_name:""  answers:[]}
  axios.post("/fertilizer/detect/", data);

export const getFertilizerHistory = () => axios.get("/fertilizer/history/");
