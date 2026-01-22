import axios from "axios";
import { cookies } from "next/headers";

const serverAxios = axios.create({
  baseURL: "https://unamalgamable-li-proterandrously.ngrok-free.dev/menu_service",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en"
  },


});

serverAxios.interceptors.request.use(async (config) => {
  const token = (await cookies()).get("token")?.value;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default serverAxios;
