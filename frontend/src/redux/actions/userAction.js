import { 
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    // USER_LOAD_FAIL,
    // USER_LOAD_REQUEST,
    // USER_LOAD_SUCCESS,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
} from "../types/userTypes"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import UserServices from '../services/user.service'


export const userRegisterAction = (user) => async(dispatch) =>{
    dispatch({
        type: USER_REGISTER_REQUEST
    })
    try {
        const {data} = await UserServices.register(user)
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        toast.success('You have been registered Successfully !')
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error)
    }
}


export const userLoginAction = (user) => async(dispatch) =>{
    dispatch({
        type: USER_LOGIN_REQUEST
    })
    try {
        const {data} = await UserServices.login(user)
        localStorage.setItem('userInfo', JSON.stringify(data))
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        toast.success('Loggin Successful !')
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error)
    }
}


// export const userProfileAction = () => async(dispatch) =>{
//     dispatch({
//         type: USER_LOAD_REQUEST
//     })
//     try {
//         const {data} = await UserServices.me()
//         dispatch({
//             type: USER_LOAD_SUCCESS,
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: USER_LOAD_FAIL,
//             payload: error.response.data.error
//         })
//     }
// }

export const userLogoutAction = (user) => async(dispatch) =>{
    dispatch({
        type: USER_LOGOUT_REQUEST
    })
    try {
        localStorage.removeItem('userInfo')
        const {data} = await UserServices.logout(user)
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        })
        toast.success('Log out Successful !')
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error)
    }
}