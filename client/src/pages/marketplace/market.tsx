import { Route, Routes } from "react-router-dom";

import Sidebar from "./sidebar";
import ProductList from "./Product";


export default function Market() {
  return (
    <div className="marketplace_container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
}
