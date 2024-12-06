import React from 'react';

export default function Experience() {
  return (
    <div className="flex bg-gradient-to-br from-indigo-900 via-gray-900 to-black font-[Poppins] min-h-screen">
      {/* Left Spacer (25%) */}
      <div className="w-[25%] hidden md:block"></div>

      {/* Right Content (75%) */}
      <div className="w-full md:w-[75%] flex flex-col items-center py-16 px-6 relative">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-black opacity-70 -z-10"></div>
        <div className="absolute h-[200px] w-[200px] rounded-full bg-indigo-500 blur-[150px] opacity-40 top-10 left-10 animate-pulse"></div>
        <div className="absolute h-[200px] w-[200px] rounded-full bg-indigo-400 blur-[150px] opacity-40 bottom-20 right-10 animate-pulse"></div>

        {/* Title Section */}
        <h1 className="text-6xl font-extrabold text-indigo-400 mb-6 animate-fade-in-up drop-shadow-lg">
          My Experience
        </h1>
        <p className="text-xl text-center text-indigo-200 max-w-3xl mb-12 animate-slide-in">
          Here's a snapshot of my professional journey and the projects I've worked on. Let's dive into the details of the impactful experiences I've gathered.
        </p>

        {/* Experience List */}
        <div className="space-y-8  via-gray-900 w-full max-w-3xl">
          <div className="flex flex-col gap-4 bg-gradient-to-br from-indigo-900 via-gray-900 bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-500">
            <h3 className="text-2xl font-semibold text-indigo-300">Web Development Team Collaboration</h3>
            <p className="text-lg text-indigo-200">
              Collaborated with a dynamic web development team to create and maintain responsive websites for clients, resulting in enhanced user experiences.
            </p>
          </div>
          
          <div className="flex flex-col bg-gradient-to-br from-indigo-900 via-gray-900 gap-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-500">
            <h3 className="text-2xl font-semibold text-indigo-300">Freelance Web Developer</h3>
            <p className="text-lg text-indigo-200">
              Worked as a freelancer on assignment projects, delivering custom websites and applications tailored to client needs.
            </p>
          </div>

          <div className="flex flex-col bg-gradient-to-br from-indigo-900 via-gray-900 gap-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-500">
            <h3 className="text-2xl font-semibold text-indigo-300">C++ & Python Projects</h3>
            <p className="text-lg text-indigo-200">
              Implemented various projects using C++ and Python, focusing on both academic and practical use cases.
            </p>
          </div>

          <div className="flex flex-col bg-gradient-to-br from-indigo-900 via-gray-900 gap-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-500">
            <h3 className="text-2xl font-semibold text-indigo-300">Responsive Web Design Implementation</h3>
            <p className="text-lg text-indigo-200">
              Implemented responsive web design principles, leading to a notable 15% increase in mobile user engagement and an overall improved user experience.
            </p>
          </div>

          <div className="flex flex-col bg-gradient-to-br from-indigo-900 via-gray-900 gap-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-500">
            <h3 className="text-2xl font-semibold text-indigo-300">Technologies Used</h3>
            <p className="text-lg text-indigo-200">
              Leveraged a diverse set of web development technologies, including HTML, CSS, JavaScript, and React, to craft interactive and feature-rich web interfaces.
            </p>
          </div>

          <div className="flex flex-col bg-gradient-to-br from-indigo-900 via-gray-900 gap-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-500">
            <h3 className="text-2xl font-semibold text-indigo-300">Part-time Full-Stack Developer</h3>
            <p className="text-lg text-indigo-200">
              Currently working as a part-time full-stack developer at System Heuristics, focusing on both backend and frontend development to deliver scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
