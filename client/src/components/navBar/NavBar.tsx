import { Link } from "react-router-dom";
import Marketplacelogo from "../../images/Marketplace Logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          className="marketlogo"
          src={Marketplacelogo}
          alt="logo"
          style={{ width: 50 }}
        />
        <Link to="/">
          <span className="marketplace1">Marketplace</span>
        </Link>
      </div>
      <div className="menu">
        <ul className="menu_1">
          <Link to="/login">
            <li>Login now</li>
          </Link>
          <Link to="/buying">
            <li>Buying</li>
          </Link>

          <Link to="/selling">
            <li>Selling</li>
          </Link>
          <Link to="/market">
            <li>
              <button className="btn">Go to MarketPlace</button>
            </li>
          </Link>

          <Link to="/product">
            <li>
              Product
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
