import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { deletePostAction, likePostAction, unlikePostAction } from '../redux/actions/postAction';
import { Icon } from '@iconify/react'

const PostCard = ({post, onUpdate}) =>{
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state=>state.login)
  const {_id, createdAt, creator, tags, title, message, likes, picture} = post
  const createdTime = moment(createdAt).fromNow()
  

  const handleUpdatePost=()=>{
    if(onUpdate){
      onUpdate({
        isUpdate: true,
        postToUpdate: post
      })
    }
  }

  const like = (e, id) =>{
    dispatch(likePostAction(id))
    
  }

  const unLike = (e, id)=>{
    dispatch(unlikePostAction(id))
  }

  const deletePostById = (e, id)=>{
    if(window.confirm('Are you sure you want to delete this post')){
      dispatch(deletePostAction(id))
    }
  }
  return (
    <div className="w-80 h-[450px] bg-white shadow-lg rounded-lg border-[1px] overflow-hidden ">
      <div className="w-full h-1/2 relative">
            <div className="w-full h-full absolute bg-black opacity-40"></div>
            <img src={picture} alt="hello" className="object-cover w-full h-full" />
            <div className="absolute w-full h-full top-0 flex px-5 pt-5 justify-between text-white">
                <p className="text-xl flex flex-col">{creator.name}<span className="text-sm">{createdTime}</span></p>
                <button className='h-12'  id='update' onClick={handleUpdatePost}>
                  <svg
                    fill='#ffff' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="24"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" /></svg>
                </button>
            </div>
        </div>



      <div className="p-4 flex flex-col ">
        <p className="text-gray-800 font-light opacity-50">
          {tags.map((tag)=>(<span> #{tag}</span>))}
        </p>
        <p className="text-gray-800 mt-7 text-2xl  ">{title}</p>
        <p className="text-gray-400	 mt-7">{message}</p>



        <div className="flex justify-between w-full mt-4">
          {likes.includes(userInfo && userInfo.user._id) ?
            <button type="submit" onClick={(e) => unLike(e, _id)}>
              <div className="flex items-center text-indigo-500">
                <Icon icon='solar:like-bold' className='text-3xl' />
                <p className='pt-2'>UNLIKE {likes.length}</p>
              </div>
            </button>
          :
          <button type="submit" onClick={(e)=> like(e, _id)}>
            <div className="flex items-center text-indigo-500">
              <Icon icon='solar:like-line-duotone' className='text-3xl' />
              <p className='pt-2'>LIKE {likes.length}</p>
            </div>
          </button>
          }

          <div>
            <button type='submit' onClick={(e)=> deletePostById(e, _id)}
              className="py-3 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
              <svg fill='#3F42F1' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
              <p className='text-indigo-500'>DELETE</p>
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default PostCard;
