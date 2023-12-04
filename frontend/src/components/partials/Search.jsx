import React from 'react'
import { TextField } from '@mui/material'
import Button from '../atoms/Button'

export default function Search() {
  return (
    <div className="absolute right-0 -translate-x-24 text-center bg-white shadow-lg w-80 rounded-xl p-5 flex flex-col gap-2">
        <TextField 
            fullWidth
            label="Search Memories"
            id="memories"
            name='memories'
            />
        <TextField 
            fullWidth
            label="Search Tags"
            id="tags"
            name='tags'
            />
        <Button label="Search" bg="bg-indigo-600" hover="hover:bg-indigo-800" type="submit"/>
    </div>
  )
}
