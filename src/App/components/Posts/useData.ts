import { useQuery } from '@tanstack/react-query';
import type { PostData } from '@/types';
import { getJson } from '@/api';

const useData = () =>
  useQuery<PostData[], Error>(['posts'], async () =>
    getJson<PostData[]>('posts'),
  );

export default useData;
