import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // Adjust the base URL as needed
});

export default axiosInstance;
