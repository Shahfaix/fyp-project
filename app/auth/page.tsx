'use client'
import { useState, FormEvent } from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import MyComponent from 'react-fullpage-custom-loader'

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loader, setLoader]= useState(false)

  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Implement your sign-in logic here
  };

  const handleCheckSignIn = () => {
    setLoader(true)
    if (email === 'shafaiz@gmail.com' && password === "pass") {
      router.push('/home');
    }
  };
const arr=[
  "In an infinite universe where legal documents proliferate at the speed of light, the most intelligent AI isn’t the one that finds the loopholes, but the one that understands the absurdity of bureaucracy. - Inspired by Douglas Adams",
  "The thing about AI is that it's like a golem made of data; it does exactly what you tell it to, which is a fine idea until it starts interpreting tax law.\n- Inspired by Terry Pratchett",
  "\"A robot may not injure a human being, or, through inaction, allow a human being to come to harm, unless involved in the reading of tax codes, in which case all bets are off.\" - Inspired by Isaac Asimov",
  "\"Any sufficiently advanced legal AI is indistinguishable from a lawyer, except it doesn't require coffee to function.\" - Inspired by Arthur C. Clarke",
  "Navigating the labyrinth of law with AI is like using a map where the X marking the spot is constantly moving. Fortunately, machine learning is an excellent tracker.\n- Inspired by Douglas Adams",
  "\"To the untrained eye, the law is a confusing web of statutes and precedents. To AI, it's a Tuesday.\" - Inspired by Terry Pratchett",
  "\"When it comes to understanding the nuances of legal jargon, sometimes I think robots are the only ones patient enough to not throw the book across the room. Metaphorically speaking, of course.\" - Inspired by Isaac Asimov"
]
const arr1=[]
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center text-gray-700 mb-6">Welcome Back, You Have Been Missed</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
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
              <span >Remember me</span>
            </label>
            <a href="/forgot-password" className="text-sm text-purple-950 hover:text-purple-950">
              Forgot Password?
            </a>
          </div>
          <div className="mb-6">
            <button
              onClick={handleCheckSignIn}
              type="submit"
              className="w-full bg-purple-950 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
          <div className="text-center mb-6">
            <p className="text-gray-600">Don't have an account? <a href="/register" className="text-purple-950 hover:text-purple-950">Sign Up</a></p>
          </div>
          <div className="flex flex-row gap-7 pt-3 items-center justify-center">
            <FcGoogle />
            <IoLogoGithub />
            <FaPhone />
          </div>
        </form>
      </div>{loader && (<><MyComponent sentences={arr1} loaderType={"square-spin"}/></>)

      }
      
    </div>
  );
};

export default SignInPage;
