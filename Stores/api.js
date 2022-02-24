import axios from "axios";

export const baseURL = "http://localhost:8090";
const api = axios.create({ baseURL: "http://localhost:8090/api" });

export default api;
