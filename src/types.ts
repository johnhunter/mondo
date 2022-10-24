import { UseQueryResult } from '@tanstack/react-query';

export type Status = UseQueryResult['status'];

export interface PostData {
  id: number;
  title: string;
  body: string;
}

export type Error = {
  message: string;
};
