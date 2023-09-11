import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Box } from "@mui/material";

export default function BuyingIcons() {
  return (
    <div className="buyingIcons_container">
      <div className="buyingIcons_info_container">
        <h2>About Marketplace</h2>
        <p>
          Did you know you can find things to buy from people and businesses on
          ONLINE? Marketplace makes it easy to find new and used items like
          clothes, furniture, cars and even your next home to rent. Here's more
          information about Marketplace and how to buy things online.
        </p>
      </div>
      <div className="buyingIcons_grid_container">
        <h2>Benefits of Buying on Marketplace </h2>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr", lg: "1fr 1fr 1fr" },
            gap: "50px",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div className="buyingIcons_grid_item">
            <LocationOnIcon id="buyingIcons" />
            <h3> See things for sale from people near you </h3>
            <p>
              See things for sale from people near you Marketplace lets you see
              what real people in your own community are selling. You can see
              their public profile, mutual friends and seller ratings so you can
              feel confident in your purchase.
            </p>
          </div>
          <div className="buyingIcons_grid_item">
            <BusinessCenterIcon id="buyingIcons" />
            <h3> Find deals on top brands</h3>
            <p>
              You can also find deals on new and used items from top brands on
              Marketplace.
            </p>
          </div>
          <div className="buyingIcons_grid_item">
            <SearchOutlinedIcon id="buyingIcons" />
            <h3> Easily find what you're looking for</h3>
            <p>
              You can search for specific items or browse by category. You can
              also use filters to adjust the seller's location, price and more
              when buying on Marketplace. If you're not ready to buy, you can
              save your favorite listings for later
            </p>
          </div>
          <div className="buyingIcons_grid_item">
            <GroupsOutlinedIcon id="buyingIcons" />
            <h3>Join Buy and Sell Groups</h3>
            <p>
              You can shop among people who have things in common with you
              through buy and sell groups. You can find buy and sell groups
              around specific neighborhoods, interests, items and more by
              searching online.
            </p>
          </div>
          <div className="buyingIcons_grid_item">
            <ChatBubbleOutlineOutlinedIcon id="buyingIcons" />
            <h3>Message and pay through Messenger</h3>
            <p>
              You don't need to leave ... when shopping on Marketplace or give
              your phone number and email to strangers. Instead, you can use
              Messenger on most listings to ask the seller questions, arrange
              pickup and pay.
            </p>
          </div>
          <div className="buyingIcons_grid_item">
            <LocalShippingOutlinedIcon id="buyingIcons" />
            <h3>Checkout on the platform and get items shipped to you</h3>
            <p>
              You can checkout directly on Marketplace when buying some items on
              Marketplace and eligible items are covered by Purchase Protection.
            </p>
          </div>
        </Box>
      </div>
    </div>
  );
}
