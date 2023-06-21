import { config } from '$lib/config';
import axios from 'axios';

export const client = axios.create({
  baseURL: config.backendUrl,
  withCredentials: true,
});
