import http from '../axios'

class UserServices {

    register(data){
        return http.post("/user/register", data)
    }

    login(data){
        return http.post("/user/login", data)
    }

    // me(){
    //     return http.get('/user/me')
    // }

    logout(){
        return http.get('/user/logout')
    }
}

export default new UserServices();