import axios from "axios";

const { VITE_BASE_URL, VITE_SET_DELAY_MS } = import.meta.env

const delay = () => new Promise(resolve => setTimeout(resolve, VITE_SET_DELAY_MS));

export const api = axios.create({
  baseURL: VITE_BASE_URL,
})

api.interceptors.request.use(async (config) => {
  await delay()
  return config;
}, (error) => {
  return Promise.reject(error);
});