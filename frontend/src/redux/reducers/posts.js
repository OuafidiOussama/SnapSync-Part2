import {CREATE_POST, DELETE_POST, GET_POSTS, LIKE_POST, UPDATE_POST} from '../actions/types'

const initialState = []

function postReducer(posts = initialState, action){
    const {type, payload} = action

    switch(type){
        case CREATE_POST:
            return [...posts, payload]
        case GET_POSTS:
            return payload
        case UPDATE_POST:
            return posts.map((post) => {
                if (post.id === payload.id) {
                  return {
                    ...post,
                    ...payload,
                  };
                } else {
                  return post;
                }
              });
        case DELETE_POST:
            return posts.filter(({ id }) => id !== payload.id);
        case LIKE_POST:
            return [...posts, payload]
        default:
            return posts
    }
}

export default postReducer