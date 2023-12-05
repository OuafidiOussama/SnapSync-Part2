import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import PostDetails from '../components/PostDetails'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getPostByIdAction } from '../redux/actions/postAction'
import SkeletonDetails from '../components/atoms/SkeletonDetails'
import RecomendedContainer from '../components/RecomendedContainer'

export default function Post() {
    const dispatch = useDispatch()
    const params = useParams()
    const {loading, payload} = useSelector((state)=> state.getPostById)

    useEffect(()=>{
        dispatch(getPostByIdAction(params.id))
    },[dispatch])
  return (
    <Layout>
        {loading ? <SkeletonDetails /> : 
        <>
        <PostDetails payload={payload}/>
        <RecomendedContainer payload={payload} />
        </>} 
    </Layout>
  )
}
