import {LOGIN, LOGOUT} from '../actions/types'

const initialState = {
    user: null
}

function userReducer(user = initialState, action){
    const {type, payload} = action

    switch(type){
        case LOGIN:
            return {...user, user: payload}
        case LOGOUT: 
            return {...user, user: null}
        default:
            return user
    }
}

export default userReducer