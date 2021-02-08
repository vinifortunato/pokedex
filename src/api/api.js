import axios from 'axios';
import config from '@src/config';

const instance = axios.create({
  baseURL: config.baseURL,
  timeout: config.timeout,
});

const get = (url) => instance.get(url).then((data) => data).catch(() => null);

const getAll = (urls) => Promise.all(urls.map((url) => get(url)));

const api = {
  get,
  getAll,
  instance,
};

export default api;
