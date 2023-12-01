import {CREATE_POST, DELETE_POST, GET_POSTS, LIKE_POST, UPDATE_POST} from './types'
import postsService from '../services/posts.service'

export const createPost = (creator, title, message, tags, picture)=> async(dispatch)=>{
    try{
        const res = await postsService.createPost({creator, title, message, tags, picture})

        dispatch({
            type: CREATE_POST,
            payload: res.data
        })
        return Promise.resolve(res.data)
    }catch(err){
        return Promise.reject(err)
    }
}

export const getAllPosts = ()=> async(dispatch)=>{
    try{
        const res = await postsService.getAllPosts()

        dispatch({
            type: GET_POSTS,
            payload: res.data.posts
        })
        return Promise.resolve(res.data.posts)
    }catch(err){
        return Promise.reject(err)
    }
}

export const updatePost = (id, data) => async (dispatch) => {
    try {
        const res = await postsService.updatePost(id, data);

        dispatch({
            type: UPDATE_POST,
            payload: res.data,
          });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        const res = await postsService.deletePost(id);

        dispatch({
            type: DELETE_POST,
            payload: {id},
        });

        return Promise.resolve(res.data);
    } catch (error) {
        return Promise.reject(error);
    }
};


export const Like = (id) => async(dispatch)=>{
    try {
        const res = await postsService.likePost(id)
        dispatch({
            type: LIKE_POST,
            payload: res.data.likes
        })
        return Promise.resolve(res.data.likes)
    } catch (error) {
        return Promise.reject(error)
    }
}