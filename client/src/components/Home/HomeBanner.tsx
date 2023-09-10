import { Link } from "react-router-dom";

import { Box } from "@mui/material";

export default function HomeBanner() {
  return (
    <Box className="home_banner_container">
      <Box className="home_banner_text_container">
        <h1>
          Discover, buy and sell
          goods with Marketplace.
        </h1>
        <h2>
          Marketplace is an e-commerce platform that connects sellers and buyers
          through meaningful interactions and unique goods.
        </h2>
        <div className="home_banner_button_container">
        <Link to="/marketplace">
          <button className="btn_explore">Explore Marketplace</button>
        </Link>
        </div>
      </Box>
    </Box>
  );
}

