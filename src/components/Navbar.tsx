import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50">
      {/* Main navbar with dark gradient background */}
      <div className="bg-gradient-to-b from-[#262d36] to-[#1a2029] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo section */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img 
                  src="/images/main-logo.svg" 
                  alt="Rhinebeck Fire Department Logo"
                  width={370}
                  height={45}
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavItem href="/" text="HOME" />
              <NavItem href="/about" text="ABOUT US" />
              <NavItem href="/about" text="OFFICERS" />
              <NavItem href="/gallery" text="APPARATUS" />
              <NavItem href="/safety" text="FIRE SAFETY" />
              <NavItem href="/contact" text="CONTACT" />
              
              {/* Volunteer button separate from other nav items */}
              <Link 
                href="/join" 
                className="ml-4 px-5 py-2 rounded-md bg-fire-red text-white font-medium hover:bg-red-700 transition duration-300 shadow-md"
              >
                VOLUNTEER
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                className="text-white inline-flex items-center justify-center p-2 rounded-md hover:bg-navy-blue/80 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? 
                  <HiOutlineX className="h-6 w-6 text-white" /> : 
                  <HiOutlineMenu className="h-6 w-6 text-white" />
                }
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#262d36] to-[#1a2029] text-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem href="/" text="HOME" onClick={toggleMenu} isMobile />
            <NavItem href="/about" text="ABOUT US" onClick={toggleMenu} isMobile />
            <NavItem href="/about" text="OFFICERS" onClick={toggleMenu} isMobile />
            <NavItem href="/gallery" text="APPARATUS" onClick={toggleMenu} isMobile />
            <NavItem href="/safety" text="FIRE SAFETY" onClick={toggleMenu} isMobile />
            <NavItem href="/contact" text="CONTACT" onClick={toggleMenu} isMobile />
            
            {/* Mobile volunteer button */}
            <Link 
              href="/join" 
              className="block px-3 py-2 rounded-md text-white font-medium bg-fire-red hover:bg-red-700 transition duration-300"
              onClick={toggleMenu}
            >
              VOLUNTEER
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavItemProps {
  href: string;
  text: string;
  onClick?: () => void;
  active?: boolean;
  isMobile?: boolean;
}

const NavItem = ({ href, text, onClick, active, isMobile }: NavItemProps) => {
  return (
    <Link 
      href={href} 
      className={`
        ${isMobile ? 'block px-3 py-2 rounded-md' : 'px-3 py-2 inline-flex items-center'}
        font-medium text-sm
        ${active 
          ? 'bg-navy-blue/30 text-white' 
          : 'text-gray-100 hover:bg-navy-blue/30 hover:text-white transition duration-300'
        }
      `}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default Navbar; 