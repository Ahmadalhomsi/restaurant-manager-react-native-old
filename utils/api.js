import axios from "axios";
import { IPCONFIG, PORT } from "@env";

const SERVER_URL = `http://${IPCONFIG}:${PORT}`;

const api = axios.create({
  baseURL: `${SERVER_URL}`,
  timeout: 5000,
});

export default api;
