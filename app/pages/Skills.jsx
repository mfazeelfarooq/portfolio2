import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiSqlite, SiExpress, SiNextdotjs, SiTailwindcss, SiCplusplus, SiKotlin, SiMongodb, SiAndroidstudio } from 'react-icons/si';

const skillsList = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'Python', icon: <FaPython className="text-blue-400" /> },
  { name: 'Django', icon: <SiDjango className="text-green-700" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
  { name: 'SQLite', icon: <SiSqlite className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'React', icon: <FaReact className="text-blue-300" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
  { name: 'Kotlin', icon: <SiKotlin className="text-purple-500" /> },
  { name: 'Android Studio', icon: <SiAndroidstudio className="text-green-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> }
];

export default function Skills() {
  return (
    <div className="skills-container w-full flex justify-end h-screen pr-8">
      <div className="skills-content w-full md:w-7/10 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 rounded-lg shadow-lg flex flex-wrap gap-8 animate__animated animate__fadeInRight">
        
        <h2 className="text-3xl font-bold text-indigo-400 mb-4">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsList.map((skill, index) => (
            <div 
              key={index} 
              className="skill-box group bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center transform hover:rotate-3 hover:scale-110 hover:bg-gray-600 transition duration-300 border-navy"
            >
              <div className="text-4xl mb-2 group-hover:animate-pulse transition duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .skills-container {
          display: flex;
        }
        .skills-content {
          width: 70%;
          padding-right: 2rem;
        }
        .border-navy {
          box-shadow: 0px 0px 15px 5px rgba(0, 0, 128, 0.5);
        }
      `}</style>
    </div>
  );
}
