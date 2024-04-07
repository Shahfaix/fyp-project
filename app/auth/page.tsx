'use client'
// pages/login.tsx
import { useState, FormEvent } from 'react';
import { AiFillGoogleCircle, AiFillApple } from 'react-icons/ai'; // or any other icon library
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle your login logic here
  };

  // Styles can be externalized to a CSS/SCSS file or a JS object for CSS-in-JS solutions
  const pageStyles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center' as const,
    },
    input: {
      margin: '10px 0',
      width: '100%',
      padding: '10px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: 'purple',
      color: 'white',
      border: 'none',
    },
    socialIcon: {
      margin: '0 10px',
    },
  };

  return (
    <div className='flex flex-col items-center pt-[160px]'>
      <h1 >Hello User,</h1>
      <p className='pt-6'>Welcome Back, You Have Been Missed For Long Time</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          style={pageStyles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={pageStyles.input}
        />
        <div>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            /> Remember Me
          </label>
          <a href="/forgot-password" style={{ marginLeft: '10px' }}>
            Forgot Password?
          </a>
        </div>
        <button type="submit" style={pageStyles.button}>LOGIN</button>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </form>
      <p>Or Continue With</p>
      <div className="flex flex-row  pt-3 gap-7">
        <FcGoogle />
        <IoLogoGithub />
        <FaPhone />
        
        </div>
    </div>
  );
};

export default LoginPage;
