import React from 'react';
import Image from 'next/image';

export default function PersonalInfo() {
  return (
    <div className="flex w-full bg-gradient-to-b h-screen from-gray-900 via-gray-800 to-gray-700">
      {/* Sidebar Placeholder */}
      <aside className="w-1/4 hidden lg:block bg-gray-800 h-full">
        {/* Content for the sidebar can go here */}
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between w-full lg:w-3/4 h-full text-white overflow-hidden relative">
        {/* Background Design Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-indigo-700 opacity-30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-60 h-60 md:w-96 md:h-96 bg-yellow-400 opacity-20 rounded-full filter blur-2xl animate-bounce-slow" />

        {/* Left Side - Text Section */}
        <div className="lg:w-2/3 w-11/12 max-w-2xl space-y-4 md:space-y-6 p-4 md:p-6 lg:ml-12 animate-fadeIn text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-400 animate-slideIn">
            Hi, I&apos;m DAYAN UL-HAQ
          </h1>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed tracking-wide text-gray-300">
            I am a self-motivated, ambitious person with a responsible approach to any task I undertake.
            <br />
            I&apos;m a Full Stack developer with skills in Web Apps Development, bringing 2 years of mobile development and 4 years in web development experience. Known for my creative, adaptable nature and detail-oriented approach, I’m passionate about working collaboratively towards professional excellence in a dynamic digital brand.
          </p>

          {/* Hire Me Button */}
          <a
            href="mailto:dayanzafar070@gmail.com?subject=Hiring Inquiry&body=Hi Dayan, your expertise caught my attention, and I'd be thrilled to explore how we can work together. Let's connect to discuss potential opportunities!"
            className="inline-block mt-4 md:mt-6 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-gray-900 bg-yellow-400 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/50 animate-pulse-slow"
          >
            Hire Me
          </a>
        </div>

        {/* Right Side - Image Section */}
        <div className="lg:w-1/3 w-3/4 sm:w-1/2 flex justify-center lg:mr-12 animate-float">
          <Image
            src="/IMAGES/Hero.png"
            alt="Portrait of Dayan Ul-Haq"
            width={240}
            height={240}
            className="rounded-full shadow-xl shadow-indigo-700/50 transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        {/* Custom CSS for Animations */}
        <style jsx>{`
          .animate-fadeIn {
            animation: fadeIn 1.5s ease-in-out forwards;
          }
          .animate-slideIn {
            animation: slideIn 1.5s ease-out forwards;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse 4s infinite;
          }
          .animate-bounce-slow {
            animation: bounce 10s infinite;
          }

          /* Keyframes */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </div>
    </div>
  );
}
