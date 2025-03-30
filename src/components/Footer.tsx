import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a successful subscription
    if (email && email.includes('@')) {
      setSubscribed(true);
      setSubscribeError(false);
      setEmail('');
    } else {
      setSubscribeError(true);
    }
  };
  
  return (
    <footer className="bg-navy-blue text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Department Info */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-6">Rhinebeck Fire Department</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 text-gray-400" />
                <div>
                  <p>76 East Market St.</p>
                  <p>Rhinebeck, NY 12572</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhoneAlt className="mr-2 mt-1 text-gray-400" />
                <div>
                  <p>Phone: (845) 876-3133</p>
                  <p className="font-bold">Emergencies: Dial 911</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* More RBFD Links */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-6">More RBFD</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Officers
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition">
                  Apparatus
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-white transition">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-white transition">
                  Fire Safety
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Email Updates */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-6">RBFD Email Updates</h3>
            <p className="text-gray-300 mb-4">
              Sign up to learn more about RBFD community events, volunteering, and more.
            </p>
            
            {subscribed ? (
              <div className="text-green-400 flex items-center space-x-2">
                <span>✌️ Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-fire-red"
                  />
                  {subscribeError && (
                    <p className="text-red-400 text-sm mt-1">Please enter a valid email address</p>
                  )}
                </div>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-fire-red text-white rounded-sm hover:bg-red-700 transition"
                >
                  Subscribe
                </button>
              </form>
            )}
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-lg font-bold uppercase mb-4">Follow RBFD</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/RhinebeckFire/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 text-2xl hover:text-white transition"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="https://www.instagram.com/rhinebeckfd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 text-2xl hover:text-white transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy;{currentYear} - Rhinebeck Fire Department. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 