import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/Registration/login";
import Buying from "./pages/Buying";
import Selling from "./pages/Selling";
import Footer from "./components/Footer";
import Market from "./pages/marketplace/market";
import GoogleLogIn from "./components/googleLogIn/GoogleLogIn";

import "./App.css";
import ProductList from "./pages/marketplace/Product";
import UserItem from "./components/users/useritem";

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
        <Route path="/google-login" element={<GoogleLogIn />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/user" element={<UserItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
