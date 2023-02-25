import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : null;

const apiClient = axios.create({
  // baseURL: "https://rsquare-itsproali.herokuapp.com",
  baseURL: "https://rsquare-server.vercel.app",
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
