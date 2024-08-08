"use client"
import React, { useRef, useEffect } from 'react';
import { CgAttachment } from 'react-icons/cg';

export default function Dashboard() {
  const textareaRef = useRef(null);

  const handleInput = () => {
    if (textareaRef.current) {
      // Reset height to auto to calculate the scrollHeight correctly
      textareaRef.current.style.height = 'auto'; 
      // Adjust height based on content and maxHeight
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 250)}px`; 
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      handleInput(); 
    }
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4 flex flex-col justify-between">
        <div>
          <div className="mb-6">
            <h1 className="text-xl font-bold">Blazer Model Tim</h1>
          </div>
          <ul className="mb-6">
            <li className="mb-2 text-gray-700"></li>
            <li className="mb-2 text-gray-700"></li>
            <li className="mb-2 text-gray-700"></li>
            <li className="mb-2 text-gray-700"></li>
            <li className="mb-2 text-gray-700"></li>
          </ul>
          <div className="text-gray-500 cursor-pointer">See more</div>
        </div>
        <div>
          <button className="text-white py-2 px-4 rounded-full bg-black w-full hover:bg-gray-800">
            LOGOUT
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center mb-8">
          {/* Add your main content here */}
        </div>

        {/* Message Box */}
        <div className="p-4 border-t border-gray-200 flex justify-center">
          <div className="relative flex items-center w-full max-w-5xl">
            <div className="absolute bottom-4 left-0 flex items-center pl-5">
            <CgAttachment size={23} />

            </div>

            <textarea
              ref={textareaRef}
              className="pl-12 flex-1 bg-zinc-100 border border-gray-300 rounded-3xl py-4 px-4 resize-none focus:outline-none"
              placeholder="Type your message here..."
              rows="1"
              onInput={handleInput}
              style={{
                maxHeight: '250px', 
                minHeight: '50px',
              }}
            />

            <button className="bg-zinc-900 text-white px-2 py-2 rounded-full ml-2 hover:bg-zinc-950 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
