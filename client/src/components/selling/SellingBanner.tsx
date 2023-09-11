import { Link } from "react-router-dom";

import HouseIcon from "@mui/icons-material/House";

export default function SellingBanner() {
  return (
    <div className="sellingPage_banner_container">
      <HouseIcon
        sx={{
          width: "7rem",
          height: "7rem",
          color: "rgb(238, 237, 237)",
        }}
      />
      <h1>Selling on Marketplace</h1>
      <h2>
        Are you interested in selling on Marketplace? Marketplace makes it easy
        to sell things to people in your local area. Here's more information
        about selling on Marketplace.
      </h2>
      <div className="buyingPage_banner_button_container">
        <Link to="/market">
          <button className="btn_buying">Try Selling Something</button>
        </Link>
      </div>
    </div>
  );
}
