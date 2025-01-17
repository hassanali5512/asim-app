import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const Crousel = () => {
  const products = [
    { 
      id: 1, 
      name: "Modern Sofa", 
      oldPrice: "$1299", 
      price: "$999", 
      image: "/2.jpg",
      isLiked: false
    },
    { 
      id: 2, 
      name: "Dining Table Set with Six Chairs", 
      oldPrice: "$999", 
      price: "$799", 
      image: "/2.jpg",
      isLiked: true
    },
    { 
      id: 3, 
      name: "Dining Table Set with Six Chairs", 
      oldPrice: "$999", 
      price: "$799", 
      image: "/2.jpg",
      isLiked: true
    },
    { 
      id: 4, 
      name: "Dining Table Set with Six Chairs", 
      oldPrice: "$999", 
      price: "$799", 
      image: "/2.jpg",
      isLiked: true
    },
    { 
      id: 5, 
      name: "Dining Table Set with Six Chairs", 
      oldPrice: "$999", 
      price: "$799", 
      image: "/2.jpg",
      isLiked: true
    },
    { 
      id: 6, 
      name: "Dining Table Set with Six Chairs", 
      oldPrice: "$999", 
      price: "$799", 
      image: "/2.jpg",
      isLiked: true
    },
    { 
      id: 7, 
      name: "Bedroom Set", 
      oldPrice: "$1599", 
      price: "$1299", 
      image: "/2.jpg",
      isLiked: false
    },
    { 
      id: 8, 
      name: "Office Chair", 
      oldPrice: "$399", 
      price: "$299", 
      image: "/2.jpg",
      isLiked: false
    },
    { 
      id: 9, 
      name: "Coffee Table", 
      oldPrice: "$499", 
      price: "$399", 
      image: "/2.jpg",
      isLiked: true
    },
    { 
      id: 10, 
      name: "Floor Lamp", 
      oldPrice: "$699", 
      price: "$599", 
      image: "/2.jpg",
      isLiked: false
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedProducts, setLikedProducts] = useState(
    products.reduce((acc, product) => ({
      ...acc,
      [product.id]: product.isLiked
    }), {})
  );
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const getVisibleProducts = () => {
    if (window.innerWidth < 768) return 2; // Mobile view - 2 products
    return 6; // Desktop view - 6 products
  };

  const [visibleProducts, setVisibleProducts] = useState(getVisibleProducts());

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleProducts(getVisibleProducts());
      setCurrentIndex(prev => 
        Math.min(prev, products.length - getVisibleProducts())
      );
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleLike = (productId) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const slideLeft = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const slideRight = () => {
    setCurrentIndex(prev => {
      const maxIndex = products.length - visibleProducts;
      return Math.min(maxIndex, prev + 1);
    });
  };

  const ProductCard = ({ product, isMobile }) => (
    <div 
      className={`px-2 ${isMobile ? 'w-full' : ''}`}
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
          <button 
            onClick={() => toggleLike(product.id)}
            className="absolute top-2 right-2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all duration-300 group hover:scale-110"
          >
            <Heart 
              className={`h-5 w-5 transition-all duration-300 ${
                likedProducts[product.id] 
                  ? 'text-pink-500 fill-pink-500 scale-110' 
                  : 'text-gray-400 group-hover:text-pink-500'
              }`}
            />
          </button>
        </div>
        <div className={`p-4 ${isMobile ? 'text-center' : ''}`}>
          <h3 className="text-sm font-medium text-gray-800 truncate">
            {product.name}
          </h3>
          <div className={`mt-1 flex items-baseline space-x-2 ${isMobile ? 'justify-center' : ''}`}>
            <span className="text-xs text-gray-400 line-through">
              {product.oldPrice}
            </span>
            <span className="text-sm font-bold text-indigo-600">
              {product.price}
            </span>
          </div>
          <button 
            className={`mt-2 w-full py-1.5 rounded-full text-sm font-medium transition-all duration-300 transform
              ${hoveredProduct === product.id 
                ? 'bg-gradient-to-r from-indigo-700 to-purple-700 text-white scale-105 shadow-md' 
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
              }
              hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 active:scale-95`}
          >
            {isMobile ? 'AJOUTER AU PANIER' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full px-4 py-16">
  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
    {isMobile ? 'Nouvelle Arrivée' : 'Featured Products'}
  </h2>

  <div className="relative">
    {/* Navigation Buttons */}
    {!isMobile && currentIndex > 0 && (
      <button 
        onClick={slideLeft}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-indigo-50 transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <ChevronLeft className="h-6 w-6 text-indigo-600" />
      </button>
    )}

    {!isMobile && currentIndex < products.length - visibleProducts && (
      <button 
        onClick={slideRight}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-indigo-50 transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <ChevronRight className="h-6 w-6 text-indigo-600" />
      </button>
    )}

    {/* Products Grid */}
    <div className="overflow-hidden">
      <div 
        className={`grid transition-all duration-500 ease-in-out transform ${
          isMobile 
            ? 'grid-cols-2 gap-4' 
            : ''
        }`}
        style={!isMobile ? {
          gridTemplateColumns: `repeat(${products.length}, minmax(0, 1fr))`,
          transform: `translateX(-${(currentIndex * (100 / visibleProducts))}%)`,
          width: `${(products.length / visibleProducts) * 100}vw`, // Adjusted width
        } : {}}
      >
        {products.slice(0, isMobile ? 4 : products.length).map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default Crousel;