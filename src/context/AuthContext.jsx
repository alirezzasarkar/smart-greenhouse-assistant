// // src/context/AuthContext.js
// import React, { createContext, useState, useEffect, useCallback } from "react";
// import axios from "../api/axiosInstance";
// import { sendCode, refreshTokenRequest, getProfile } from "../api/usersApi";

// const AuthContext = createContext();

// const ACCESS_TOKEN_KEY = "access_token";
// const REFRESH_TOKEN_KEY = "refresh_token";

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // profile details
//   const [loading, setLoading] = useState(false); // loading
//   const [error, setError] = useState(null); // errors
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // save token in localStorage
//   const saveTokens = (access, refresh) => {
//     localStorage.setItem(ACCESS_TOKEN_KEY, access);
//     localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
//   };

//   // delete token
//   const clearTokens = () => {
//     localStorage.removeItem(ACCESS_TOKEN_KEY);
//     localStorage.removeItem(REFRESH_TOKEN_KEY);
//   };

//   // get tokens
//   const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
//   const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);

//   // Set up an interceptor for axios to send tokens and auto refresh
//   useEffect(() => {
//     // request interceptor
//     const requestInterceptor = axios.interceptors.request.use((config) => {
//       const token = getAccessToken();
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     });

//     // response interceptor
//     const responseInterceptor = axios.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         const originalRequest = error.config;
//         if (error.response?.status === 401 && !originalRequest._retry) {
//           originalRequest._retry = true;
//           try {
//             const refreshToken = getRefreshToken();
//             if (!refreshToken) {
//               logout();
//               return Promise.reject(error);
//             }
//             const { data } = await refreshTokenRequest(refreshToken);
//             saveTokens(data.access, data.refresh);
//             axios.defaults.headers.common[
//               "Authorization"
//             ] = `Bearer ${data.access}`;
//             originalRequest.headers["Authorization"] = `Bearer ${data.access}`;
//             return axios(originalRequest);
//           } catch (refreshError) {
//             logout();
//             return Promise.reject(refreshError);
//           }
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       axios.interceptors.request.eject(requestInterceptor);
//       axios.interceptors.response.eject(responseInterceptor);
//     };
//   }, []);

//   // get profile information from server
//   const fetchProfile = useCallback(async () => {
//     try {
//       setLoading(true);
//       const res = await getProfile();
//       setUser(res.data);
//       setIsAuthenticated(true);
//       setError(null);
//     } catch (err) {
//       setUser(null);
//       setIsAuthenticated(false);
//       setError(err.response?.data || "خطا در دریافت پروفایل");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // send phoneNumber for get verification code
//   const handleSendCode = async (phone_number) => {
//     try {
//       setLoading(true);
//       await sendCode(phone_number);
//       setError(null);
//     } catch (err) {
//       setError(err.response?.data || "خطا در ارسال کد");
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // تایید کد و دریافت توکن‌ها
//   const verifyCode = async (phone_number, code) => {
//     try {
//       setLoading(true);
//       const { data } = await axios.post("/users/auth/verify-code/", {
//         phone_number,
//         code,
//       });
//       if (data.access && data.refresh) {
//         saveTokens(data.access, data.refresh);
//         await fetchProfile();
//         setError(null);
//       } else {
//         throw new Error("توکن دریافت نشد");
//       }
//     } catch (err) {
//       setError(err.response?.data || "کد تایید اشتباه است");
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Refresh the token manually
//   const refreshToken = async () => {
//     try {
//       const refresh = getRefreshToken();
//       if (!refresh) throw new Error("توکن رفرش موجود نیست");
//       const { data } = await refreshTokenRequest(refresh);
//       saveTokens(data.access, data.refresh);
//       return data.access;
//     } catch (err) {
//       logout();
//       throw err;
//     }
//   };

//   // exit
//   const logout = () => {
//     clearTokens();
//     setUser(null);
//     setIsAuthenticated(false);
//     setError(null);
//   };

//   // On initial app load, get the profile if we have a token
//   useEffect(() => {
//     if (getAccessToken()) {
//       fetchProfile();
//     }
//   }, [fetchProfile]);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         error,
//         isAuthenticated,
//         handleSendCode,
//         verifyCode,
//         refreshToken,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "../api/axiosInstance";
import { sendCode, refreshTokenRequest, getProfile } from "../api/usersApi";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  // response interceptor
  useEffect(() => {
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const refreshToken = getRefreshToken();
            if (!refreshToken) {
              logout();
              return Promise.reject(error);
            }
            const { data } = await refreshTokenRequest(refreshToken);
            saveTokens(data.access, data.refresh);
            originalRequest.headers["Authorization"] = `Bearer ${data.access}`;
            return axios(originalRequest);
          } catch (refreshError) {
            logout();
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  // get profile information from server
  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
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

  // send phoneNumber for get verification code
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

  // confirm code
  const verifyCode = async (phone_number, code) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/auth/verify-code/", {
        phone_number,
        code,
      });
      if (data.access && data.refresh) {
        saveTokens(data.access, data.refresh);
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

  // Refresh the token manually
  const refreshToken = async () => {
    try {
      const refresh = getRefreshToken();
      if (!refresh) throw new Error("توکن رفرش موجود نیست");
      const { data } = await refreshTokenRequest(refresh);
      saveTokens(data.access, data.refresh);
      return data.access;
    } catch (err) {
      logout();
      throw err;
    }
  };

  // exit
  const logout = () => {
    clearTokens();
    setUser(null);
    setIsAuthenticated(false);
    setError(null);
  };

  // On initial app load, get the profile if we have a token
  useEffect(() => {
    const access = getAccessToken();
    if (access) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
      fetchProfile();
    }
  }, [fetchProfile]);

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
