import api from '../axios'

class PostServices {

    getAllPosts(){
        return api.get("/posts/getAll")
    }

    createPost(data){
        return api.post('/posts/create', data)
    }

    updatePost(id, data){
        return api.put(`/posts/update/${id}`, data)
    }

    deletePost(id) {
        return api.delete(`/posts/delete/${id}`)
    }

    likePost(id){
        return api.patch(`/posts/like/${id}`)
    }
    unlikePost(id){
        return api.patch(`/posts/unlike/${id}`)
    }

}

export default new PostServices();