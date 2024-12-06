import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

export default function Contact() {
  return (
    <div className="flex bg-gradient-to-br from-gray-900 via-black to-gray-800 font-[Poppins] min-h-screen">
      {/* Left Spacer (30%) */}
      <div className="w-[30%] hidden md:block"></div>

      {/* Right Content (70%) */}
      <div className="w-full md:w-[70%] flex flex-col items-center py-16 px-6 relative">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-black opacity-70 -z-10"></div>
        <div className="absolute h-[200px] w-[200px] rounded-full bg-indigo-500 blur-[150px] opacity-40 top-10 left-10 animate-pulse"></div>
        <div className="absolute h-[200px] w-[200px] rounded-full bg-indigo-400 blur-[150px] opacity-40 bottom-20 right-10 animate-pulse"></div>

        {/* Title Section */}
        <h1 className="text-6xl font-extrabold text-indigo-400 mb-6 animate-fade-in-up drop-shadow-lg">
          Get in Touch
        </h1>
        <p className="text-xl text-center text-indigo-200 max-w-3xl mb-12 animate-slide-in">
          Have a project, an idea, or just want to say hello? Let&apos;s collaborate and bring your vision to life with cutting-edge technology.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          {/* Left: Profile Image */}
          <div className="flex flex-col items-center w-full lg:w-[40%]">
            <Image
              src="/IMAGES/DAYAN.jpg"
              alt="Portrait of Dayan Ul-Haq"
              width={280}
              height={280}
              className="rounded-full shadow-2xl border-4 border-indigo-600 hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Right: Social Links */}
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold text-indigo-300">Connect With Me</h2>
            <div className="flex gap-8 animate-zoom-in">
              <a
                href="https://www.instagram.com/dayan_ul_haq/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#E1306C] text-6xl hover:text-[#C13584] drop-shadow-lg"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#1877F2] text-6xl hover:text-[#145DBF] drop-shadow-lg"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-dayyan1"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-[#5ab1e0] text-6xl hover:text-[#84b1c9] drop-shadow-lg"
                />
              </a>
            </div>

            {/* Email Section */}
            <div className="mt-12 relative p-8 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl shadow-2xl transform hover:scale-105 hover:shadow-[0px_0px_50px_rgba(79,70,229,0.8)] transition-transform duration-500">
              {/* Glow Effect */}
              <div className="absolute inset-0 blur-3xl bg-gradient-radial from-indigo-400 via-purple-500 to-transparent opacity-40 animate-pulse"></div>

              <h3 className="text-3xl text-white font-semibold mb-4 text-center">
                Or Reach Me by Email:
              </h3>
              <a
                href="mailto:dayanzafar070@gmail.com"
                className="flex justify-center items-center text-2xl text-white font-bold hover:text-indigo-200 transition duration-300 gap-4"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-4xl text-white transform hover:scale-125 transition duration-300"
                />
                <span className="relative after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-indigo-200 after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  dayanzafar070@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
