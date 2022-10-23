import React from 'react';
import classNames from 'classnames';
import ky from 'ky';
import { useQueryClient } from '@tanstack/react-query';
import { fetchPosts } from '../api';
import css from './Posts.module.css';
import Info from '../Info';
import Loading from '../Loading';

const Posts = ({ setPostId }) => {
  const queryClient = useQueryClient();
  const { status, data = [], error, isFetching } = fetchPosts();

  return (
    <div>
      <header>
        <h1>Posts</h1>
      </header>
      <main>
        <Loading status={status} error={error}>
          <Info transient active={isFetching}>
            Background Updating
          </Info>
          <ul className={css.list}>
            {data.map((post) => (
              <li key={post.id}>
                <a
                  href="#"
                  onClick={() => setPostId(post.id)}
                  className={classNames(
                    css.itemLink,
                    // We can access the query data here to show bold links for
                    // ones that are cached
                    queryClient.getQueryData(['post', post.id]) && css.cached
                  )}
                >
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </Loading>
      </main>
    </div>
  );
};

export default Posts;
