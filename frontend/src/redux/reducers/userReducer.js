import { 
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_RESET,
    USER_REGISTER_SUCCESS,

    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_RESET,
    USER_LOGIN_SUCCESS,

    // USER_LOAD_REQUEST,
    // USER_LOAD_SUCCESS,
    // USER_LOAD_FAIL,
    // USER_LOAD_RESET,

    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_RESET,
} from "../types/userTypes";

export const userReducerRegister = (state = {}, action)=>{
    const {type, payload} = action

    switch (type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true
            }

        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                userRegistered: payload
            }

        case USER_REGISTER_FAIL:
            return {
                loading: false,
                error: payload
            }

        case USER_REGISTER_RESET:
            return {}
    
        default:
            return state
    }
} 


export const userReducerLogin = (state = {}, action)=>{
    const {type, payload} = action

    switch (type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
                userInfo: null,
                isAuthenticated: false
            }

        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: payload,
                isAuthenticated: true
            }

        case USER_LOGIN_FAIL:
            return {
                loading: false,
                userInfo: null,
                isAuthenticated: false,
                error: payload
            }

        case USER_LOGIN_RESET:
            return {}
    
        default:
            return state
    }
} 


// export const userReducerProfile = (state = {user: null}, action)=>{
//     const {type, payload} = action

//     switch (type) {
//         case USER_LOAD_REQUEST:
//             return {
//                 loading: true,
//                 user: null
//             }

//         case USER_LOAD_SUCCESS:
//             return {
//                 loading: false,
//                 user: payload.user,
//             }

//         case USER_LOAD_FAIL:
//             return {
//                 loading: false,
//                 user: null,
//                 error: payload
//             }

//         case USER_LOAD_RESET:
//             return {}
    
//         default:
//             return state
//     }
// } 

export const userReducerLogout = (state = {}, action)=>{
    const {type, payload} = action

    switch (type) {
        case USER_LOGOUT_REQUEST:
            return {
                loading: true,
            }

        case USER_LOGOUT_SUCCESS:
            return {
                loading: false,
                user: payload,
            }

        case USER_LOGOUT_FAIL:
            return {
                loading: false,
                error: payload
            }

        case USER_LOGOUT_RESET:
            return {}
    
        default:
            return state
    }
}