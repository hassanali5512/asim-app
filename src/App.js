import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Nav from './Nav';
import Crousel from './Components/Crousel';
import Blog from './Components/Blog';

function App() {
  return (
    <Router>
      <Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crousel" element={<Crousel/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </Nav>
    </Router>
  );
}

export default App;