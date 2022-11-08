import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : null;

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
