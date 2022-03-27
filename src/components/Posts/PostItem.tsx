import React, { FC } from 'react';
import { IPost } from './postTypes';

interface PostItemInterface {
  postData: IPost;
}

const PostItem: FC<PostItemInterface> = ({ postData }) => {
  return (
    <div className="post-item">
      <div>
        {postData.id} {postData.title}
      </div>
      <div>{postData.body}</div>
    </div>
  );
};

export default PostItem;
