import { Route, Routes } from "react-router-dom";

import Sidebar from "./sidebar";
import ProductList from "./products";
import UserStore from "./store";

export default function Market() {
  return (
    <div className="market-div">
      <Sidebar />
      <Routes>
       
        <Route path="/market/products" element={<ProductList />} />
        <Route path="/market/store" element={<UserStore />} />
      </Routes>
    </div>
  );
}
