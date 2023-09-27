import { useQuery } from '@tanstack/react-query';
import type { PostData } from '@/types';
import { getJson, HttpError } from '@/api';

const useData = () =>
  useQuery<PostData[], HttpError, PostData[]>(['posts'], async () =>
    getJson<PostData[]>('posts'),
  );

export default useData;
