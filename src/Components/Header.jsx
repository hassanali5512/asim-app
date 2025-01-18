import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, Menu, X, ChevronRight } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom'; // Import useLocation for active page detection
import categories from './data/category';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  
  const location = useLocation(); // Get current location

  // Close the mobile menu on page change
  useEffect(() => {
    setIsMenuOpen(false); // Close the menu whenever the route changes
  }, [location]);

  const handleCategoryClick = (categoryName) => {
    setIsMenuOpen(false); // Close the mobile menu
    setActiveCategory(categoryName);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-white fixed w-full top-0 z-50 transition-all duration-500 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with animation */}
            <div className="flex-shrink-0 transform hover:scale-105 transition-all duration-300">
              <h1 className="text-2xl font-bold text-white hover:text-blue-200 transition-all duration-300">
                Furnify Meubles
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-white hover:text-blue-200 transform hover:-translate-y-0.5 transition-all duration-300 ${location.pathname === '/' ? 'text-blue-200' : ''}`}
              >
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsProductDropdownOpen(true)}
                onMouseLeave={() => {
                  setIsProductDropdownOpen(false);
                  setActiveCategory(null);
                }}
              >
                <Link 
                  to="/products" 
                  className={`text-white hover:text-blue-200 transform hover:-translate-y-0.5 transition-all duration-300 ${location.pathname.startsWith('/products') ? 'text-blue-200' : ''}`}
                >
                  Products
                </Link>
                {/* Main Product Dropdown with animation */}
                {isProductDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl py-2 min-w-[200px] animate-fadeIn">
                    {categories.map((category) => (
                      <div
                        key={category.name}
                        className="relative group"
                        onMouseEnter={() => setActiveCategory(category.name)}
                      >
                        <Link
                          to={`/products/${category.name.toLowerCase().replace(' ', '-')}`}
                          className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-all duration-300 whitespace-nowrap group-hover:translate-x-1"
                          onClick={() => handleCategoryClick(category.name)} // Handle click for mobile
                        >
                          {category.name}
                          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link 
                to="/contact" 
                className={`text-white hover:text-blue-200 transform hover:-translate-y-0.5 transition-all duration-300 ${location.pathname === '/contact' ? 'text-blue-200' : ''}`}
              >
                Contact
              </Link>
              <Link 
                to="/blog" 
                className={`text-white hover:text-blue-200 transform hover:-translate-y-0.5 transition-all duration-300 ${location.pathname === '/blog' ? 'text-blue-200' : ''}`}
              >
                Blog
              </Link>
            </div>

            {/* Icons with hover animations */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white hover:text-blue-200 transform hover:scale-110 transition-all duration-300"
              >
                <Search className="w-6 h-6" />
              </button>
              <button className="text-white hover:text-blue-200 transform hover:scale-110 transition-all duration-300">
                <Heart className="w-6 h-6" />
              </button>
              <button className="text-white hover:text-blue-200 transform hover:scale-110 transition-all duration-300">
                <ShoppingCart className="w-6 h-6" />
              </button>
              {/* Mobile Menu Button with animation */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-blue-200 transform hover:scale-110 transition-all duration-300 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu with slide animation */}
          {isMenuOpen && (
            <div className="md:hidden bg-blue-600/95 animate-slideDown">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  to="/" 
                  className={`block px-3 py-2 rounded-md text-white hover:bg-blue-500/50 transition-all duration-300 ${location.pathname === '/' ? 'text-blue-200' : ''}`}
                  onClick={() => setIsMenuOpen(false)} // Close the menu on click
                >
                  Home
                </Link>
                {/* Mobile Products Menu */}
                <div>
                  <button
                    onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-white hover:bg-blue-500/50 transition-all duration-300"
                  >
                    Products
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isProductDropdownOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {/* Mobile Subcategories with slide animation */}
                  {isProductDropdownOpen && (
                    <div className="ml-4 space-y-1 animate-slideDown">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          to={`/products/${category.name.toLowerCase().replace(' ', '-')}`}
                          className={`block px-3 py-2 rounded-md text-white hover:bg-blue-500/50 transition-all duration-300 ${activeCategory === category.name ? 'text-blue-200' : ''}`}
                          onClick={() => handleCategoryClick(category.name)} // Handle click for mobile
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link 
                  to="/contact" 
                  className={`block px-3 py-2 rounded-md text-white hover:bg-blue-500/50 transition-all duration-300 ${location.pathname === '/contact' ? 'text-blue-200' : ''}`}
                  onClick={() => setIsMenuOpen(false)} // Close the menu on click
                >
                  Contact
                </Link>
                <Link 
                  to="/blog" 
                  className={`block px-3 py-2 rounded-md text-white hover:bg-blue-500/50 transition-all duration-300 ${location.pathname === '/blog' ? 'text-blue-200' : ''}`}
                  onClick={() => setIsMenuOpen(false)} // Close the menu on click
                >
                  Blog
                </Link>
              </div>
            </div>
          )}

          {/* Search Panel with fade animation */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-xl py-3 px-4 animate-fadeIn">
              <div className="max-w-7xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search furniture..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800"
                  autoFocus
                />
                <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-10 top-2.5 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
      <Outlet/>
    </>
  );
};

export default Header;
