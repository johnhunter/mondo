import ky from 'ky-universal';

export const API_ROOT = 'https://jsonplaceholder.typicode.com/';

const api = ky.extend({
  prefixUrl: API_ROOT,
  retry: 1, // react-query provides retry already.
});

export const getJson = <R = unknown>(path: string) => api.get(path).json<R>();

export default api;
