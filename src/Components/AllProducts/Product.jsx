import React, { useState, useEffect } from 'react';
import { Heart, ChevronDown, Menu } from 'lucide-react';
import products from '../data/data.js';
import categories from '../data/category.js';

const Product = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [activeCategoryDropdown, setActiveCategoryDropdown] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [priceRange, setPriceRange] = useState(50000);
    const [selectedColor, setSelectedColor] = useState(null);
    const [sortOrder, setSortOrder] = useState('default');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showMobileCategories, setShowMobileCategories] = useState(true);

    // Previous functions remain the same
    useEffect(() => {
        let lastScrollY = window.scrollY;
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobileMenuOpen]);

    // All other functions remain exactly the same as in your code
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
            case 'price-low-high': return a.price - b.price;
            case 'price-high-low': return b.price - a.price;
            default: return 0;
        }
    });

    // Previous helper functions remain the same
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
        setIsMobileMenuOpen(false);
    };

    const handleCategoryClick = (categoryName) => {
        if (window.innerWidth <= 768) {
            if (activeCategoryDropdown === categoryName) {
                // If category is already open, close it and reset the selected category/subcategory
                setActiveCategoryDropdown(null);
                setSelectedCategory(null);
                setSelectedSubcategory(null);
            } else {
                // Otherwise, open the new category and select it
                setActiveCategoryDropdown(categoryName);
                setSelectedCategory(categoryName); // Set the category to selected
                setShowMobileCategories(true);
            }
        } else {
            setActiveCategoryDropdown(prevCategory => 
                prevCategory === categoryName ? null : categoryName
            );
            if (activeCategoryDropdown !== categoryName) {
                setSelectedCategory(categoryName); // Set the category to selected
            } else {
                setSelectedCategory(null); // Deselect category when it's closed
                setSelectedSubcategory(null); // Reset subcategory when category is deselected
            }
        }
    };
    const toggleMobileCategories = () => {
        setShowMobileCategories(!showMobileCategories);
        if (showMobileCategories) {
            setActiveCategoryDropdown(null);
        }
    };

    const handleSubcategoryClick = (subcategoryName) => {
        setSelectedSubcategory(subcategoryName);
        setSelectedCategory(activeCategoryDropdown);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="pt-16 bg-gray-100 text-gray-900">
            {/* Breadcrumb Navigation */}
            <div className="w-full px-4 py-4">
                <div className="text-gray-500">
                    <button onClick={handleHomeClick} className="hover:text-blue-600 transition-colors duration-300">
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

            {/* Mobile Controls */}
            <div className="md:hidden px-4 mb-4">
                <div className="flex gap-2">
                    {/* Categories Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex-1 flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-lg shadow"
                    >
                        <Menu className="w-5 h-5" />
                        <span>Categories</span>
                    </button>

                    {/* Price Filter - Now outside the mobile menu */}
                    <div className="flex-1 bg-white px-4 py-2 rounded-lg shadow">
    <div className="space-y-2">
        <input
            type="range"
            className="w-full accent-blue-500"
            min="1500"
            max="50000"
            value={priceRange}
            onChange={(e) => setPriceRange(parseInt(e.target.value))}
        />
        <div className="text-xs text-gray-600">
            Filter by Price: ₹{priceRange.toLocaleString()}
        </div>
    </div>
</div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full px-4">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Left Sidebar - Modified for mobile view */}
                    <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block md:w-44 flex-shrink-0 bg-white md:bg-transparent p-4 md:p-0 rounded-lg shadow-lg md:shadow-none fixed md:static left-4 right-4 top-32 z-50`}>
                        {/* Categories Section */}
                        <div className="flex-1">
                            <h2 
                                className="text-lg font-semibold mb-3 cursor-pointer md:cursor-default flex items-center justify-between"
                                onClick={() => window.innerWidth <= 768 && toggleMobileCategories()}
                            >
                                Categories
                                {window.innerWidth <= 768 && (
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showMobileCategories ? 'rotate-180' : ''}`} />
                                )}
                            </h2>
                            {(showMobileCategories || window.innerWidth > 768) && (
                                <ul className="space-y-2">
                                    {categories.map((category) => (
                                        <li key={category.name} className="relative">
                                            <button
                                                onClick={() => handleCategoryClick(category.name)}
                                                className="w-full flex items-center justify-between text-gray-600 hover:text-blue-600 py-1.5 transition-colors duration-300"
                                            >
                                                <span className="text-sm">{category.name}</span>
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                                    activeCategoryDropdown === category.name ? 'rotate-180' : ''
                                                }`} />
                                            </button>
                                            {activeCategoryDropdown === category.name && (
                                                <ul className="pl-3 mt-1 space-y-1 animate-slideDown">
                                                    {category.subcategories.map((subcategory) => (
                                                        <li
                                                            key={subcategory}
                                                            onClick={() => handleSubcategoryClick(subcategory)}
                                                            className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer transition-colors duration-300"
                                                        >
                                                            {subcategory}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Desktop Price Filter */}
                        <div className="hidden md:block mt-6">
                            <h2 className="text-lg font-semibold mb-3">Filter By Price</h2>
                            <div className="space-y-3">
                                <input
                                    type="range"
                                    className="w-full accent-blue-500"
                                    min="1500"
                                    max="50000"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                />
                                <div className="text-sm text-gray-600">
                                    Price: ₹1,500 — ₹{priceRange.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid Section */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-sm text-gray-600">
                                Showing {filteredAndSortedProducts.length} results
                            </div>
                            <select
                                className="border border-gray-400 rounded px-3 py-1.5 bg-white text-sm text-gray-700"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="default">Default Sorting</option>
                                <option value="price-low-high">Sort by price: low to high</option>
                                <option value="price-high-low">Sort by price: high to low</option>
                            </select>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                            {filteredAndSortedProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="group bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
                                        />
                                        <div
                                            className="absolute top-2 right-2 cursor-pointer"
                                            onClick={() => toggleLike(product.id)}
                                        >
                                            <Heart
                                                className={`text-white p-1.5 w-7 h-7 rounded-full ${
                                                    likedProducts.includes(product.id) ? 'bg-red-500' : 'bg-gray-700'
                                                }`}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2.5">
                                        <div className="text-xs text-gray-500 mb-1">
                                            {product.category.join(', ')}
                                        </div>
                                        <h3 className="text-sm font-semibold mb-1 truncate">
                                            {product.name}
                                        </h3>
                                        <div className="text-xs text-gray-600 mb-1">
                                            Color: {product.color}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-sm text-indigo-600 font-bold">
                                                ₹{product.price.toLocaleString()}
                                            </span>
                                            <span className="text-xs text-gray-400 line-through">
                                                ₹{product.originalPrice.toLocaleString()}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => toggleCart(product.id)}
                                            className="mt-2 w-full py-1.5 px-3 text-sm text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow hover:scale-105 hover:shadow-lg transition-all duration-300"
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