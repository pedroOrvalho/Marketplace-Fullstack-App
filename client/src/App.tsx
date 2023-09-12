import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Buying from "./pages/Buying";
import Selling from "./pages/Selling";
import Footer from "./components/Footer";
import Market from "./pages/marketplace/market";
import ProductList from "./pages/marketplace/Product";
import UserItem from "./components/users/useritem";

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
        <Route path="/market" element={<Market />} />
        <Route path="/product" element={<ProductList />} />
      </Routes>
      <Footer />
    </div>
  );
}

/*  <Route path="/user" element={<UserItem />} /> */

export default App;
