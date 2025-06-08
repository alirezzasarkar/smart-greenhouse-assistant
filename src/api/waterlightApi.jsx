import axios from "./axiosInstance";

export const getWaterlightDetections = () =>
  axios.get("/waterlight/waterlight/detect/");

export const createWaterlightDetection = (data) =>
  axios.post("/waterlight/waterlight/detect/", data);

export const getWaterlightHistory = () =>
  axios.get("/waterlight/waterlight/history/");
