import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import RegisterForm from './RegisterForm'

const Navbar = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/registerform'); // Navigate to registerForm
  };
  return (
    <div className='w-full h-[10%] flex items-center bg-gray-200 fixed top-0 z-10'>
        <div className='text-gray-700 font-bold text-2xl p-4 '>Jobs Engine</div>
        <div className='flex mx-auto mr-10 gap-5 justify-center'>
        <Link to="/dashboard" className='font-bold text-gray-800'>Home</Link>
            <Link to="/my-resume" className='font-bold text-gray-800'>My Resume</Link>
        </div>
        <div className='ml-auto mr-2'>
        <Button onClick={handleRegisterClick} className='rounded-lg text-lg bg-black px-5 py-1 h-auto normal-case'>Register</Button>
        </div>
    </div>
  )
}

export default Navbar

