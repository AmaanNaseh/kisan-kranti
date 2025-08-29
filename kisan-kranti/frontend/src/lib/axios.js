import axios from "axios";
import { E_Dukaan_Backend_API } from "../../Config";

const axiosInstance = axios.create({
  baseURL:
    import.meta.mode === "development" ? `${E_Dukaan_Backend_API}/api` : "/api",
  withCredentials: true, // send cookies to the server
});

export default axiosInstance;
