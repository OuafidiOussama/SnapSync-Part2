import http from '../axios'

class PostServices {

    getAllPosts(){
        return http.get("/posts/getAll")
    }

    createPost(data){
        return http.post('/posts/create', data)
    }

    updatePost(id, data){
        return http.put(`/posts/update/${id}`, data)
    }

    deletePost(id) {
        return http.delete(`/posts/delete/${id}`)
    }

    likePost(id){
        return http.patch(`/posts/like/${id}`)
    }
    unlikePost(id){
        return http.patch(`/posts/unlike/${id}`)
    }

}

export default new PostServices();