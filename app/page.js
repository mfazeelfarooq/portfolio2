"use client";
import React, { useState } from 'react';
import {
  FaUser, FaGraduationCap, FaProjectDiagram,
  FaBriefcase, FaRegStar, FaEnvelope, FaShoppingCart, FaBars
} from "react-icons/fa";
import PersonalInfo from "./pages/PersonalInfo";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import COmingSoon from "./pages/COmingSoon";

import Contact from "./pages/Contact";
import PlaceOrder from "./pages/PlaceOrder";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(<PersonalInfo />);
  const [showSidebar, setShowSidebar] = useState(false);

  const handlePageChange = (pageComponent) => {
    setCurrentPage(pageComponent);
    setShowSidebar(false); // Close sidebar on page change
  };

  return (
    <div className=" flex flex-col text-white font-sans bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 relative">
      {/* Navbar with Menu Icon for Small Screens */}
      <header className="flex items-center justify-between w-full p-4 bg-gray-900 shadow-lg md:hidden">
        <h1 className="text-xl font-bold text-white">My Portfolio</h1>
        {/* Mobile Menu Button */}
        <button
          className="p-2 rounded-full bg-indigo-700 hover:bg-indigo-600 transition duration-300"
          onClick={() => setShowSidebar(!showSidebar)} // Toggle sidebar visibility
        >
          <FaBars className="text-2xl text-white" />
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 md:w-1/4 p-4 flex flex-col items-start space-y-8 shadow-lg shadow-gray-800 clip-path-custom transform transition-transform duration-500 ease-in-out z-30 ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black`}>
        <div className="flex flex-col items-start mt-2 space-y-4">
          {[
            { icon: <FaUser />, label: "Personal Info", component: <PersonalInfo /> },
            { icon: <FaGraduationCap />, label: "Education", component: <Education /> },
            { icon: <FaProjectDiagram />, label: "Projects", component: <Projects /> },
            { icon: <FaBriefcase />, label: "Experience", component: <Experience /> },
            { icon: <FaRegStar />, label: "Skills", component: <Skills /> },
            { icon: <FaEnvelope />, label: "Contact", component: <Contact /> },
            //{ icon: <FaShoppingCart />, label: "Place Order", component: <PlaceOrder /> },
            { icon: <FaShoppingCart />, label: "Place Order", component: <COmingSoon /> },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(item.component)} // Set current page on click
              className="flex items-center justify-start text-white bg-gray-300 p-4 rounded-full transform transition hover:bg-gray-400 hover:scale-110 relative group"
            >
              <span className="text-2xl">{item.icon}</span>
              {/* Tooltip for label */}
              <span className="opacity-0 ml-2 group-hover:opacity-100 bg-gray-700 text-white text-sm px-2 py-1 rounded-md absolute left-full transform -translate-x-1/2">
                {item.label}  
              </span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main content area */}
      <main className={`flex-1 p-4 md:p-8 transition-all duration-300 ${showSidebar ? 'opacity-50' : 'opacity-100'}`}>
        {currentPage}
      </main>

      {/* Overlay for Sidebar on Mobile */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setShowSidebar(false)} // Close sidebar on overlay click
        ></div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .clip-path-custom {
          clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
        }
        .animate-gradient {
          animation: gradientAnimation 10s ease infinite;
        }
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
