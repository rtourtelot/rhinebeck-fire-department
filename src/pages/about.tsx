import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { FaHistory, FaTrophy, FaUsers, FaFireExtinguisher } from 'react-icons/fa';
import WebflowImage from '@/components/WebflowImage';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Rhinebeck Fire Department</title>
        <meta name="description" content="Learn about the Rhinebeck Fire Department's history, mission, values, and the dedicated team serving our community." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[300px]">
          <WebflowImage
            src="/images/about-hero.jpg"
            alt="Rhinebeck Fire Department Team"
            className="absolute inset-0 z-0"
            isBackground
            priority
          />
          <div className="relative z-10 container mx-auto h-full flex flex-col justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">About Our Department</h1>
          </div>
        </div>
        
        {/* Mission & Vision */}
        <section className="py-16 container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-12">
              The Rhinebeck Fire Department is dedicated to preserving life and property through prevention, 
              education, and emergency response services delivered with pride and compassion.
            </p>
            
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl">
              To be recognized as a progressive, community-focused fire department and a leader in providing 
              exceptional emergency services through innovation, professionalism, and continuous improvement.
            </p>
          </div>
        </section>
        
        {/* History Timeline */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-12">
              <FaHistory className="text-fire-red text-4xl mr-4" />
              <h2 className="text-3xl font-bold">Our Rich History</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative border-l-4 border-fire-red pl-8 pb-8">
                <div className="absolute w-4 h-4 bg-fire-red rounded-full -left-2 top-0"></div>
                <h3 className="text-2xl font-bold mb-2">1834</h3>
                <p className="mb-6">
                  The Rhinebeck Fire Department was established to protect the village of Rhinebeck 
                  with a hand-drawn pump and bucket brigade.
                </p>
              </div>
              
              <div className="relative border-l-4 border-fire-red pl-8 pb-8">
                <div className="absolute w-4 h-4 bg-fire-red rounded-full -left-2 top-0"></div>
                <h3 className="text-2xl font-bold mb-2">1900s</h3>
                <p className="mb-6">
                  The department acquired its first motorized fire engine, replacing horse-drawn equipment 
                  and modernizing emergency response capabilities.
                </p>
              </div>
              
              <div className="relative border-l-4 border-fire-red pl-8 pb-8">
                <div className="absolute w-4 h-4 bg-fire-red rounded-full -left-2 top-0"></div>
                <h3 className="text-2xl font-bold mb-2">1950s</h3>
                <p className="mb-6">
                  Expanded services to include rescue operations beyond fire suppression, adding 
                  specialized rescue equipment to the department's capabilities.
                </p>
              </div>
              
              <div className="relative border-l-4 border-fire-red pl-8 pb-8">
                <div className="absolute w-4 h-4 bg-fire-red rounded-full -left-2 top-0"></div>
                <h3 className="text-2xl font-bold mb-2">1975</h3>
                <p className="mb-6">
                  Current fire station built at 76 East Market Street, providing a modern headquarters 
                  for the department's operations.
                </p>
              </div>
              
              <div className="relative border-l-4 border-fire-red pl-8">
                <div className="absolute w-4 h-4 bg-fire-red rounded-full -left-2 top-0"></div>
                <h3 className="text-2xl font-bold mb-2">Today</h3>
                <p>
                  The Rhinebeck Fire Department continues to evolve with state-of-the-art equipment, 
                  enhanced training programs, and a dedicated team of volunteer firefighters committed 
                  to serving the community.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Department Stats */}
        <section className="py-16 container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Department Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-fire-red text-4xl mb-4 flex justify-center">
                <FaUsers />
              </div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-gray-700">Volunteer Members</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-fire-red text-4xl mb-4 flex justify-center">
                <FaFireExtinguisher />
              </div>
              <h3 className="text-2xl font-bold mb-2">400+</h3>
              <p className="text-gray-700">Annual Calls</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-fire-red text-4xl mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">10 mi²</h3>
              <p className="text-gray-700">Coverage Area</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-fire-red text-4xl mb-4 flex justify-center">
                <FaTrophy />
              </div>
              <h3 className="text-2xl font-bold mb-2">190+</h3>
              <p className="text-gray-700">Years of Service</p>
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Leadership cards would go here - using placeholders */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <WebflowImage
                    src="/images/chief.jpg"
                    alt="Fire Chief"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">John Smith</h3>
                  <p className="text-fire-red font-medium mb-3">Fire Chief</p>
                  <p className="text-gray-700">
                    25 years of service with the department, leading our team with dedication and expertise.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <WebflowImage
                    src="/images/assistant-chief.jpg"
                    alt="Assistant Chief"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-fire-red font-medium mb-3">Assistant Chief</p>
                  <p className="text-gray-700">
                    18 years of service, specializing in training and emergency management protocols.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <WebflowImage
                    src="/images/captain.jpg"
                    alt="Captain"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Michael Davis</h3>
                  <p className="text-fire-red font-medium mb-3">Captain</p>
                  <p className="text-gray-700">
                    15 years of service, focusing on community outreach and fire prevention education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-navy-blue text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              We're always looking for dedicated individuals to join the Rhinebeck Fire Department. 
              No experience needed - we provide all the necessary training.
            </p>
            <a href="/join" className="btn btn-primary">Learn About Joining</a>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AboutPage; 