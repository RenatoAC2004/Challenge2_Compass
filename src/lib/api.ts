import axios from "axios";

const delayInMs = import.meta.env.VITE_SET_DELAY_MS

const delay = () => new Promise(resolve => setTimeout(resolve, delayInMs));

export const api = axios.create({
  baseURL: 'http://localhost:3000/plants',
})

api.interceptors.request.use(async (config) => {
  await delay()
  return config;
}, (error) => {
  return Promise.reject(error);
});