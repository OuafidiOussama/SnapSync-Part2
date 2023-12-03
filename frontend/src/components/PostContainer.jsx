import React, {useEffect} from 'react';
import PostCard from './PostCard';
import SkeletonCard from './atoms/SkeletonCard';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPostsAction } from '../redux/actions/postAction';

export const PostContainer = ({onUpdate}) => {
  const dispatch = useDispatch()
  const {payload, loading} = useSelector((state) => state.getAllPosts)
  useEffect(() => {
    dispatch(getAllPostsAction());
  }, [dispatch]);
  return (
    <div className="w-9/12 flex gap-5 flex-wrap">
      { payload ? loading ? <SkeletonCard /> : payload.posts.map(post=> <PostCard post={post} key={post._id} onUpdate={onUpdate}/>) : <SkeletonCard />}
    </div>
  );  
}
