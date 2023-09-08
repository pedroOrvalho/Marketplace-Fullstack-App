import { Route, Routes } from "react-router-dom";

import Sidebar from "./sidebar";
import MarketProducts from "./products";
import UserStore from "./store";

export default function Market() {
  return (
    <div className="market-div">
      <Sidebar />
      <Routes>
       
        <Route path="/marketplace" element={<MarketProducts />} />
        <Route path="/marketplace" element={<UserStore />} />
      </Routes>
    </div>
  );
}
