import React from 'react';
import hero from "../assets/hero.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bottom-8">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src= {hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white">
        {/* <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Discover Your Dream Dress
        </h1> */}
        {/* <p className="text-lg md:text-xl mb-6">
          Elegant bridal dresses for your special day.
        </p> */}
        <button className="absolute bottom-6 left-3 px-6 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-900 transition duration-300">
          Book - Appointment
        </button>
      </div>
    </div>
  );
};

export default HeroSection;