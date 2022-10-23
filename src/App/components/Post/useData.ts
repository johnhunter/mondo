import { useQuery } from '@tanstack/react-query';
import { getJson } from '@/api';
import type { PostData } from '@/types';

const fetchPostById = async (id: number) =>
  await getJson<PostData>(`posts/${id}`);

const useData = (postId: number) =>
  useQuery<PostData, Error>(['post', postId], () => fetchPostById(postId), {
    enabled: !!postId,
  });

export default useData;
