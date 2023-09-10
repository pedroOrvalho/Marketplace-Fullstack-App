import { Link } from "react-router-dom";

import MarketItem from "../../components/Home/HomeCarrousel";

import { Box } from "@mui/material";
import PanToolAltSharpIcon from "@mui/icons-material/PanToolAltSharp";
import PublicSharpIcon from "@mui/icons-material/PublicSharp";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import HomeBanner from "../../components/Home/HomeBanner";

export default function Home() {
  return (
    <Box
      className="home_container"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <HomeBanner />
      <div className="marketItem">
        <MarketItem />
      </div>
      <h1 className="why" style={{ textAlign: "center", color: "blue" }}>
        Why people love Marketplace
      </h1>

      <div className="why_icons">
        <div className="why_icons2">
          <div>
            <p>
              <PanToolAltSharpIcon
                style={{
                  color: "grey",
                  width: 400,
                  height: 100,
                  textAlign: "left",
                }}
              />
            </p>
            <p>
              <strong>Free to use</strong>
            </p>
            <p>
              Anyone with an active account can list or buy items with no hidden
              fees
            </p>
          </div>
          <div>
            <p>
              <PublicSharpIcon
                style={{
                  color: "grey",
                  width: 400,
                  height: 100,
                  textAlign: "center",
                }}
              />
            </p>
            <p>
              <strong> Local and nationwide</strong>
            </p>
            <p>
              Browse and buy, or list and sell items to other Facebook users
              across the country
            </p>
          </div>
          <div>
            <p>
              <ChatBubbleOutlineSharpIcon
                style={{
                  color: "grey",
                  width: 400,
                  height: 100,
                }}
              />
            </p>
            <p>
              <strong> Connect with others</strong>
            </p>
            <p className="connect">
              Whether you're selling or buying, you can chat with others through
              Messenger
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
}
