import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-web-app-mern.vercel.app/api",
  withCredentials: true,
});