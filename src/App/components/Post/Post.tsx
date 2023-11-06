import { FC } from 'react';
import css from './Post.module.css';
import Info from '../Info';
import Loading from '../Loading';
import useData from './useData';

interface PostProps {
  postId: number;
  setPostId: (id: number | null) => void;
}

const Post: FC<PostProps> = ({ postId, setPostId }) => {
  const { status, data, error, isFetching } = useData(postId);
  const { title, body } = data ?? {};

  return (
    <div>
      <div>
        <button className={css.backBtn} onClick={() => setPostId(null)}>
          Back
        </button>
      </div>
      <Loading status={status} error={error}>
        <Info transient active={isFetching}>
          Background Updating
        </Info>
        <article>
          <h1 className={css.title}>{title}</h1>
          <div className={css.body}>
            <p>{body}</p>
          </div>
        </article>
      </Loading>
    </div>
  );
};

export default Post;
