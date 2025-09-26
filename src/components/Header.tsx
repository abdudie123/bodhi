import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-20 h-16 rounded-full flex items-center justify-center  transition-all duration-300">
                {/* <Leaf className="w-6 h-6 text-white" /> */}
                <img className='bodhi-logo' src='./bodhi.png'></img>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4  rounded-full opacity-80"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">BODHI</h1>
              <p className="text-sm text-green-600 font-medium">Pure Makhana</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-green-600 ${
                  isActive(item.href)
                    ? 'text-green-600 border-b-2 border-green-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+918123234746"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium btn-hover"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+918123234746"
              className="block mx-3 mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-center font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;