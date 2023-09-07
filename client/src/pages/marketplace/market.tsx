import { Routes, Route } from "react-router-dom";

import Sidebar from "./sidebar";
import ProductList from "./Product";
import UserStore from "./store";

export default function Market() {
  return (
    <div className="market-div">
      <Sidebar />

      <Routes>
        <Route
          path="/products"
          element={
            <div className="product">
              <ProductList />
            </div>
          }
        />
        <Route
          path="/store"
          element={
            <div className="product">
              <UserStore />
            </div>
          }
        />
      </Routes>
    </div>
  );
}
