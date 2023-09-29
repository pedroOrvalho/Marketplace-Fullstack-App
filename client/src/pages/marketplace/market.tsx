import { Route, Routes } from "react-router-dom";

import Sidebar from "./sidebar";

import UserStore from "./store";
import ProductList from "./Product";

export default function Market() {
  return (
    <div className="market-div">
      <Sidebar />
      <Routes>
        <Route path="/product" element={<ProductList />} />
        <Route path="/store" element={<UserStore />} />
      </Routes>
    </div>
  );
}
