
'use client'
import React from 'react';
import Image from 'next/image';
import LawSection from "../../public/assests/LawSection.png"
import CaseAnalysis from "../../public/assests/CaseAnalysis.png"
import Summarize from "../../public/assests/Summarize.png"
import Drafting from "../../public/assests/Drafting.png"

const Content = () => {
  const router = useRouter();
  
  const goToSignIn = () => {
    router.push('/promptscreen');
  };
  return (
    <div className="flex justify-center p-6 bg-pink-100">
      <div className="max-w-6xl w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section of Law Card */}
          <div className="flex flex-col bg-purple-600 rounded-lg p-4 md:p-6 shadow hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <Image
              className="h-20 w-20 mb-4 mx-auto"
              src={LawSection}
              alt="Sections of Law"
            />
            <h2 className="text-xl font-bold mb-2 text-center text-white">Sections of Law</h2>
            <p className="mb-4 text-center text-white">
              Need Help in Judiciary Sections of Law?
            </p>
            <div className="flex justify-center mt-auto">
              <button className="bg-white text-purple-600 hover:bg-purple-200 rounded-full py-3 px-8 font-semibold">
                Sections
              </button>
            </div>
          </div>

          {/* Case Analysis Card */}
          <div className="flex flex-col bg-blue-500 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image
              className="h-20 w-20 mb-4 mx-auto"
              alt="Case Analysis"
              src={CaseAnalysis}
            />
            <h2 className="text-xl font-bold mb-2 text-center text-white">Case Analysis</h2>
            <p className="mb-4 text-center text-white">
              Analyse Real Case Records with AI.
            </p>
            <div className="flex justify-center mt-auto">
              <button className="bg-white text-blue-500 hover:bg-blue-200 rounded-full py-3 px-8 font-semibold">
            <div className="mt-auto">
              <button onClick={goToSignIn} className="bg-white text-blue-500 hover:bg-blue-200 rounded-full py-3 px-8 font-semibold">
                Analyse
              </button>
            </div>
          </div>

          {/* Summarize Card */}
          <div className="flex flex-col bg-purple-400 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image
              className="h-20 w-20 mb-4 mx-auto"
              alt="Summarize"
              src={Summarize}
            />
            <h2 className="text-xl font-bold mb-2 text-center text-white">Summarize</h2>
            <p className="mb-4 text-center text-white">
              Summarize long Law Terms
            </p>
            <div className="flex justify-center mt-auto">
              <button className="bg-white text-purple-400 hover:bg-purple-200 rounded-full py-3 px-8 font-semibold">
            <div className="mt-auto">
              <button onClick={goToSignIn} className="bg-white text-purple-400 hover:bg-purple-200 rounded-full py-3 px-8 font-semibold">
                Summarize
              </button>
            </div>
          </div>

          {/* Drafting Card */}
          <div className="flex flex-col bg-fuchsia-500 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image
              className="h-20 w-20 mb-4 mx-auto"
              alt="Drafting"
              src={Drafting}
            />
            <h2 className="text-xl font-bold mb-2 text-center text-white">Drafting</h2>
            <p className="mb-4 text-center text-white">
              Need Help With Drafting?
            </p>
            <div className="flex justify-center mt-auto">
              <button className="bg-white text-fuchsia-500 hover:bg-fuchsia-200 rounded-full py-3 px-8 font-semibold">
            <div className="mt-auto">
              <button onClick={goToSignIn} className="bg-white text-fuchsia-500 hover:bg-fuchsia-200 rounded-full py-3 px-8 font-semibold">
                Drafting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
