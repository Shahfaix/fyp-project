// pages/register.tsx
'use client'
import { useState, FormEvent } from 'react';
import { AiFillGoogleCircle, AiFillApple } from 'react-icons/ai'; // Assuming you're using react-icons
import { FaFacebookF } from 'react-icons/fa';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle your registration logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-6">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-2">Hello User,</h1>
        <p className="mb-8">Create Your Account</p>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              REGISTER
            </button>
            <a
              href="/login"
              className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
            >
              Already have an account?
            </a>
          </div>
          <p className="text-center text-gray-500 text-xs">
            Or sign up with
          </p>
          <div className="flex justify-center">
            <AiFillGoogleCircle className="text-3xl text-gray-600 mx-2 cursor-pointer" />
            <FaFacebookF className="text-3xl text-gray-600 mx-2 cursor-pointer" />
            <AiFillApple className="text-3xl text-gray-600 mx-2 cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
