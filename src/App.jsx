import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';

import Home from './pages/Home/Home.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Contact from './pages/Contact/Contact.jsx';

import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />} /> 
        {/* Specific file path for live server build. */}
        <Route path="/dist/index.html" element={<Home />} /> 
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
