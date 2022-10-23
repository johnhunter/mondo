import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import css from './App.module.css';
import Posts from './components/Posts';
import Post from './components/Post';

const queryClient = new QueryClient();

const App = () => {
  const [postId, setPostId] = useState<number | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={css.container}>
        {postId !== null ? (
          <Post postId={postId} setPostId={setPostId} />
        ) : (
          <Posts setPostId={setPostId} />
        )}
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
