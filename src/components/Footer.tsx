import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">BODHI</h3>
                <p className="text-sm text-green-400">Pure Makhana</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Premium makhana sourced directly from Bihar farmers. Committed to quality, 
              tradition, and sustainable farming practices.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-green-400 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-green-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Premium Makhana (Grade 5+)</li>
              <li>A Grade Makhana (Grade 6&6+)</li>
              <li>Standard Makhana (Grade 4&5)</li>
              <li>Economical Makhana</li>
              <li>Makhana Powder</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 81232 34746</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">sales@bodhimakhana.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    10/23, 2nd Floor Jayanagar Housing Society,<br />
                    Gubbalala, Bangalore South, Karnataka, India - 560061
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Bodhi Foods Limited. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Made with ❤️ for healthy living
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;