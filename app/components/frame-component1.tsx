import React from 'react';

const FrameComponent1 = () => {
  return (
    <section className="flex items-start p-0 border-box w-full text-center text-2xl text-gray-600 font-open-sans">
      <div className="w-full flex flex-col items-end p-0 gap-8">
        {/* Top bar with time and icons */}
        <div className="w-full flex justify-end items-center p-0">
          <div className="flex justify-between w-full max-w-xs">
            <div className="flex items-center">
              <img
                className="w-5 h-3.5"
                alt="WiFi icon"
                src="/wifi.svg"
              />
              <img
                className="w-5 h-3.5"
                alt="Cellular connection icon"
                src="/cellular-connection.svg"
              />
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-600 opacity-35 mx-2" />
              <div className="w-6 h-6 rounded bg-gray-600 mx-2" />
            </div>
          </div>
        </div>
        {/* User greeting section */}
        <div className="w-full flex justify-between items-center p-0">
          <div className="h-11 w-11 relative">
            <div className="absolute top-1 left-8 w-3 h-3 rounded-full bg-blue-600 text-xs font-semibold flex items-center justify-center">2</div>
            <img
              className="absolute inset-0 m-auto h-8 w-8"
              alt="Notifications icon"
              src="/group.svg"
            />
          </div>
          <div className="flex flex-col items-center">
            <span>Hello,</span>
            <strong className="text-gray-600">Qamar Abbas</strong>
          </div>
          <img
            className="h-14 w-14 rounded object-cover"
            alt="User avatar"
            src="/mask-group@2x.png"
          />
        </div>
        {/* Search bar */}
        <div className="flex items-center max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto rounded-full bg-gray-200 py-3 px-6 gap-3">
  <img
    className="h-6 w-6"
    alt="Search icon"
    src="/icon.svg"
  />
  <input
    className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base"
    placeholder="Search"
    type="text"
  />
</div>


      </div>
    </section>
  );
};

export default FrameComponent1;
