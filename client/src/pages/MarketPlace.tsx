import { Route, Routes } from "react-router-dom";

import MarketPlaceSidebar from "../components/marketplace/MarketPlaceSidebar";
import ProductList from "../components/marketplace/ProductsList";

export default function Market() {
  return (
    <div className="marketplace_container">
      <MarketPlaceSidebar />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
}
