import axios from "axios";

const apiUrl = process.env.EXPO_PUBLIC_POKE_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
  timeout: 2000,
});
