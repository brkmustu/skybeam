import axios from "axios";
export const appAxios = axios.create({
  baseURL: "http://localhost:7000/api/",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});
