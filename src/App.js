import './assets/styles.css';

import About from './components/About';
import Blog from './components/Blog';
import Currency from './components/Currency';
import ExchangeTable from './components/ExchangeTable';
import Features from './components/Features';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import FAQ from './components/FAQ';
import Register from './components/Register';
import Earn from './components/Earn';

function Home() {
  return (
    <React.Fragment>
      <Features />
      <Currency />
      <ExchangeTable />
      <About />
      <Blog />
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/earn" element={<Earn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
