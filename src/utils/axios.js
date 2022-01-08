import axios from "axios";

const axiosApiIntaces = axios.create({
  baseURL: process.env.REACT_APP_API,
});

axiosApiIntaces.interceptors.request.use(
  function (config) {
    // ======
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    // ======

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiIntaces.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403) {
      alert("ada kesalahan token");
      localStorage.clear();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosApiIntaces;
