import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import HouseIcon from "@mui/icons-material/House";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import cars from "../images/cars.jpg"

export default function Buying() {
  return (
    <div className="Buying">
      <div>
        <p className="house">
          <HouseIcon
            style={{
              color: "white",
              width: 400,
              height: 100,
            }}
          />
        </p>

        <p className="buy" style={{ color: "white" }}>
          Buying on Marketplace
        </p>
        <p style={{ color: "white", fontSize: "1.5rem" }}>
          Learn more about buying things on Marketplace, where you can find
          thousands
          <br />
          of items for sale by people and businesses near you.
        </p>

        <button className="btn_market">Browse Marketplace</button>
      </div>

      <div className="marketplace">
        <h2>About Marketplace</h2>

        <p>
          Did you know you can find things to buy from people and businesses on
          ONLINE? Marketplace makes it easy to find new and used items like
          clothes, furniture, cars and
          <br />
          <span>
            even your next home to rent. Here's more information about
            Marketplace and how to buy things online.
          </span>
        </p>

        <h3>Benefits of Buying on Marketplace </h3>
      </div>

      <div>
        <p>
          <LocationOnIcon
            style={{
              color: "grey",
              width: 400,
              height: 100,
            }}
          />
        </p>
        <p>
          <p className="seethings">
            <strong> See things for sale from people near you </strong>
            <br />
            Marketplace lets you see what real people in your own community are
            selling. You can see their public profile, mutual friends and seller
            ratings so you can feel confident in your purchase.
          </p>
        </p>
        <br />
        <p>
          <BusinessCenterIcon
            style={{
              color: "grey",
              width: 400,
              height: 100,
            }}
          />
        </p>
        <h3> Find deals on top brands</h3>
        <p>
          You can also find deals on new and used items from top brands on
          Marketplace.
        </p>
        <br />

        <p>
          <SearchOutlinedIcon
            style={{
              color: "grey",
              width: 400,
              height: 100,
            }}
          />
        </p>
        <h3> Easily find what you're looking for</h3>
        <p>
          You can search for specific items or browse by category. You can also
          use filters to adjust the seller's location, price and more when
          buying on Marketplace. If you're not ready to buy, you can save your
          favorite listings for later
        </p>
        <p>
          <GroupsOutlinedIcon
            style={{
              color: "grey",
              width: 400,
              height: 100,
            }}
          />
        </p>
        <h3>Join Buy and Sell Groups</h3>

        <p>
          You can shop among people who have things in common with you through
          buy and sell groups. You can find buy and sell groups around specific
          neighborhoods, interests, items and more by searching online.
        </p>
        <br />
        <p>
          <ChatBubbleOutlineOutlinedIcon
            style={{
              color: "grey",
              width: 400,
              height: 100,
            }}
          />
        </p>
        <h3>Message and pay through Messenger</h3>
        <p>
          You don't need to leave ... when shopping on Marketplace or give your
          phone number and email to strangers. Instead, you can use Messenger on
          most listings to ask the seller questions, arrange pickup and pay.
        </p>
        <br />
        <p>
          <LocalShippingOutlinedIcon
            style={{
              color: "grey",
              width: 400,
              height: 100,
            }}
          />
        </p>
        <p>
          <strong>
          
            Checkout on the platform and get items shipped to you
          </strong>
        </p>
        <p>
          You can checkout directly on Marketplace when buying some items on
          Marketplace and eligible items are covered by Purchase Protection.
        </p>
      </div>

      <div>
        <img src={cars} alt="" style={{ width: 300 }} />
      </div>
      <div>
      </div>
      <div className="buying_page1">
        <p className="buyingpage">
          <HouseIcon
            style={{
              color: "white",
              width: 400,
              height: 100,
            }}
          />
        </p>
        <h2 className="buy_sell">Buy or Sell on Marketplace</h2>

        <button className="btn3">Go to Marketplace</button>
      </div>
    </div>
  );
}
