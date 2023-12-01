import React, {useEffect} from 'react';
import PostCard from './PostCard';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from '../redux/actions/posts';

export const PostContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <div className="w-9/12 flex gap-5 flex-wrap">
      {
        posts[0]?.map(post=> <PostCard post={post} key={post._id}/>)
      }
    </div>
  );  
}
