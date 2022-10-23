import { FC } from 'react';
import classNames from 'classnames';
import { useQueryClient } from '@tanstack/react-query';
import css from './Posts.module.css';
import Info from '../Info';
import Loading from '../Loading';
import useData from './useData';

interface PostsProps {
  setPostId: (id: number | null) => void;
}

const Posts: FC<PostsProps> = ({ setPostId }) => {
  const queryClient = useQueryClient();
  const { status, data = [], error, isFetching } = useData();

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
            {data.map(({ id, title }) => (
              <li key={id}>
                <a
                  href="#"
                  onClick={() => setPostId(id)}
                  className={classNames(css.itemLink, {
                    // We can access the query data here to show bold links for
                    // ones that are cached
                    [css.cached]: queryClient.getQueryData(['post', id]),
                  })}
                >
                  {title}
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
