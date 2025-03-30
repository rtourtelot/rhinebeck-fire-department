import React from 'react';
import Link from 'next/link';
import WebflowImage from './WebflowImage';

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px]">
      {/* Background Image */}
      <WebflowImage
        src="/images/hero-image.jpg"
        alt="Rhinebeck Fire Department"
        className="absolute inset-0 z-0"
        isBackground
        priority
      />
      
      {/* Dark Gradient Overlay - from top to bottom, matching original site */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/75 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Rhinebeck Fire Department
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-white">
            Protecting Our Community Since 1834
          </h2>
          <p className="text-xl max-w-2xl mb-8 text-white">
            We are a volunteer department committed to providing professional fire protection, 
            rescue services, and public education to the Rhinebeck community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/join" 
              className="bg-fire-red text-white px-8 py-3 inline-block font-bold text-lg hover:bg-red-700 transition duration-300"
            >
              Join Our Team
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-navy-blue px-8 py-3 inline-block font-bold text-lg hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Emergency Info Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-fire-red text-white py-3 z-10">
        <div className="container mx-auto text-center">
          <p className="font-bold">For Emergencies, Call 911</p>
        </div>
      </div>
    </div>
  );
};

export default Hero; 