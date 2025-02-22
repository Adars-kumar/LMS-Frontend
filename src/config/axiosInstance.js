import axios from "axios";

const BASE_URL = "http://localhost:5500/api/v1";
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.timeout = 10000;

export default axiosInstance;