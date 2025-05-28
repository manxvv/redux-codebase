import axios from "axios";
import Urls from "../config/urls";
import { store } from "@/app/store";

const http = axios.create({
  baseURL: Urls.baseURL,
  withCredentials: true
});

http.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.access_token; // <- Access token directly

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Check if data is FormData (multipart/form-data)
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
