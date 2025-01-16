import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Furnify Meubles</h3>
            <p className="text-white/90 text-sm">
              Aapka bharosemand furniture partner. Hum provide karte hain best quality furniture 
              aur home decor solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/90 hover:text-white transform hover:scale-110 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/90 hover:text-white transform hover:scale-110 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/90 hover:text-white transform hover:scale-110 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/90 hover:text-white transform hover:scale-110 transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 block">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 block">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 block">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 block">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white/90">123 Furniture Street, City, State, 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white/90">+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white/90">contact@furnifymeubles.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-white/90 text-sm mb-4">
              Latest updates aur exclusive offers ke liye subscribe karein
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Apna email address dalein"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="w-full bg-white text-blue-500 hover:bg-white/90 py-2 px-4 rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/90">
              &copy; {new Date().getFullYear()} Furnify Meubles. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-white/90 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/90 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-white/90 hover:text-white transition-colors duration-300">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
