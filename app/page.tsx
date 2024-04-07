'use client'
import Image from "next/image";

import Link from "next/link";
import Logo from "../public/assests/Logo.png"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useRouter } from 'next/navigation';







export default function Home() {
  const router = useRouter();


  const goToSignIn = () => {
    router.push('/auth');
  };
  const goToSignUp = () => {
    router.push('/signup');
  };
  return (
    <div className="Logo">
      <div className="flex flex-col Logo lg:pt-[160px] sm: pt-[280px] items-center sm:" >
        <Image src={Logo} alt="Logo" height={170} width={170} />
        <div className="flex flex-row gap-1 pt-[20px] text-2xl text-[42px] text-xl sm:text-3xl lg:text-5xl ">
          <span>{`Welcome to `}</span>
          <span className="text-purple-950  ">LawBot</span>
          <span>.AI</span>

        </div >
        <div className="flex flex-row  pt-5 gap-6">
          <Button  onClick={goToSignIn} >
            Login
          </Button>
          <Button onClick={goToSignUp} variant="secondary" >
            Sign up
          </Button>

        </div>
        
        
       
        <div className="pt-5 text-[#6C757D]" >
            <span>________</span>
            <span className="pt 6"> or continue with </span>
            <span>________</span>

        </div>
        <div className="flex flex-row  pt-3 gap-7">
        <FcGoogle />
        <IoLogoGithub />
        <FaPhone />
        
        </div>



      </div>

    </div>

  );
}
