import React from 'react';

export default function Education() {
  return (
    <div className="flex w-full bg-gradient-to-b h-screen from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Sidebar (30% width) */}
      <aside className="w-1/4 hidden lg:block bg-gray-800 h-full">
        {/* Sidebar content can go here */}
      </aside>

      {/* Main content area */}
      <div className="flex flex-col lg:flex-row items-center justify-center h-[92vh] w-full lg:w-3/4 text-center lg:text-left pb-8 relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-indigo-700 opacity-30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-60 h-60 md:w-96 md:h-96 bg-yellow-400 opacity-20 rounded-full filter blur-2xl animate-bounce-slow" />

        {/* Education Details in a Row */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 max-w-5xl w-full z-10">
          {/* Matriculation */}
          <div className="w-full lg:w-1/3 bg-gray-700 p-6 rounded-lg shadow-xl transform hover:scale-110 hover:rotate-2 transition duration-500 ease-in-out animate-float">
            <h3 className="text-2xl font-bold text-indigo-400">Matriculation</h3>
            <p className="text-yellow-400 text-lg mt-2">2019</p>
            <p className="mt-3 text-gray-300">
              Completed matriculation from The Al-Umar, Lahore with <span className="font-semibold">90%</span>.
            </p>
          </div>

          {/* Intermediate */}
          <div className="w-full lg:w-1/3 bg-gray-700 p-6 rounded-lg shadow-xl transform hover:scale-110 hover:-rotate-2 transition duration-500 ease-in-out animate-float delay-200">
            <h3 className="text-2xl font-bold text-indigo-400">Intermediate</h3>
            <p className="text-yellow-400 text-lg mt-2">2021</p>
            <p className="mt-3 text-gray-300">
              Completed intermediate studies at Punjab Group of Colleges, Lahore.
            </p>
          </div>

          {/* Graduation */}
          <div className="w-full lg:w-1/3 bg-gray-700 p-6 rounded-lg shadow-xl transform hover:scale-110 hover:rotate-2 transition duration-500 ease-in-out animate-float delay-400">
            <h3 className="text-2xl font-bold text-indigo-400">Graduation</h3>
            <p className="text-yellow-400 text-lg mt-2">2021 - Present</p>
            <p className="mt-3 text-gray-300">
              Pursuing a Bachelor in Computer Science (BSCS) at UCP.
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 4s infinite;
        }
        .animate-bounce-slow {
          animation: bounce 10s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
