import { UseQueryResult } from '@tanstack/react-query';
export type { HttpError } from '@/api';

export type Status = UseQueryResult['status'];

export interface PostData {
  id: number;
  title: string;
  body: string;
}
