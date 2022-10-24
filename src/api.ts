import ky from 'ky';
import { useQuery } from '@tanstack/react-query';
import type { PostData, Error } from './types';

const prefixUrl = 'https://jsonplaceholder.typicode.com/';

// TODO: how to mock in tests - look into serice-worker mocking

const api = ky.extend({ prefixUrl });

export const fetchPosts = () =>
  useQuery(['posts'], async () => api.get('posts').json<PostData[]>());

const fetchPostById = async (id: number) =>
  await api.get(`posts/${id}`).json<PostData>();

export const fetchPost = (postId: number) =>
  useQuery(['post', postId], () => fetchPostById(postId), {
    enabled: !!postId,
  });

export default api;
