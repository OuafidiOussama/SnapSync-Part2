import React from 'react'
import { Pagination } from '@mui/material'

export default function PaginationComp() {
  return (
    <div className='absolute top-[480px] right-0 -translate-x-24  text-center bg-white shadow-lg w-80 rounded-xl py-5 px-10 flex justify-center'>
        <Pagination count={2} variant="outlined" color="primary" />
    </div>
  )
}
