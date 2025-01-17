import React, { useState } from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import products from '../data/data.js';
import categories from '../data/category.js';

const Product = () => {
    // States
    const [likedProducts, setLikedProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [activeCategoryDropdown, setActiveCategoryDropdown] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [priceRange, setPriceRange] = useState(50000);
    const [selectedColor, setSelectedColor] = useState(null);
    const [sortOrder, setSortOrder] = useState('default');

    // Filter and sort products
    const filteredAndSortedProducts = [...products]
        .filter(product => {
            const matchesPrice = product.price <= priceRange;
            const matchesColor = !selectedColor || product.color === selectedColor;
            const matchesCategory = !selectedCategory || product.category.includes(selectedCategory);
            const matchesSubcategory = !selectedSubcategory || product.subcategory === selectedSubcategory;

            return matchesPrice && matchesColor && matchesCategory && matchesSubcategory;
        })
        .sort((a, b) => {
            switch (sortOrder) {
                case 'price-low-high':
                    return a.price - b.price;
                case 'price-high-low':
                    return b.price - a.price;
                default:
                    return 0;
            }
        });

    // Event Handlers
    const toggleLike = (id) => {
        setLikedProducts(prevLikes =>
            prevLikes.includes(id) ? prevLikes.filter(item => item !== id) : [...prevLikes, id]
        );
    };

    const toggleCart = (id) => {
        setCartItems(prevCart =>
            prevCart.includes(id) ? prevCart.filter(item => item !== id) : [...prevCart, id]
        );
    };

    const handleHomeClick = () => {
        setSelectedCategory(null);
        setSelectedSubcategory(null);
        setActiveCategoryDropdown(null);
        setSelectedColor(null);
        setPriceRange(50000);
        setSortOrder('default');
    };

    const handleCategoryClick = (categoryName) => {
        if (activeCategoryDropdown === categoryName) {
            setActiveCategoryDropdown(null);
        } else {
            setActiveCategoryDropdown(categoryName);
            setSelectedCategory(categoryName);
            setSelectedSubcategory(null); // Reset subcategory when a new category is selected
        }
    };

    const handleSubcategoryClick = (subcategoryName) => {
        setSelectedSubcategory(subcategoryName);
    };

    const handlePriceChange = (event) => {
        setPriceRange(parseInt(event.target.value));
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <div className="pt-16 bg-gray-100 text-gray-900">
            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="text-gray-500">
                    <button
                        onClick={handleHomeClick}
                        className="hover:text-blue-600 transition-colors duration-300"
                    >
                        Home
                    </button>
                    {selectedCategory && (
                        <>
                            <span className="mx-2">/</span>
                            <span className="text-gray-700 font-semibold">{selectedCategory}</span>
                        </>
                    )}
                    {selectedSubcategory && (
                        <>
                            <span className="mx-2">/</span>
                            <span className="text-gray-700 font-semibold">{selectedSubcategory}</span>
                        </>
                    )}
                </div>
            </div>

            {/* Main Content */}
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
                                        <li key={category.name} className="relative">
                                            <button
                                                onClick={() => handleCategoryClick(category.name)}
                                                className="w-full flex items-center justify-between text-gray-600 hover:text-blue-600 py-2 transition-colors duration-300"
                                            >
                                                <span>{category.name}</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-300 ${activeCategoryDropdown === category.name ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>
                                            {activeCategoryDropdown === category.name && (
                                                <ul className="pl-4 mt-2 space-y-2 animate-slideDown">
                                                    {category.subcategories.map((subcategory) => (
                                                        <li
                                                            key={subcategory}
                                                            onClick={() => handleSubcategoryClick(subcategory)}
                                                            className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors duration-300"
                                                        >
                                                            {subcategory}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Price Filter */}
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Filter By Price</h2>
                                <div className="space-y-4">
                                    <input
                                        type="range"
                                        className="w-full accent-blue-500"
                                        min="1500"
                                        max="50000"
                                        value={priceRange}
                                        onChange={handlePriceChange}
                                    />
                                    <div className="text-gray-600">
                                        Price: ₹1,500 — ₹{priceRange.toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid Section */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-gray-600">
                                Showing {filteredAndSortedProducts.length} results
                            </div>
                            <select
                                className="border border-gray-400 rounded px-4 py-2 bg-white text-gray-700"
                                value={sortOrder}
                                onChange={handleSortChange}
                            >
                                <option value="default">Default Sorting</option>
                                <option value="price-low-high">Sort by price: low to high</option>
                                <option value="price-high-low">Sort by price: high to low</option>
                            </select>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredAndSortedProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="group bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="relative group-hover:scale-105 transform transition-all duration-300">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-64 object-cover rounded-t-lg"
                                        />
                                        <div
                                            className="absolute top-2 right-2 cursor-pointer"
                                            onClick={() => toggleLike(product.id)}
                                        >
                                            <Heart
                                                className={`text-white p-3 w-10 h-10 rounded-full ${likedProducts.includes(product.id) ? 'bg-red-500' : 'bg-gray-700'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-sm text-gray-500 mb-1">
                                            {product.category.join(', ')}
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 truncate">
                                            {product.name}
                                        </h3>
                                        <div className="text-sm text-gray-600 mb-2">
                                            Color: {product.color}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-indigo-600 font-bold">
                                                ₹{product.price.toLocaleString()}
                                            </span>
                                            <span className="text-gray-400 line-through">
                                                ₹{product.originalPrice.toLocaleString()}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => toggleCart(product.id)}
                                            className="mt-4 w-full py-2 px-4 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow hover:scale-105 hover:shadow-lg transition-all duration-300"
                                        >
                                            Add to Cart
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
