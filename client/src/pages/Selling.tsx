import { Link } from "react-router-dom";

import HouseIcon from "@mui/icons-material/House";
import PhotoIcon from "@mui/icons-material/Photo";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import cart from "../images/cart.jpg";
import lady from "../images/lady.jpg";
import SellingBanner from "../components/selling/SellingBanner";
import SellingIcons from "../components/selling/SellingIcons";

export default function Selling() {
  return (
    <div className="sellingPage_container">
      <SellingBanner />
      <SellingIcons />
    </div>
  );
}
