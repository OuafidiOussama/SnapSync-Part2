import React from 'react'
import RecomendedPosts from './RecomendedPosts'

export default function RecomendedContainer({payload}) {
  return payload && (
    <div className="w-9/12 flex gap-5 flex-wrap pt-10">
        {payload.recomended.map((post)=><RecomendedPosts post={post} />)}
        
    </div>
  )
}
