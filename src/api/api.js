import axios from 'axios';
import config from '@src/config';

const instance = axios.create({
  baseURL: config.baseURL,
  timeout: config.timeout,
});

const get = (url) => instance.get(url);

const api = {
  instance,
  get,
};

export default api;
