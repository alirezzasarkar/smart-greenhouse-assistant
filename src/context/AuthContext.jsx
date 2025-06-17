import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "../api/axiosInstance";
import { sendCode, refreshTokenRequest, getProfile } from "../api/usersApi";
import {
  getLocalStorage,
  setLocalStorage,
} from "../utils/helpers/localStorage";
import { isTokenExpired } from "../utils/helpers/isTokenExpired";

const AuthContext = createContext();

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

const extractErrorMessage = (error) => {
  if (error.response?.data?.detail) return error.response.data.detail;
  if (typeof error.response?.data === "string") return error.response.data;
  return "خطایی رخ داده است";
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstCustomerVisit, setFirstCustomerVisit] = useState(false);

  const saveTokens = (access, refresh) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, access);
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
    axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
  };

  const clearTokens = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    delete axios.defaults.headers.common["Authorization"];
  };

  const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
  const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);

  const logout = () => {
    clearTokens();
    setUser(null);
    setIsAuthenticated(false);
    setError(null);
  };

  const refreshToken = async () => {
    try {
      const refresh = getRefreshToken();
      if (!refresh || isTokenExpired(refresh)) {
        throw new Error("توکن رفرش منقضی شده است");
      }
      const { data } = await refreshTokenRequest(refresh);
      saveTokens(data.access, data.refresh);
      return data.access;
    } catch (err) {
      logout();
      throw err;
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const access = getAccessToken();
      const refresh = getRefreshToken();

      const isFirst = getLocalStorage("firstVisit");
      setFirstCustomerVisit(!!isFirst);

      if (!access && !refresh) {
        clearTokens();
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        if (!access || isTokenExpired(access)) {
          if (refresh && !isTokenExpired(refresh)) {
            await refreshToken();
          } else {
            throw new Error("هیچ توکن معتبری برای ورود وجود ندارد");
          }
        } else {
          axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
        }

        await fetchProfile();
      } catch (err) {
        clearTokens();
        setIsAuthenticated(false);
        setError(extractErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const fetchProfile = useCallback(async () => {
    try {
      const isFirstVisit = getLocalStorage("firstVisit");
      setFirstCustomerVisit(!!isFirstVisit);
      const res = await getProfile();
      setUser(res.data);
      setIsAuthenticated(true);
      setError(null);
    } catch (err) {
      setUser(null);
      setIsAuthenticated(false);
      setError(extractErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSendCode = async (phone_number) => {
    try {
      setLoading(true);
      await sendCode(phone_number);
      setError(null);
    } catch (err) {
      setError(extractErrorMessage(err));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleSetFirstVisit = () => {
    setLocalStorage("firstVisit", false);
    setFirstCustomerVisit(false);
  };

  const verifyCode = async (phone_number, code) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/auth/verify-code/", {
        phone: phone_number,
        code,
      });
      if (data.tokens.access && data.tokens.refresh) {
        saveTokens(data.tokens.access, data.tokens.refresh);
        await fetchProfile();
        setError(null);
      } else {
        throw new Error("توکن دریافت نشد");
      }
    } catch (err) {
      setError(extractErrorMessage(err));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const access = getAccessToken();
      const refresh = getRefreshToken();

      if (!access && !refresh) {
        setIsAuthenticated(false);
        setLoading(false);
        const isFirst = getLocalStorage("firstVisit");
        setFirstCustomerVisit(!!isFirst);
        return;
      }

      try {
        if (access) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
          await fetchProfile();
        } else if (refresh) {
          const newAccess = await refreshToken();
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newAccess}`;
          await fetchProfile();
        }
      } catch (err) {
        clearTokens();
        setIsAuthenticated(false);
        setLoading(false);
      }
    };

    initializeAuth();
  }, [fetchProfile]);

  const updateUserDetails = (userData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        isAuthenticated,
        handleSendCode,
        verifyCode,
        refreshToken,
        logout,
        firstCustomerVisit,
        handleSetFirstVisit,
        updateUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
