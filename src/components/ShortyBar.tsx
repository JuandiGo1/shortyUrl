import React from "react";

const ShortyBar: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-4xl  h-auto py-10   ">
      <h1 className="text-4xl font-semibold mb-10">ShortyUrl</h1>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Enter your link to short"
          id="linkInput"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-2xl"
        />
        <button id="short-btn" className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <span className="mr-2">Short URL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.121 14.121a3 3 0 000-4.242L9.88 5.636a3 3 0 00-4.242 4.242l4.242 4.243a3 3 0 004.242 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.242 16.242a3 3 0 01-4.242 0l-4.243-4.242a3 3 0 010-4.242"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ShortyBar;