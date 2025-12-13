import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#home" className="text-2xl font-serif text-primary-dark font-bold">
          Activate Change Today
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-secondary hover:text-primary-dark duration-200 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a 
          href="#contact" 
          className="hidden lg:inline-block bg-accent text-white font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Book a Session
        </a>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-primary-dark focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute w-full left-0 border-t border-gray-100">
          <div className="pt-2 pb-4 space-y-1 px-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={closeMenu}
                className="block py-3 px-3 text-secondary border-b border-gray-100 hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="block w-full text-center bg-accent text-white font-bold mt-4 py-3 px-3 rounded-md hover:bg-amber-600 transition-colors duration-300"
            >
              Book a Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;