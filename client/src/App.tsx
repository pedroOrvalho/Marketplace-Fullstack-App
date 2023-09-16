import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Buying from "./pages/Buying";
import Selling from "./pages/Selling";
import Footer from "./components/Footer";
import MarketPlace from "./pages/MarketPlace";
import ProductDetail from "./pages/ProductDetail";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buying" element={<Buying />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/marketplace/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
