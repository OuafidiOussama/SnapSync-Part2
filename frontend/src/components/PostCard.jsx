import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment'
import { Like, deletePost} from '../redux/actions/posts';

const PostCard = ({post}) =>{
  const dispatch = useDispatch();
  const {_id, createdAt, creator, tags, title, message, likes, picture} = post
  const createdTime = moment(createdAt).fromNow()

  const [likeCount, setLikeCount] = useState(likes);

  const sendLike = async(e)=>{
    e.preventDefault()
    dispatch(Like({id: _id}))
    .then((res)=>{
      setLikeCount(res)
    })
    .catch(err=>console.error(err))
  }

  const deleteHandler = async (e) => {
    e.preventDefault();
    dispatch(deletePost(post._id))
    };
  return (
    <div className="w-80 h-[450px] bg-white shadow-lg rounded-lg border-[1px] overflow-hidden ">
      <div className="w-full h-1/2 relative">
            <div className="w-full h-full absolute bg-black opacity-40"></div>
            <img src={picture} alt="hello" className="object-cover w-full h-full" />
            <div className="absolute w-full h-full top-0 flex px-5 pt-5 justify-between text-white">
                <p className="text-xl flex flex-col">{creator}<span className="text-sm">{createdTime}</span></p>
                <button className='h-12'  id='update'>
                  <svg
                    fill='#ffff' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="24"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" /></svg>
                </button>
            </div>
        </div>



      <div className="p-4 flex flex-col ">
        <p className="text-gray-800 font-light ">
          {tags}
        </p>
        <p className="text-gray-800 mt-7 text-2xl  ">{title}</p>
        <p className="text-gray-400	 mt-7">{message}</p>



        <div className="flex justify-between w-full mt-4">
          <form onSubmit={sendLike}>
            <button type="submit">
              <div className="flex items-center text-gray-500">
                <svg fill='#3F42F1' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" /></svg>
                <p className='text-indigo-500' id={_id}>LIKE {likeCount}</p>
              </div>
            </button>
          </form>

          <div>
            <form onSubmit={deleteHandler}>
              <button type='submit'
                className="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
                <svg fill='#3F42F1' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                <p className='text-indigo-500' id={_id}>DELETE</p>
              </button>
            </form>
          </div>


        </div>
      </div>
    </div>
  );
};

export default PostCard;
