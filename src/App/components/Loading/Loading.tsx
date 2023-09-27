import { FC, ReactNode } from 'react';
import Info from '../Info';
import type { Status, HttpError } from '@/types';

interface LoadingProps {
  status: Status;
  error: HttpError | null;
  children: ReactNode;
}

const Loading: FC<LoadingProps> = ({ status, error, children }) => {
  switch (status) {
    case 'success':
      return <>{children}</>;
    case 'loading': {
      return <Info transient>Loading</Info>;
    }
    case 'error':
    default: {
      return (
        <Info error>
          Error: {error?.message || 'an unknown error occurred'}
        </Info>
      );
    }
  }
};

export default Loading;
