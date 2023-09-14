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
        <Link id="navbar_link" to="/login">
          <p>Login now</p>
        </Link>
        <Link id="navbar_link" to="/buying">
          <p>Buying</p>
        </Link>
        <Link id="navbar_link" to="/selling">
          <p>Selling</p>
        </Link>
        <Link id="navbar_link" to="/market">
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