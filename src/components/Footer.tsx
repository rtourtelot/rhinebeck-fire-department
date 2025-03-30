import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-blue text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <p>76 East Market Street, Rhinebeck, NY 12572</p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <p>Non-Emergency: (845) 876-6008</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@rhinebeckfd.com" className="hover:text-gray-300">
                  info@rhinebeckfd.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-gray-300 transition">
                  Join Our Department
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-gray-300 transition">
                  Fire Safety Resources
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gray-300 transition">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 text-2xl mb-6">
              <a 
                href="https://www.facebook.com/RhinebeckFire/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-fire-red transition"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.instagram.com/rhinebeckfd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-fire-red transition"
              >
                <FaInstagram />
              </a>
            </div>
            <div>
              <p className="mb-2">
                For emergencies, always call <span className="font-bold">911</span>
              </p>
              <p>
                For non-emergencies, please contact us during business hours.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Rhinebeck Fire Department. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Protecting the village of Rhinebeck since 1834
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 