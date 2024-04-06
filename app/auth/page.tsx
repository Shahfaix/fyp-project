'use client'
// pages/login.tsx
// pages/signin.tsx
import { useState, FormEvent } from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'; // For mail and lock icons
import { AiFillGoogleCircle, AiFillApple } from 'react-icons/ai'; // Assuming you're using react-icons
import { FaFacebookF } from 'react-icons/fa';
import { useRouter } from 'next/navigation';


const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Implement your sign-in logic here
  };
  const handleCheckSignIn=()=>{
    if(email=='shafaiz@gmail.com'&& password=="pass"){
  router.push('/home')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-6 bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-semibold text-center text-gray-700 mb-6">Welcome Back, You Have Been Missed</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <div className="flex items-center bg-gray-200 rounded px-3 py-2">
              <AiOutlineMail className="text-gray-500 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="bg-gray-200 outline-none w-full text-gray-700"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center bg-gray-200 rounded px-3 py-2">
              <AiOutlineLock className="text-gray-500 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="bg-gray-200 outline-none w-full text-gray-700"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              Remember me
            </label>
            <a href="/forgot-password" className="text-sm text-purple-600 hover:text-purple-800">
              Forgot Password?
            </a>
          </div>
          <div className="mb-6">
            <button
            onClick={handleCheckSignIn}
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
          <div className="text-center mb-6">
            <p className="text-gray-600">Don't have an account? <a href="/register" className="text-purple-600 hover:text-purple-800">Sign Up</a></p>
          </div>
          <div className="flex items-center justify-center">
            <AiFillGoogleCircle className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer mx-2" />
            <FaFacebookF className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer mx-2" />
            <AiFillApple className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer mx-2" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
