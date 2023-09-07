import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Buying from "./pages/Buying";
import Selling from "./pages/Selling";
import Footer from "./components/Footer";
import Login from "./pages/Registration/login";
import Market from "./pages/marketplace/market";

import "./App.css";
import ProductList from "./pages/marketplace/Product";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buying" element={<Buying />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/marketplace" element={<Market />} />
        <Route path="/product" element={<ProductList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
