import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import Crousel from './CrousalHomePage/Crousal';

const Home = () => {
  return (
    <>
    <div className="relative min-h-screen">
      {/* Video Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="/api/placeholder/1920/1080"
        >
          <source src="/hassan.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white text-center mb-6 animate-fadeIn">
            Discover Luxury Furniture
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 text-center mb-12 max-w-2xl animate-slideUp">
            Transform your space with our exclusive collection of handcrafted furniture pieces
          </p>
          
          {/* Animated Shop Button */}
          <a 
            href="/shop"
            className="group relative inline-flex items-center gap-4 bg-white text-blue-600 px-8 py-4 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fadeIn"
          >
            <span className="relative z-10 text-lg font-medium">Shop Collection</span>
            <ShoppingBag className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-8 h-8 text-white transform rotate-90" />
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="w-full mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Featured Collections</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Category Cards */}
      {[
        { name: 'Living Room', image: '/125.jpg' },
        { name: 'Bedroom', image: '/2.jpg' },
        { name: 'Dining', image: '/43.PNG' },
        { name: 'Office', image: '/18.jpg' },
        { name: 'Outdoor', image: '/94.jpg' },
        { name: 'Decor', image: '/147.jpg' },
      ].map((category) => (
        <div 
          key={category.name}
          className="group relative h-96 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">{category.name}</h3>
            <a 
              href={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
              className="inline-flex items-center text-white gap-2 group/link"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
    <Crousel/>
    </>

  );
};

export default Home;

