import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token) => {
  try {
    const { exp } = jwtDecode(token);
    if (!exp) return true;
    const now = Date.now() / 1000; // seconds
    return exp < now;
  } catch {
    return true;
  }
};
