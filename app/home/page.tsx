import React from 'react';
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Content from "../components/content";
import Navbar from '../components/Navbar';

const WelcomeScreen = () => {
  return (
<>
<Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">
        
 
   
     
      {/* This div represents the pagination or slider indicator */}
      
   
      <Content />
      <div className="w-24 h-1 rounded-full bg-gray-200" />
    </div>
    </>

  );
};

export default WelcomeScreen;
