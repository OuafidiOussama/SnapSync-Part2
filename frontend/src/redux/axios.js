import axios from "axios";



const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": 'application/json',
        // "Authorization": `Bearer ${extractToken()}`
    }
})

api.interceptors.request.use(
    (config)=>{
        const userInfo = localStorage.getItem("userInfo");
        const googleToken = localStorage.getItem("googleToken");

        if (userInfo) {
        const { jwtToken } = JSON.parse(userInfo);
            config.headers.Authorization = `Bearer ${jwtToken}`;
        } else if (googleToken) {
            config.headers.Authorization = `Bearer ${googleToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api