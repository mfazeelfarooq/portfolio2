import React from 'react';

export default function Projects() {
  return (
    <div className="projects-container bg-gradient-to-br from-indigo-900 via-gray-900 w-full flex items-center justify-end pr-8 animate-containerZoom">
      {/* Main Projects Section */}
      <div className="projects-content w-full md:w-5/10   bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 rounded-lg shadow-2xl flex flex-col space-y-6 animate-fadeInRight">
        
        <h2 className="text-3xl font-bold text-indigo-400 mb-4">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Box 1 */}
          <div
            className="project-box group bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-3xl transition transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-icon animate-pulseShadow"
            onClick={() => window.open('https://www.linkedin.com/feed/update/urn:li:activity:7246721463242690561?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7246721463242690561%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6UpXUDbnQhSSIVnyUz%2Bi1Q%3D%3D', '_blank')}
          >
            <img
              src="/IMAGES/ERP.PNG"
              alt="Company ERP System"
              className="w-full h-48 object-cover rounded-md mb-4 group-hover:scale-110 transition duration-700"
            />
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition">ERP SYSTEM</h3>
            <p className="text-gray-300 group-hover:text-gray-100">
              Built a secure, scalable ERP system to optimize business and employees operations efficiently
            </p>
          </div>
          <div
            className="project-box group bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-3xl transition transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-icon animate-pulseShadow"
            onClick={() => window.open('https://easyquranclass.com/', '_blank')}
          >
            <img
              src="/IMAGES/eqc.PNG"
              alt="Company ERP System"
              className="w-full h-48 object-cover rounded-md mb-4 group-hover:scale-110 transition duration-700"
            />
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition">EASY QURAN CLASS</h3>
            <p className="text-gray-300 group-hover:text-gray-100">
              User friendly, highly responsive dynamic website
            </p>
          </div>

          {/* Project Box 2 */}
          <div
            className="project-box group bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-3xl transition transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-icon animate-pulseShadow"
            onClick={() => window.open('https://www.linkedin.com/feed/update/urn:li:activity:7246434340421664768?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7246434340421664768%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6UpXUDbnQhSSIVnyUz%2Bi1Q%3D%3D', '_blank')}
          >
            <img
              src="/IMAGES/tay.PNG"
              alt="Frontend Project"
              className="w-full h-48 object-cover rounded-md mb-4 group-hover:scale-110 transition duration-700"
            />
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition">BUSSINESS PORTFOLIO</h3>
            <p className="text-gray-300 group-hover:text-gray-100">
              A responsive, user friendly project
            </p>
          </div>
        </div>
        
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .projects-container {
          display: flex;
          animation: containerZoom 5s ease infinite alternate;
        }
        .projects-content {
          width: 70%;
          padding-right: 2rem;
        }
        .animate-icon {
          animation: iconAnimation 5s ease infinite;
        }
        .animate-fadeInRight {
          animation: fadeInRight 1.5s ease forwards;
        }
        @keyframes iconAnimation {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            color: #ffffff;
          }
          25% {
            transform: scale(1.15) rotate(15deg);
            color: #ffbe0b;
          }
          50% {
            transform: scale(1.25) rotate(-15deg);
            color: #fb5607;
          }
          75% {
            transform: scale(1.15) rotate(10deg);
            color: #8338ec;
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(150px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes containerZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulseShadow {
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
          animation: pulseShadow 1.5s infinite ease-in-out;
        }
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
          }
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
}
