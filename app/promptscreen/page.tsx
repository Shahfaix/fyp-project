// pages/index.js
'use client'
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {
  const [version, setVersion] = useState('Summerize');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeVersion = (version:any) => {
    setVersion(version);
    setDropdownOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>{version} Interface</title>
      </Head>
      <aside className="w-64 bg-customGray text-white p-6 space-y-6">
        <div className="text-3xl font-bold">
          <span className="bg-black rounded-md p-2">{version}</span>
        </div>
        <nav className="flex flex-col space-y-1">
          <a href="#" className="text-gray-400 hover:text-white">Dashboard</a>
          {/* ... more links */}
        </nav>
        <div className="mt-auto">
          {/* ... additional content */}
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="px-8 py-4 flex justify-between items-center border-b border-gray-300">
          <button onClick={()=>{
            router.back()
          }} className="text-blue-500 bg-white hover:bg-blue-100 font-semibold py-2 px-4 border border-blue-500 rounded shadow">
            Back
          </button>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-blue-500 bg-white hover:bg-blue-100 font-semibold py-2 px-4 border border-blue-500 rounded shadow">
              {version} <span className="caret"></span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 bg-white shadow-md mt-2 rounded-md overflow-hidden z-10">
                <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 w-full text-left" onClick={() => changeVersion('Summarize')}>Summarize</button>
                <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 w-full text-left" onClick={() => changeVersion('Analysis')}>Analysis</button>
                <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 w-full text-left" onClick={() => changeVersion('Drafting')}>Drafting</button>
                <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 w-full text-left" onClick={() => changeVersion('Sections')}>Sections</button>
              </div>
            )}
          </div>
        </header>
        
        <div className="flex-grow p-8 flex flex-col justify-between">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">How can I help you today?</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button className="bg-purple-300 p-6 rounded-lg shadow-md hover:shadow-lg transition text-back">
              Option 1
            </button>
            <button className="bg-blue-300 p-6 rounded-lg shadow-md hover:shadow-lg transition text-back">
              Option 2
            </button>
            {/* ... More buttons ... */}
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="write a next js professional code to make a screen..."
              className="flex-1 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start md:self-center">
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
