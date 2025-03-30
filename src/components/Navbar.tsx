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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <div className="w-12 h-12 relative mr-3">
            <WebflowImage 
              src="/images/rbfd-logo.png" 
              alt="Rhinebeck Fire Department Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="text-navy-blue">
            <h1 className="text-xl font-bold">Rhinebeck Fire</h1>
            <p className="text-sm">Established 1834</p>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-navy-blue text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/join" text="Join Us" />
          <NavItem href="/safety" text="Safety" />
          <NavItem href="/gallery" text="Gallery" />
          <NavItem href="/contact" text="Contact" />
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <NavItem href="/" text="Home" onClick={toggleMenu} />
            <NavItem href="/about" text="About" onClick={toggleMenu} />
            <NavItem href="/join" text="Join Us" onClick={toggleMenu} />
            <NavItem href="/safety" text="Safety" onClick={toggleMenu} />
            <NavItem href="/gallery" text="Gallery" onClick={toggleMenu} />
            <NavItem href="/contact" text="Contact" onClick={toggleMenu} />
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
      className="text-navy-blue hover:text-fire-red font-medium transition duration-300"
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default Navbar; 