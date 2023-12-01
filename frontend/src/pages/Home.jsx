import { AddFrom } from "../components/AddFrom";
import Layout from "../components/Layout/Layout";
import { PostContainer } from "../components/PostContainer";

function Home() {
    return(
        <Layout>
            <AddFrom />
            <PostContainer/>
        </Layout>
    ) 
}

export default Home