import { combineReducers } from "redux";
import {userReducerRegister, userReducerLogin, userReducerLogout} from './userReducer'
import { createPostReducer, deletePostReducer, getAllPostsReducer, likePostReducer, unlikePostReducer, updatePostReducer } from "./postReducer";

export default combineReducers({
    register: userReducerRegister,
    login: userReducerLogin,
    logout: userReducerLogout,
    getAllPosts: getAllPostsReducer,
    createPost: createPostReducer,
    updatePost: updatePostReducer,
    deletePostReducer,
    likePostReducer,
    unlikePostReducer
})