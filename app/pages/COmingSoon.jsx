import React from 'react';

export default function COmingSoon() {
  return (
    <div className="coming-soon-container flex justify-center items-center h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-6 md:p-12">
      <div className="coming-soon-content bg-gray-800 bg-opacity-90 items-center shadow-2xl m-6 md:m-12 rounded-lg p-8 md:p-16 text-center animate__animated animate__fadeInRight">
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-400 items-center animate-pulse tracking-wider mb-4 md:mb-6">
          COMING SOON
        </h1>
        <p className="text-base md:text-lg text-gray-300 font-medium mt-2 md:mt-4 px-4">
          Stay tuned for something amazing!
        </p>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .coming-soon-content {
          box-shadow: 0px 0px 15px 5px rgba(0, 0, 128, 0.5);
          transition: transform 0.3s ease;
        }
        .coming-soon-content:hover {
          transform: scale(1.05) rotate(-1deg);
        }
      `}</style>
    </div>
  );
}
