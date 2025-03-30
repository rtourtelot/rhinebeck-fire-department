import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaPhone } from 'react-icons/fa';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - Rhinebeck Fire Department</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Head>
      
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
          <div className="text-center max-w-2xl">
            <div className="flex justify-center mb-6">
              <FaExclamationTriangle className="text-fire-red text-8xl" />
            </div>
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-xl mb-8">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            <div className="bg-red-100 border-l-4 border-fire-red p-4 mb-8 text-left">
              <p className="text-fire-red font-medium">
                For emergencies, always call <span className="font-bold">911</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/" 
                className="btn btn-primary flex items-center justify-center"
              >
                <FaHome className="mr-2" /> Return Home
              </Link>
              <Link 
                href="/contact" 
                className="btn bg-navy-blue text-white hover:bg-blue-900 flex items-center justify-center"
              >
                <FaPhone className="mr-2" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Custom404; 