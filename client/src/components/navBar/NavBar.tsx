import { Link } from "react-router-dom";
import Marketplacelogo from "../../images/Logo-noBackground.png";

export default function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_logo_container">
        <Link to="/">
          <img src={Marketplacelogo} alt="logo" width={"100px"} />
        </Link>
      </div>
      <div className="navbar_menu_container">
        <Link to="/login">
          <p>Login now</p>
        </Link>
        <Link to="/buying">
          <p>Buying</p>
        </Link>
        <Link to="/selling">
          <p>Selling</p>
        </Link>
        <Link to="/market">
          <button className="btn">Go to MarketPlace</button>
        </Link>
      </div>
    </div>
  );
}


/*

        <Link to="/product">
          <p>Product</p>
        </Link>
*/