import React from 'react';

import {Routes,Route} from "react-router-dom"
import './App.css';
import Navbar from './components/navBar/NavBar';
import Buying from './components/pages/Buying';
import Selling from './components/pages/Selling';
import GoToMarketplace from './components/pages/GoToMarketplace';

function App() {
  return (
<div>
  <Navbar/>
 <Routes>
<Route path="/buying" element={<Buying />} />
<Route path="/selling" element={<Selling />} />
 <Route path="/go-to-marketplace" element={<GoToMarketplace />} />
  </Routes>
</div>



  
  )
}

export default App;
