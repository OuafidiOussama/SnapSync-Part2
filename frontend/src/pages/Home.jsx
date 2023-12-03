import { useState } from "react";
import { AddFrom } from "../components/AddFrom";
import Layout from "../components/Layout/Layout";
import { PostContainer } from "../components/PostContainer";

function Home() {
    const [isUpdate, setIsUpdate] = useState(false);
    const [postToUpdate, setPostToUpdate] = useState(null);

    const handleUpdate = ({ isUpdate, postToUpdate }) => {
        setIsUpdate(isUpdate);
        setPostToUpdate(postToUpdate);
      };
    
    return(
        <Layout>
            <AddFrom isUpdate={isUpdate} setIsUpdate={setIsUpdate} setPostToUpdate={setPostToUpdate} postToUpdate={postToUpdate}/>
            <PostContainer onUpdate={handleUpdate}/>
        </Layout>
    ) 
}

export default Home