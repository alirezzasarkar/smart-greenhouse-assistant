import axios from "./axiosInstance";

// داشبورد مالی
export const getFinancialDashboard = () =>
  axios.get("/subscriptions/financial-dashboard/");

export const generateFinancialReport = () =>
  axios.get("/subscriptions/financial-dashboard/generate-report/");

// پرداخت‌ها
export const getPayments = () => axios.get("/subscriptions/payments/");
export const createPayment = (data) =>
  axios.post("/subscriptions/payments/", data);
export const getPayment = (id) => axios.get(`/subscriptions/payments/${id}/`);
// export const updatePayment = (id, data) =>
//   axios.put(`/subscriptions/payments/${id}/`, data);
// export const patchPayment = (id, data) =>
//   axios.patch(`/subscriptions/payments/${id}/`, data);
// export const deletePayment = (id) =>
//   axios.delete(`/subscriptions/payments/${id}/`);

// پلن‌ها
export const getPlans = () => axios.get("/subscriptions/plans/");
// export const createPlan = (data) => axios.post("/subscriptions/plans/", data);
// export const getPlan = (id) => axios.get(`/subscriptions/plans/${id}/`);
// export const updatePlan = (id, data) =>
//   axios.put(`/subscriptions/plans/${id}/`, data);
// export const patchPlan = (id, data) =>
//   axios.patch(`/subscriptions/plans/${id}/`, data);
// export const deletePlan = (id) => axios.delete(`/subscriptions/plans/${id}/`);

// اشتراک‌ها
export const subscribeToPlan = (plan_id) =>
  axios.post(`/subscriptions/subscribe/${plan_id}/`);
// export const getSubscriptions = () =>
//   axios.get("/subscriptions/subscriptions/");
// export const createSubscription = (data) =>
//   axios.post("/subscriptions/subscriptions/", data);
// export const genericSubscribe = (data) =>
//   axios.post("/subscriptions/subscriptions/subscribe/", data);
// export const getSubscription = (id) =>
//   axios.get(`/subscriptions/subscriptions/${id}/`);
// export const updateSubscription = (id, data) =>
//   axios.put(`/subscriptions/subscriptions/${id}/`, data);
// export const patchSubscription = (id, data) =>
//   axios.patch(`/subscriptions/subscriptions/${id}/`, data);
// export const deleteSubscription = (id) =>
//   axios.delete(`/subscriptions/subscriptions/${id}/`);
// export const cancelSubscription = (id, data) =>
//   axios.post(`/subscriptions/subscriptions/${id}/cancel/`, data);
