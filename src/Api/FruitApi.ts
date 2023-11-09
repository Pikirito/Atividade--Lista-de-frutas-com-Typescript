import axios from "axios";

export const Api = axios.create({
  baseURL: "https://fruit-fake-api.onrender.com",
  timeout: 2000,
});
