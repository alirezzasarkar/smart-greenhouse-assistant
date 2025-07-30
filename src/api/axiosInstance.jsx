import axios from "axios";
import { isTokenExpired } from "../utils/helpers/isTokenExpired";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// 👉 درخواست‌ها: افزودن access_token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 👉 پاسخ‌ها: بررسی انقضای access_token و بروزرسانی خودکار
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // جلوگیری از حلقه بی‌پایان
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refresh = localStorage.getItem("refresh_token");
      if (!refresh || isTokenExpired(refresh)) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        // درخواست دریافت توکن جدید
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/users/auth/refresh-token/`,
          { refresh }
        );

        const { access, refresh: newRefresh } = response.data;

        // ذخیره توکن‌ها
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", newRefresh);

        // افزودن توکن جدید به درخواست قبلی و تکرار آن
        originalRequest.headers["Authorization"] = `Bearer ${access}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
