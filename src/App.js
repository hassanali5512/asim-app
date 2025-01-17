import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Products from './Components/AllProducts/Product';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;