import axios from "axios";
import { E_Dukaan_Backend_API } from "../Config/Config";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? `${E_Dukaan_Backend_API}/api`
      : "/api",
  withCredentials: true, // <--- send cookies!
});

export default axiosInstance;
