import React, { useEffect, useState } from 'react';
import { IPost } from './postTypes';
import { getPosts } from './PostService';
import PostItem from './PostItem';
import './posts.css';
import { useParams } from 'react-router-dom';
import Loader from '../UI/Loader';

const Posts = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const { page } = useParams();

  useEffect(() => {
    setIsFetching(true);
    getPosts(page).then((data) => {
      setPosts(data);
      setIsFetching(false);
    });
  }, [page]);
  if (isFetching) {
    return <Loader />;
  }
  return (
    <div className="posts-wrapper">
      {posts.map((post) => (
        <PostItem key={post.id} postData={post} />
      ))}
    </div>
  );
};

export default Posts;
