import React from "react";

import { Link } from "react-router-dom";
import Marketplacelogo from "../images/Marketplace Logo.png"

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img
          className="marketlogo"
          src={Marketplacelogo}
          alt="logo"
          style={{ width: 50 }}
        />
        <span className="marketplace1">
          Marketplace
        </span>
      </div>

      <div className="menu">
        <ul className="menu_1">
          <li>Login now</li>
          <Link to="/buying">
            <li>Buying</li>
          </Link>

          <Link to="/selling">
            <li>Selling</li>
          </Link>

          <Link to="/go-to-marketplace">
            <li>
              <button className="btn">Go to MarketPlace</button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
