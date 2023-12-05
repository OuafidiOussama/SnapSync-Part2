import moment from 'moment'
import React from 'react'

export default function PostDetails({payload}) { 
    console.log('payload', payload);
  return payload && (
    <div className='bg-white shadow-2xl py-3 rounded-2xl px-16 flex w-full justify-between '>
        <div className='w-9/12 px-5'>
            <p className='font-bold text-3xl tracking-wider'>{payload.post.title}</p>
            <p className='pl-5 pt-3'>{payload.post.message}</p>
            
        </div>
        <div className=''>
            <div className='opacity-25'>
            {payload.post.tags.map((tag)=>(<span> #{tag}</span>))}
            </div>
            <img src={payload.post.picture} alt="logo" className='w-full h-[400px] object-cover'/>
            <p className='font-medium text-sm text-center'>{payload.post.creator} <span>{moment(payload.post.createdAt).fromNow()}</span></p>
        </div>
    </div>
  )
}
