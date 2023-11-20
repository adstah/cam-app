export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://prod-url"
    : "http://localhost:3000/api";

export const ENDPOINTS = {
  USER: {
    AUTH: {
      LOGIN: `${SERVER_URL}/user/auth`,
      LOGOUT: `${SERVER_URL}/user/auth/logout`,
    },
  },
  CAMERAS: {
    GET_CAM: `${SERVER_URL}/cameras`,
  },
};

export const EDGE_ENDPOINTS = {
  VIDEO: "/video-feed",
};
