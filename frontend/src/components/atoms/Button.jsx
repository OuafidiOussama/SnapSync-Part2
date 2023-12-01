import React from 'react'

export default function Button({label, bg, hover, type, w, handler}) {
  return (
    <>
    <button onClick={handler} className={bg +" "+hover+ " text-white font-bold py-2 px-5 rounded-md transition-all duration-300 uppercase shadow-md w-"+w || "inherit"} type={type || "button" }>{label}</button>
    </>
  )
}
