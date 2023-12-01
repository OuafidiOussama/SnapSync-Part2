import http from '../axios'

class PostServices {

    login(data){
        return http.post("/user/login", data)
    }

    getAllPosts(){
        return http.get("/posts")
    }

    createPost(data){
        return http.post('/posts', data)
    }

    updatePost(id, data){
        return http.put(`/posts/${id}`, data)
    }

    deletePost(id) {
        return http.delete(`/posts/${id}`)
    }

    likePost(id){
        return http.patch('/posts', id)
    }
}

export default new PostServices();