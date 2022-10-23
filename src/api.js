import ky from 'ky';
import { useQuery } from '@tanstack/react-query';

const prefixUrl = 'https://jsonplaceholder.typicode.com/';

const api = ky.extend({ prefixUrl });

export const fetchPosts = () =>
  useQuery(['posts'], async () => api.get('posts').json());

const fetchPostById = async (id) => await api.get(`posts/${id}`).json();

export const fetchPost = (postId) =>
  useQuery(['post', postId], () => fetchPostById(postId), {
    enabled: !!postId,
  });

export default api;
