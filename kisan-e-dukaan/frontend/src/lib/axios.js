import axios from "axios";
import { Backend_API } from "../../Config";

const axiosInstance = axios.create({
  baseURL: import.meta.mode === "development" ? `${Backend_API}/api` : "/api",
  withCredentials: true, // send cookies to the server
});

export default axiosInstance;
