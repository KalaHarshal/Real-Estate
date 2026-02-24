import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true, // CRITICAL: This allows cookies (JWT) to be sent back and forth
});