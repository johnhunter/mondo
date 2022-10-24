import { FC, ReactNode } from 'react';
import Info from '../Info';
import type { Status, Error } from '@/types';

interface LoadingProps {
  status: Status;
  error?: Error;
  children: ReactNode;
}

const Loading: FC<LoadingProps> = ({ status, error, children }) => {
  switch (status) {
    case 'loading': {
      return <Info transient>Loading</Info>;
    }
    case 'error': {
      return (
        <Info error>
          Error: {error?.message || 'an unknown error occurred'}
        </Info>
      );
    }
    case 'success':
    default:
      return <>{children}</>;
  }
};

export default Loading;
