'use client'
import { useState, FormEvent } from 'react';
 // Corrected from 'next/navigation'
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg px-4">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Join Us Today!</h1>
        <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Name Field */}
          <div className="mb-4">
            <div className="flex items-center bg-gray-200 rounded px-3 py-2">
              <AiOutlineUser className="text-gray-500 mr-2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="bg-gray-200 outline-none w-full text-gray-700"
              />
            </div>
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <div className="flex items-center bg-gray-200 rounded px-3 py-2">
              <AiOutlineMail className="text-gray-500 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="bg-gray-200 outline-none w-full text-gray-700"
              />
            </div>
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <div className="flex items-center bg-gray-200 rounded px-3 py-2">
              <AiOutlineLock className="text-gray-500 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="bg-gray-200 outline-none w-full text-gray-700"
              />
            </div>
          </div>
          {/* Confirm Password Field */}
          <div className="mb-6">
            <div className="flex items-center bg-gray-200 rounded px-3 py-2">
              <AiOutlineLock className="text-gray-500 mr-2" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
                className="bg-gray-200 outline-none w-full text-gray-700"
              />
            </div>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-purple-950 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center mb-6">
            <p className="text-gray-600">Already have an account? <a href="/signin" className="text-purple-950 hover:text-purple-950">Sign In</a></p>
          </div>
          <div className="flex  fle-row gap-6 justify-center">
            <FcGoogle className="text-3xl mr-2 cursor-pointer" />
            <IoLogoGithub className="text-3xl mr-2 cursor-pointer" />
            <FaPhone className='text-3xl mr-2 cursor-pointer"'/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
