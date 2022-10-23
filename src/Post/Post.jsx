import React from 'react';
import ky from 'ky';
import { fetchPost } from '../api';
import css from './Post.module.css';
import Info from '../Info';
import Loading from '../Loading';

const Post = ({ postId, setPostId }) => {
  const { status, data = {}, error, isFetching } = fetchPost(postId);

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
          <h1 className={css.title}>{data.title}</h1>
          <div className={css.body}>
            <p>{data.body}</p>
          </div>
        </article>
      </Loading>
    </div>
  );
};

export default Post;
