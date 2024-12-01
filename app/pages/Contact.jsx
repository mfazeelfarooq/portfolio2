import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="flex bg-gradient-to-br from-indigo-900 via-gray-900 bg-gradient-to-br from-gray-900 via-black to-gray-800 font-[Poppins] min-h-screen">
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
          Have a project, an idea, or just want to say hello? Let's collaborate and bring your vision to life with cutting-edge technology.
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
          </div>
        </div>
      </div>
    </div>
  );
}
