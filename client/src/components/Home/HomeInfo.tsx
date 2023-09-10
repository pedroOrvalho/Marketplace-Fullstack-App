import PanToolAltSharpIcon from "@mui/icons-material/PanToolAltSharp";
import PublicSharpIcon from "@mui/icons-material/PublicSharp";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";

export default function HomeInfo() {
  return (
    <div className="home_info_container">
      <div className="home_info_text_container">
        <h1>Why people love Marketplace</h1>
      </div>
      <div className="home_info_icons_container">
        <div className="home_info_icon">
          <PanToolAltSharpIcon
            sx={{
              width: "6rem",
              height: "6rem",
              color: "rgba(39, 87, 207, 0.931)",
            }}
          />
          <h3>Free to use</h3>
          <p>
            Anyone with an active account can list or buy items with no hidden
            fees
          </p>
        </div>
        <div className="home_info_icon">
          <PublicSharpIcon
            sx={{
              width: "6rem",
              height: "6rem",
              color: "rgba(39, 87, 207, 0.931)",
            }}
          />
          <h3>Local and nationwide</h3>
          <p>
            Browse and buy, or list and sell items to other Facebook users
            across the country
          </p>
        </div>
        <div className="home_info_icon">
          <ChatBubbleOutlineSharpIcon
            sx={{
              width: "6rem",
              height: "6rem",
              color: "rgba(39, 87, 207, 0.931)",
            }}
          />
          <h3>Connect with others</h3>
          <p>
            Whether you're selling or buying, you can chat with others through
            Messenger
          </p>
        </div>
      </div>
    </div>
  );
}
