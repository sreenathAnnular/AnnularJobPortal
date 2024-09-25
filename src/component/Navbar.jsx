import { Button } from '@material-tailwind/react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[10%] flex items-center bg-gray-50 fixed top-0 z-10'>
        <div className='text-gray-700 font-bold text-2xl p-4 '>Jobs Engine</div>
        <div className='flex mx-auto mr-10 gap-5 justify-center'>
            <p className='font-bold text-gray-800'>Home</p>
            <p className='font-bold text-gray-800'>My Resume</p>
        </div>
        <div className='ml-auto mr-2'>
            <Button className='rounded-lg text-lg bg-black px-5 py-1 h-auto normal-case'>Register</Button>
        </div>
    </div>
  )
}

export default Navbar
