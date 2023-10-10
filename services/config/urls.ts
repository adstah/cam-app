export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://prod-url"
    : "http://localhost:3000/api";

export const ENDPOINTS = {
  USER: {
    AUTH: {
      LOGIN: "/user/auth/login",
      LOGOUT: "/user/auth/logout",
    },
  },
};
