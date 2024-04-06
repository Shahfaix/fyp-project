import React from 'react';

const FrameComponent = () => {
  return (
    <section className="flex flex-col items-start p-0 gap-3.5 w-80 h-32 border-box bg-white">
      <div className="flex w-full justify-between items-center">
        <div className="text-2xl font-semibold tracking-tight">
          Category
        </div>
        <button className="text-blue-800 text-base tracking-tight cursor-pointer">
          See All
        </button>
      </div>
      <div className="flex w-full items-center gap-3 rounded-full border border-gray-200 py-3 px-2.5">
        <img
          className="h-5 w-5"
          alt=""
          src="/icons/data.svg" // Replace with your image path
        />
        <button className="text-blue-800 text-base tracking-tight cursor-pointer">
          Summerize
        </button>
      </div>
      <div className="flex w-full items-center gap-3 rounded-full border border-gray-200 py-3 px-2.5">
        <img
          className="h-5 w-5"
          alt=""
          src="/icons/data.svg" // Replace with your image path
        />
        <button className="text-blue-800 text-base tracking-tight cursor-pointer">
          Case Analysis
        </button>
      </div>
      <div className="flex items-center gap-3 rounded-full border border-gray-200 py-3 px-2.5">
        <img
          className="h-5 w-5"
          alt=""
          src="/icons/book.svg" // Replace with your image path
        />
        <button className="tracking-tight">
          Law sections
        </button>
      </div>
    </section>
  );
};

export default FrameComponent;
