import {LOGIN, LOGOUT} from './types'
import postsService from '../services/posts.service'

export const login = (userData)=> async(dispatch)=>{
    try{
        const res = await postsService.login(userData)

        dispatch({
            type: LOGIN,
            payload: res.data.user
        })
        console.log(res.data.user);
        return Promise.resolve(res.data)
    }catch(err){
        return Promise.reject(err)
    }
}