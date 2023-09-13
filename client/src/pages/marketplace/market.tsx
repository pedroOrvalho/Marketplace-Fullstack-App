import { Route, Routes } from "react-router-dom";

import Sidebar from "./sidebar";
import ProductItem from "./Product";
import UserStore from "./store";

export default function Market() {
  return (
    <div className="market-div">
      <Sidebar />
      <Routes>
        <Route path="/products" element={<ProductItem />} />
        <Route path="/store" element={<UserStore />} />
      </Routes>
    </div>
  );
}
