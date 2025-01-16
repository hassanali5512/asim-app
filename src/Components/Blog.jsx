import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '5 Furniture Trends You Need to Know in 2025',
      date: 'January 10, 2025',
      image: '/api/placeholder/600/400',
      excerpt: 'Stay ahead of the curve with the top furniture trends for 2025. From eco-friendly materials to multifunctional designs...',
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Sofa for Your Living Room',
      date: 'January 5, 2025',
      image: '/api/placeholder/600/400',
      excerpt: 'Choosing the right sofa is crucial for your living room. Learn how to select a piece that fits your space and style...',
    },
    {
      id: 3,
      title: 'Maximizing Small Spaces with Smart Furniture',
      date: 'December 30, 2024',
      image: '/api/placeholder/600/400',
      excerpt: 'Small spaces can be challenging, but with the right furniture, you can make the most of your limited space. Discover our top tips...',
    },
  ];

  return (
    <div className="pt-16 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <h1 className="text-3xl font-semibold text-center mb-8">Furniture Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <div className="text-sm text-gray-500 mb-4">{post.date}</div>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <button className="flex items-center gap-2 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300">
                  <span>Read More</span>
                  <span className="text-xl">
                    <ShoppingCart />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
