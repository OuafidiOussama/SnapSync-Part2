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
    UPDATE_A_POST_SUCCESS
} from '../types/postTypes'

export const getAllPostsReducer = (state={}, action)=>{
    const {type, payload} = action

    switch (type) {
        case GET_ALL_POSTS_REQUEST:
            return {
                loading: true
            }
        case GET_ALL_POSTS_SUCCESS:
            return{
                loading: false,
                payload
            }
        case GET_ALL_POSTS_FAIL:
            return{
                loading: false,
                error: payload
            }
        default:
            return state
    }

}

export const createPostReducer = (state={}, action)=>{
    const {type, payload} = action

    switch (type) {
        case CREATE_A_POST_REQUEST:
            return {
                loading: true
            }
        case CREATE_A_POST_SUCCESS:
            return{
                loading: false,
                payload
            }
        case CREATE_A_POST_FAIL:
            return{
                loading: false,
                error: payload
            }
        default:
            return state
    }

}

export const updatePostReducer = (state={}, action)=>{
    const {type, payload} = action

    switch(type){
        case UPDATE_A_POST_REQUEST:
            return{
                updateLoading: true
            }
        case UPDATE_A_POST_SUCCESS:
            return{
                updateLoading: false,
                payload
            }
        case UPDATE_A_POST_FAIL:
            return{
                updateLoading: false,
                error: payload
            }
        default:
            return state
    }
}


export const deletePostReducer = (state={}, action)=>{
    const {type, payload} = action

    switch (type) {
        case DELETE_A_POST_REQUEST:
            return{
                loading: true
            }
        case DELETE_A_POST_SUCCESS:
            return{
                loading: false,
                payload
            }
        case DELETE_A_POST_FAIL:
            return{
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const likePostReducer = (state={}, action)=>{
    const {type, payload} = action

    switch (type) {
        case LIKE_A_POST_REQUEST:
            return{
                loading: true
            }
        case LIKE_A_POST_SUCCESS:
            return{
                loading: false,
                payload
            }
        case LIKE_A_POST_FAIL:
            return{
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const unlikePostReducer = (state={}, action)=>{
    const {type, payload} = action

    switch (type) {
        case UNLIKE_A_POST_REQUEST:
            return{
                loading: true
            }
        case UNLIKE_A_POST_SUCCESS:
            return{
                loading: false,
                payload
            }
        case UNLIKE_A_POST_FAIL:
            return{
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

