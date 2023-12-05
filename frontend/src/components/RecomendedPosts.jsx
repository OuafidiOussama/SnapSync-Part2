import moment from 'moment'
import React from 'react'

export default function RecomendedPosts({post}) {
  const {creator, createdAt, tags, title, message, picture} = post
  const createdTime = moment(createdAt).fromNow()
  return (
    <div className="w-80 h-[350px] bg-white shadow-lg rounded-lg border-[1px] overflow-hidden cursor-pointer">
      <div className="w-full h-1/2 relative">
            <div className="w-full h-full absolute bg-black opacity-40"></div>
            <img src={picture} alt="hello" className="object-cover w-full h-full" />
            <div className="absolute w-full h-full top-0 flex px-5 pt-5 justify-between text-white">
                <p className="text-xl flex flex-col">{creator}<span className="text-sm">{createdTime}</span></p>
            </div>
        </div>

      <div className="p-4 flex flex-col ">
        <p className="text-gray-800 font-light opacity-50">
          {tags.map((tag)=>(<span> #{tag}</span>))}
        </p>
        <p className="text-gray-800 mt-7 text-2xl  ">{title}</p>
        <p className="text-gray-400	 mt-7">{message}</p>

      </div>
    </div>
  )
}
