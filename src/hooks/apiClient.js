import axios from "axios";
import Cookies from "js-cookie";

const token = JSON?.parse(Cookies.get("token"));

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
});

apiClient.interceptors.request.use(
  function (config) {
    if (!config.headers.authorization) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default apiClient;
