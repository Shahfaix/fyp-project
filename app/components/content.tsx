import React from 'react';

const Content = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-pink-100">
      {/* Section of Law Card */}
      <div className=" bg-purple-600 rounded-lg p-4 flex-1">
        <img
          className="h-14 w-14 mb-2"
          alt="Sections of Law"
          src="/group-1597881233.svg"
        />
        <h2 className="text-lg font-semibold mb-1">Sections of Law</h2>
        <p className="mb-3">
          Need Help in Judiciary Sections of Law?
        </p>
        <button className="bg-white text-gray-900 hover:bg-gray-200 rounded-full py-1 px-4 text-sm font-semibold">
  Search Sections
</button>

      </div>

      {/* Case Analysis Card */}
      <div className="bg-blue-500 rounded-lg p-4 flex-1">
        <img
          className="h-14 w-14 mb-2"
          alt="Case Analysis"
          src="/group-1597881236.svg"
        />
        <h2 className="text-lg font-semibold mb-1">Case Analysis</h2>
        <p className="mb-3">
          Analyse Real Case Records with AI.
        </p>
        <button className="bg-white text-gray-900 hover:bg-gray-200 rounded-full py-2 px-6 font-semibold">
          Analyse
        </button>
      </div>

      {/* Summarize Card */}
      <div className="bg-purple-400 rounded-lg p-4 flex-1">
        <img
          className="h-14 w-14 mb-2"
          alt="Summarize"
          src="/group-1597881233-1.svg"
        />
        <h2 className="text-lg font-semibold mb-1">Summarize</h2>
        <p className="mb-3">
          Summarize long Law Terms
        </p>
        <button className="bg-white text-gray-900 hover:bg-gray-200 rounded-full py-2 px-6 font-semibold">
          Summarize
        </button>
      </div>

      {/* Drafting Card */}
      <div className="bg-fuchsia-500 rounded-lg p-4 flex-1">
        <img
          className="h-14 w-14 mb-2"
          alt="Drafting"
          src="/group-1597881236-1.svg"
        />
        <h2 className="text-lg font-semibold mb-1">Drafting</h2>
        <p className="mb-3">
          Need Help With Drafting?
        </p>
        <button className="bg-white text-gray-900 hover:bg-gray-200 rounded-full py-2 px-6 font-semibold">
          Drafting
        </button>
      </div>
    </div>
  );
};

export default Content;
