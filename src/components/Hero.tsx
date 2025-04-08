import React from 'react';
import Link from 'next/link';
import { 
  UsersThree, 
  Envelope, 
  Warning 
} from 'phosphor-react';

const Hero = () => {
  return (
    <div className="relative h-[85vh] min-h-[600px]">
      {/* Background Image - using standard img tag instead of WebflowImage to avoid issues */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/RBFD-hero.png"
          alt="Rhinebeck Fire Department"
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Enhanced Dark Gradient Overlay - more dramatic and modern */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-4 md:px-8 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            Rhinebeck Fire Department
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-white drop-shadow-md font-light">
            Protecting Our Community Since 1834
          </h2>
          <p className="text-xl mx-auto max-w-2xl mb-10 text-white/90 drop-shadow">
            We are a volunteer department committed to providing professional fire protection, 
            rescue services, and public education to the Rhinebeck community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/join" 
              className="bg-fire-red text-white px-8 py-4 rounded-md inline-flex items-center font-bold text-lg hover:bg-red-700 transition duration-300 shadow-lg transform hover:-translate-y-1"
            >
              <UsersThree size={24} weight="bold" className="mr-2" /> Join Our Team
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-md inline-flex items-center font-bold text-lg hover:bg-white/20 transition duration-300 shadow-lg transform hover:-translate-y-1"
            >
              <Envelope size={24} weight="bold" className="mr-2" /> Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Emergency Info Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-fire-red to-red-700 text-white py-4 z-10 shadow-lg">
        <div className="container mx-auto text-center flex items-center justify-center">
          <Warning size={24} weight="fill" className="mr-2 animate-pulse" />
          <p className="font-bold text-lg">For Emergencies, Call 911</p>
        </div>
      </div>
    </div>
  );
};

export default Hero; 