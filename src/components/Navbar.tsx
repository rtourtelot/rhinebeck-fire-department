import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      {/* Top section with logo */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center py-4">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/main-logo.svg" 
              alt="Rhinebeck Fire Department Logo"
              width={470}
              height={54}
              className="h-auto"
            />
          </Link>
        </div>
      </div>
      
      {/* Navigation section */}
      <div className="border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="hidden md:flex">
            <NavItem href="/" text="HOME" />
            <NavItem href="/about" text="ABOUT US" />
            <NavItem href="/about" text="OFFICERS" />
            <NavItem href="/gallery" text="APPARATUS" />
            <NavItem href="/join" text="VOLUNTEER" active />
            <NavItem href="/safety" text="FIRE SAFETY" />
            <NavItem href="/contact" text="CONTACT" />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex justify-between items-center py-4 w-full px-4">
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
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <NavItem href="/" text="HOME" onClick={toggleMenu} />
            <NavItem href="/about" text="ABOUT US" onClick={toggleMenu} />
            <NavItem href="/about" text="OFFICERS" onClick={toggleMenu} />
            <NavItem href="/gallery" text="APPARATUS" onClick={toggleMenu} />
            <NavItem href="/join" text="VOLUNTEER" onClick={toggleMenu} active />
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
  active?: boolean;
}

const NavItem = ({ href, text, onClick, active }: NavItemProps) => {
  return (
    <Link 
      href={href} 
      className={`
        px-5 py-3 block font-medium text-[15px]
        ${active ? 'bg-fire-red text-white' : 'text-navy-blue hover:text-fire-red'}
      `}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default Navbar; 