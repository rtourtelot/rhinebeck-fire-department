import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import WebflowImage from './WebflowImage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto">
        {/* Logo and site name */}
        <div className="flex justify-center py-4">
          <Link href="/" className="flex items-center">
            <div className="w-14 h-14 relative mr-3">
              <WebflowImage 
                src="/images/rbfd-logo.png" 
                alt="Rhinebeck Fire Department Logo"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="text-navy-blue">
              <h1 className="text-[28px] font-bold tracking-normal">RHINEBECK FIRE DEPARTMENT</h1>
            </div>
          </Link>
        </div>
        
        {/* Desktop navigation - perfectly centered with proper spacing */}
        <div className="hidden md:block border-t border-gray-200">
          <div className="flex justify-center">
            <div className="flex">
              <NavItem href="/" text="HOME" />
              <NavItem href="/about" text="ABOUT US" />
              <NavItem href="/about" text="OFFICERS" />
              <NavItem href="/gallery" text="APPARATUS" />
              <NavItem href="/join" text="VOLUNTEER" />
              <NavItem href="/safety" text="FIRE SAFETY" />
              <NavItem href="/contact" text="CONTACT" />
            </div>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-between items-center py-4 px-4">
          <Link href="/" className="text-xl font-bold text-navy-blue">
            RBFD
          </Link>
          <button 
            className="text-navy-blue text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <NavItem href="/" text="HOME" onClick={toggleMenu} />
            <NavItem href="/about" text="ABOUT US" onClick={toggleMenu} />
            <NavItem href="/about" text="OFFICERS" onClick={toggleMenu} />
            <NavItem href="/gallery" text="APPARATUS" onClick={toggleMenu} />
            <NavItem href="/join" text="VOLUNTEER" onClick={toggleMenu} />
            <NavItem href="/safety" text="FIRE SAFETY" onClick={toggleMenu} />
            <NavItem href="/contact" text="CONTACT" onClick={toggleMenu} />
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
}

const NavItem = ({ href, text, onClick }: NavItemProps) => {
  return (
    <Link 
      href={href} 
      className="text-navy-blue hover:text-fire-red px-5 py-3 block font-semibold text-[15px]"
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default Navbar; 