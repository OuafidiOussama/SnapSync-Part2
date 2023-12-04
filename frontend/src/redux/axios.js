import axios from "axios";

function extractToken(){
    const userInfo = localStorage.getItem('userInfo')
    const googleToken = localStorage.getItem('googleToken')
    if(userInfo){
        const {jwtToken} = JSON.parse(userInfo)
        return jwtToken
    }
    if(googleToken){
        const token = JSON.parse(googleToken)
        return token
    }
}

export default axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${extractToken()}`
    }
})