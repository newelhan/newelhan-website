import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header/Header.jsx';

import Home from './assets/pages/Home/Home.jsx';
import Portfolio from './assets/pages/Portfolio/Portfolio.jsx';
import Contact from './assets/pages/Contact/Contact.jsx';

import Footer from './assets/components/Footer/Footer.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
