import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const Product = () => {
  const categories = [
    'Living Room',
    'Bedroom',
    'Kitchen',
    'Office',
    'Dining Room',
    'Outdoor',
    'Storage',
    'Decor',
  ];

  const colors = [
    'Walnut Brown',
    'Oak',
    'White',
    'Black',
    'Grey',
    'Beige',
    'Navy Blue',
  ];

  const sizes = ['Small', 'Medium', 'Large', 'Extra Large'];

  const products = [
    {
      id: 1,
      name: 'Modern Leather Sofa',
      category: ['New Arrival', 'Living Room'],
      price: 24999,
      originalPrice: 29999,
      image: '/api/placeholder/400/500',
    },
    {
      id: 2,
      name: 'Executive Office Chair',
      category: ['New Arrival', 'Office'],
      price: 15999,
      originalPrice: 18999,
      image: '/api/placeholder/400/500',
    },
    {
      id: 2,
      name: 'Executive Office Chair',
      category: ['New Arrival', 'Office'],
      price: 15999,
      originalPrice: 18999,
      image: '/api/placeholder/400/500',
    },
     {
      id: 2,
      name: 'Executive Office Chair',
      category: ['New Arrival', 'Office'],
      price: 15999,
      originalPrice: 18999,
      image: '/api/placeholder/400/500',
    },
    {
      id: 2,
      name: 'Executive Office Chair',
      category: ['New Arrival', 'Office'],
      price: 15999,
      originalPrice: 18999,
      image: '/api/placeholder/400/500',
    },
    {
      id: 3,
      name: 'Queen Size Bed Frame',
      category: ['New Arrival', 'Bedroom'],
      price: 34999,
      originalPrice: 39999,
      image: '/api/placeholder/400/500',
    },
  ];

  const [likedProducts, setLikedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const toggleLike = (id) => {
    setLikedProducts((prevLikes) =>
      prevLikes.includes(id) ? prevLikes.filter((item) => item !== id) : [...prevLikes, id]
    );
  };

  const toggleCart = (id) => {
    setCartItems((prevCart) =>
      prevCart.includes(id) ? prevCart.filter((item) => item !== id) : [...prevCart, id]
    );
  };

  return (
    <div className="pt-16 bg-gray-100 text-gray-900">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-gray-500">
          <span>Home</span> /{' '}
          <span className="text-gray-700 font-semibold">Living Room</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li
                      key={category}
                      className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Filter by Price */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Filter By Price</h2>
                <div className="space-y-4">
                  <input
                    type="range"
                    className="w-full accent-blue-500"
                    min="1500"
                    max="50000"
                  />
                  <div className="flex items-center gap-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                      Filter
                    </button>
                    <div className="text-gray-600">
                      Price: ₹1,500 — ₹50,000
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter by Color */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Filter By Color</h2>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <span
                      key={color}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 cursor-pointer transition-colors duration-300"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Filter by Size */}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-600">Showing all 12 results</div>
              <select className="border border-gray-400 rounded px-4 py-2 bg-white text-gray-700">
                <option>Default Sorting</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
                <option>Sort by popularity</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative group-hover:scale-105 transform transition-all duration-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[300px] object-cover rounded-t-lg"
                    />
                    <div
                      className="absolute top-2 right-2 cursor-pointer"
                      onClick={() => toggleLike(product.id)}
                    >
                      <Heart
                        className={`text-white p-3 w-10 h-10 rounded-full ${
                          likedProducts.includes(product.id) ? 'bg-red-500' : 'bg-gray-700'
                        }`}
                      />
                    </div>
                    <div
                      className="absolute top-2 right-16 cursor-pointer"
                      onClick={() => toggleCart(product.id)}
                    >
                      
                     
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-1">
                      {product.category.join(', ')}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 truncate">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-indigo-600 font-bold">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-gray-400 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <button className="mt-4 w-full py-2 px-4 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow hover:scale-105 hover:shadow-lg transition-all duration-300">
                      <span className="block sm:hidden">AJOUTER AU PANIER</span>
                      <span className="hidden sm:block">Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
