import {
    CREATE_A_POST_FAIL,
    CREATE_A_POST_REQUEST,
    CREATE_A_POST_SUCCESS,
    DELETE_A_POST_FAIL,
    DELETE_A_POST_REQUEST,
    DELETE_A_POST_SUCCESS,
    GET_ALL_POSTS_FAIL,
    GET_ALL_POSTS_REQUEST,
    GET_ALL_POSTS_SUCCESS,
    LIKE_A_POST_FAIL,
    LIKE_A_POST_REQUEST,
    LIKE_A_POST_SUCCESS,
    UNLIKE_A_POST_FAIL,
    UNLIKE_A_POST_REQUEST,
    UNLIKE_A_POST_SUCCESS,
    UPDATE_A_POST_FAIL,
    UPDATE_A_POST_REQUEST,
    UPDATE_A_POST_SUCCESS,
} from "../types/postTypes";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import PostServices from '../services/posts.service'

export const getAllPostsAction= () => async(dispatch)=>{
    dispatch({
        type: GET_ALL_POSTS_REQUEST
    })
    try {
        const {data} = await PostServices.getAllPosts()
        dispatch({
            type: GET_ALL_POSTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_POSTS_FAIL,
            payload: error.response.data.error
        })
        toast.error('Something Went Wrong !')
    }
}

export const createPostAction = (post)=>async(dispatch)=>{
    dispatch({
        type: CREATE_A_POST_REQUEST
    })
    try {
        const {data} = await PostServices.createPost(post)
        dispatch({
            type: CREATE_A_POST_SUCCESS,
            payload: data
        })
        dispatch(getAllPostsAction())
        toast.success('Post Created Successfully !')
    } catch (error) {
        dispatch({
            type:CREATE_A_POST_FAIL,
            error: error.response.data.error
        })
        toast.error('Something Went Wrong While Creating!')

    }
}

export const updatePostAction = (id, post)=>async(dispatch)=>{
    dispatch({
        type: UPDATE_A_POST_REQUEST
    })
    try {
        const {data} = await PostServices.updatePost(id, post)
        dispatch({
            type: UPDATE_A_POST_SUCCESS,
            payload: data
        })
        dispatch(getAllPostsAction())
        toast.success('Post Updated Successfully !')
    } catch (error) {
        dispatch({
            type: UPDATE_A_POST_FAIL,
            error: error.response.data
        })
        toast.error('🚨 You Are Not The Creator')
    }
}

export const deletePostAction = (id) => async(dispatch)=>{
    dispatch({
        type: DELETE_A_POST_REQUEST
    })
    try {
        const {data} = await PostServices.deletePost(id)
        dispatch({
            type: DELETE_A_POST_SUCCESS,
            payload: data
        })
        dispatch(getAllPostsAction())
        toast.success('Post Deleted Successfully!!')
    } catch (error) {
        dispatch({
            type: DELETE_A_POST_FAIL,
            error: error.response.data
        })
        toast.error('🚨 You Are Not The Creator')
    }
}

export const likePostAction = (id) => async(dispatch)=>{
    dispatch({
        type: LIKE_A_POST_REQUEST
    })
    try {
        const {data} = await PostServices.likePost(id)
        dispatch({
            type: LIKE_A_POST_SUCCESS,
            payload: data
        })
        dispatch(getAllPostsAction())
        toast.success('Post Liked 👍')
    } catch (error) {
        dispatch({
            type: LIKE_A_POST_FAIL,
            error: error.response.data
        })
        toast.error('You Must Login !')
    }
}

export const unlikePostAction = (id) => async(dispatch)=>{
    dispatch({
        type: UNLIKE_A_POST_REQUEST
    })
    try {
        const {data} = await PostServices.unlikePost(id)
        dispatch({
            type: UNLIKE_A_POST_SUCCESS,
            payload: data
        })
        dispatch(getAllPostsAction())
        toast.success('Post Unlicked 👎')
    } catch (error) {
        dispatch({
            type: UNLIKE_A_POST_FAIL,
            error: error.response.data
        })
        toast.error('You Must Login !')
    }
}