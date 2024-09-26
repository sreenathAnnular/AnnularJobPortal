import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin
import loginbg from '../assets/images/LoginPageBg.jpg';
import { signIn } from '../redux/signinSlice';

import { useDispatch } from 'react-redux';

const Signin = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent form refresh

    // Dispatch login action (assuming you are using Redux Toolkit)
    dispatch(signIn({ email, password }))
      .unwrap() // If using createAsyncThunk, unwrap to handle success/errors directly
      .then(() => {
        navigate('/dashboard'); // Navigate on successful login
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  const handleGoogleSignIn = (credentialResponse) => {
    console.log(credentialResponse); // Log the credential response for debugging

    // Here you can verify the token with your backend if needed.
    // For now, we will navigate to the desired page.
    navigate('/registerform'); // Replace '/home' with the actual path you want to navigate to
  };

  const handleGoogleError = (error) => {
    console.error('Google Sign-In Failed:', error);
    // Optionally handle sign-in errors here (e.g., display a message to the user)
  };

  return (
    <div>
      <Navbar />
      <div className='flex w-full h-screen border border-red-600'>
        <div className='w-1/2  flex flex-col justify-center items-start p-10 ml-10'>
        <div className='flex justify-between w-[80%] mt-8'>
            <div></div> {/* Empty div to take up space on the left */}
            <p>
              Not a member? 
              <a href="#" className="text-blue-700 underline hover:underline" style={{ color: '#0d6efd' }}> sign up now</a>
            </p>
          </div>
          <h3 className='text-3xl mb-4'>Sign in</h3>
          <form className='w-[80%]' onSubmit={handleSignIn}>
            <div className='mb-4'>
              <label className='block mb-1 text-xl text-gray-600'>Email Address</label>
              <input type="email" className='p-4 text-xl w-full rounded-md' value={email}  onChange={(e) => setEmail(e.target.value)}  style={{ backgroundColor: '#E8F0FE' }} />
            </div>
            <div className='mb-4'>
              <label className='block mb-1 text-xl text-gray-600'>Password</label>
              <input type="password" className='p-4 w-full rounded-md' value={password}  style={{ backgroundColor: '#E8F0FE' }} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='mb-4'>
              <a href="/forgot-password" className="text-blue-700 underline hover:underline" style={{ color: '#0d6efd' }}>
                Forgot Password?
              </a>
            </div>

            {/* Google Sign In Button */}
            <div className='mt-4'>
              <GoogleLogin
                onSuccess={handleGoogleSignIn} // Handle success
                onError={handleGoogleError} // Handle errors
                render={renderProps => (
                  <Button 
                    onClick={renderProps.onClick} // Attach the click handler from renderProps
                    disabled={renderProps.disabled} // Disable the button while loading
                    className='bg-red-500 text-white normal-case w-full text-sm p-4'
                  >
                    Sign in with Google
                  </Button>
                )}
              />
            </div>

            <div className='mt-4'>
              <Button type="submit" className='bg-black  text-white normal-case w-full text-sm p-4'>Sign in</Button>
            </div>
          </form>
          <div className='mt-4'>
            <a href="#" className="text-blue-700 underline hover:underline" style={{ color: '#0d6efd' }}>
              Sign in with LinkedIn
            </a>
          </div>
        </div>
       
        <div className='relative w-1/2 h-full'>
          <img src={loginbg} alt="Login Background" className='object-cover w-full h-full' />
          <div className='absolute inset-0 bg-black opacity-80 flex justify-center items-center'>
            <div className='p-6 mx-8 max-w-3xl'>
              <h2 className='text-white text-center text-4xl tracking-widest leading-normal font-bold m-0'>
                Join the largest job community in the world
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

