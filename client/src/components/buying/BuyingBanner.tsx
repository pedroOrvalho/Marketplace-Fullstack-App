import { Link } from 'react-router-dom'

import HouseIcon from "@mui/icons-material/House";

export default function BuyingBanner() {
  return (
   <div className="buyingPage_banner_container">
        <HouseIcon
          sx={{
            width: "7rem",
            height: "7rem",
            color: "rgb(238, 237, 237)"
          }}
        />
        <h1>Buying on Marketplace</h1>
        <h2>
          Learn more about buying things on Marketplace, where you can find
          thousands of items for sale by people and businesses near you.
        </h2>
        <div className="buyingPage_banner_button_container">
        <Link to="/market">
          <button className="btn_selling">Browse Marketplace</button>
        </Link>
        </div>
      </div>
  )
}
