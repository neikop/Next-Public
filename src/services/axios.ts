import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_URL } from 'env';

const beforeRequest = (config: InternalAxiosRequestConfig) => {
  try {
    if (config.data instanceof FormData) {
      Object.assign(config.headers as any, { 'Content-Type': 'multipart/form-data' });
    }
  } catch {}
  return config;
};

const onResponse = ({ data }: AxiosResponse) => {
  return data.data;
};

const onError = async (error: AxiosError) => {
  const { response } = error;
  if (response) {
  }
  return Promise.reject(error);
};

const client = axios.create({ baseURL: API_URL });
client.interceptors.request.use(beforeRequest);
client.interceptors.response.use(onResponse, onError);

export { client };
