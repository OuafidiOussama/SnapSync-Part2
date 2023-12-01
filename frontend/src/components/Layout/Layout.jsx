import React from 'react'
import Navbar from '../partials/Navbar'

export default function Layout({children}) {
  return (
    <div className="relative px-20 py-10">
        <Navbar />
        {children}
    </div>
  )
}
