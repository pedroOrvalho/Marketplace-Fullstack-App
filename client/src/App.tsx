import React from 'react';

import {Routes,Route} from "react-router-dom"
import './App.css';
import Navbar from './components/navBar/NavBar';
import Marketplace from './components/pages/Marketplace';
import Buying from './components/pages/Buying';
import Selling from './components/pages/Selling';
import GoToMarketplace from './components/pages/GoToMarketplace';
import Footer from './components/pages/Footer';



function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/buying" element={<Buying />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/go-to-marketplace" element={<GoToMarketplace />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
