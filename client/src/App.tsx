import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/Registration/login";
import Buying from "./pages/Buying";
import Selling from "./pages/Selling";
import Footer from "./components/Footer";
import Market from "./pages/marketplace/market";
import GoogleLogIn from "./components/googleLogIn/GoogleLogIn";
import ProductList from "./pages/marketplace/Product";
import Admin from "./pages/users/admin";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/google-login" element={<GoogleLogIn />} />
        <Route path="/buying" element={<Buying />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/market" element={<Market />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
