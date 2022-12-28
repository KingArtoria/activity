import axios from 'axios';
const service = axios.create({
  baseURL: 'http://appv5.bdhuoke.com/app_v5',
  timeout: 10000,
});
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.resolve(error.response);
  },
);
export default service;