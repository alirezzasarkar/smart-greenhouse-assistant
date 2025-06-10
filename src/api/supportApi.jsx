import axios from "./axiosInstance";

export const getSupportRequests = () => axios.get("/support/");
export const createSupportRequest = (data) => axios.post("/support/", data);
export const getSupportRequest = (id) => axios.get(`/support/${id}/`);
export const updateSupportRequest = (id, data) =>
  axios.put(`/support/${id}/`, data);
export const patchSupportRequest = (id, data) =>
  axios.patch(`/support/${id}/`, data);
export const deleteSupportRequest = (id) => axios.delete(`/support/${id}/`);
