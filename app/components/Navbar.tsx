'use client'
import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import homeLogo from '../../public/assests/home-logo.png'
import userIcon from '../../public/assests/user-icon.png'


const Navbar = () => {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  return (
    <div className="w-full h-20 bg-customGray sticky top-0 z-50">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Icon */}
        <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
            <Image  src={homeLogo} alt="Home-Logo" width={32} height={32} />
          </div>
        
        {/* Search Bar */}
        <div className="flex-grow mx-4 bg-pink-100">
          <input
            type="text"
            placeholder="Search.."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        {/* Navigation Links */}
        {/* Categories Dropdown */}
        <div className=" md:flex gap-x-6 items-center mr-4 relative">
          <div 
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)} 
            className="cursor-pointer text-white hover:text-gray-300 flex items-center "
          >
            Categories
            {/* Dropdown Icon */}
            <svg
              className={`ml-2 w-4 h-4 transform transition-transform ${isCategoriesOpen ? 'rotate-180' : 'rotate-0'} `}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Dropdown Menu */}
          {isCategoriesOpen && (
            <div className="absolute top-full mt-2 py-2 w-48 bg-white shadow-lg rounded-md">
              <button >
                <span className="cursor-pointer text-gray-700 hover:bg-gray-100 block px-4 py-2">Summarize</span>
              </button>
              <button >
                <span className="cursor-pointer text-gray-700 hover:bg-gray-100 block px-4 py-2">Case Analysis</span>
              </button>
              <button >
                <span className="cursor-pointer text-gray-700 hover:bg-gray-100 block px-4 py-2">law Sections</span>
              </button>
              <button >
                <span className="cursor-pointer text-gray-700 hover:bg-gray-100 block px-4 py-2">See All</span>
              </button>
              {/* Additional categories here */}
            </div>
          )}
        </div>

        
        {/* User Profile Section */}
        <div className="flex items-center">
         
          <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
            <Image src={userIcon} alt="User Profile" width={32} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
