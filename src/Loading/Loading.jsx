import React from 'react';
import Info from '../Info/Info';

const Loading = ({ status, children, error }) => {
  switch (status) {
    case 'loading': {
      return <Info transient>Loading</Info>;
    }
    case 'error': {
      const { message } = error || {};
      console.log();
      return <Info error>Error: {message || 'an unknown error occurred'}</Info>;
    }
    case 'success':
    default:
      return children;
  }
};

export default Loading;
