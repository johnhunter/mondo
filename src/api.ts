import ky from 'ky-universal';
import { useQuery } from '@tanstack/react-query';
import type { PostData, Error } from './types';

export const API_ROOT = 'https://jsonplaceholder.typicode.com/';

const api = ky.extend({ prefixUrl: API_ROOT });

export const fetchPosts = () =>
  useQuery(['posts'], async () => api.get('posts').json<PostData[]>());

const fetchPostById = async (id: number) =>
  await api.get(`posts/${id}`).json<PostData>();

export const fetchPost = (postId: number) =>
  useQuery(['post', postId], () => fetchPostById(postId), {
    enabled: !!postId,
  });

export default api;
