import {Link} from "react-router-dom"

import HouseIcon from "@mui/icons-material/House";
import PhotoIcon from "@mui/icons-material/Photo";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import cart from "../images/cart.jpg"
import lady from "../images/lady.jpg"

export default function Selling() {

  return (
    <div>
      <div className="selling">
        <p>
          <HouseIcon
            style={{
              color: "white",
              width: 400,
              height: 100,
              marginBottom: "0",
              paddingLeft: "10rem",
            }}
          />
        </p>

        <p
          className="sell-on"
          style={{
            textAlign: "center",
            paddingLeft: "15rem",
            marginBottom: "0",
          }}
        >
          Selling on Marketplace
        </p>
        <p className="interest_sell" style={{ fontSize: "1.5rem",textAlign:"center"}}>
               Are you interested in selling on Marketplace?
          <br />
          Marketplace makes it easy to sell things to people in your local area.
          <br />
          Here's more information about selling on Marketplace.
        </p>
        <Link to="/">
          <button className="btn_sell" style={{textAlign:"center"}}> Try Selling Something</button>
        </Link>
      </div>

      <div>
        <h2 className="seller">
          <strong> What kind of seller are you?</strong>
        </h2>

        <div className="images">
          <img src={cart} alt="" style={{ width: 450 }} />
          <img src={lady} alt="" style={{ width: 450 }} />
        </div>
      </div>
      <div className="Tips">
        <h2>Tips for Selling on Marketplace</h2>
        <p>
          If you’d like to attract more prospective buyers, get better offers
          and sell your items faster, keep the following best practices in mind
          when creating your listings for Marketplace.
        </p>
      </div>
      <div className="icons">
        <div>
          <p>
            <PhotoIcon
              style={{
                color: "grey",
                width: 400,
                height: 100,
              }}
            />
          </p>
          <p>
            <strong> Take your own photos </strong>
          </p>
          <p>
            Avoid using photos of items that you don't own or haven't taken
            yourself. Most buyers can recognize when an image has been borrowed
            and repurposed from another website. Build trust with potential
            buyers by taking your own authentic, original and up-to-date photos.
            It's best practice to leave nothing to the imagination. Show
            potential buyers what your item looks like up close, from far away,
            on all sides and from multiple angles. Depending on what you’re
            selling, you may want to place it in front of a simple background or
            display it in an environment that potential buyers can relate to,
            such as a grill on a patio. If there's any imperfections, show that
            in the photos. Remember, the right photos can help you build trust
            with interested buyers and sell your item quicker.
          </p>
        </div>

        <div>
          <p>
            <NoteAltIcon
              style={{
                color: "grey",
                width: 400,
                height: 100,
              }}
            />
          </p>
          <p>
            <strong>Write a full, honest description </strong>
          </p>
          <p>
            Although not required, adding a description to your listing will
            help you build trust with potential buyers, which can get you more
            offers and help you sell your item quicker. When writing a
            description for your item, think about the questions potential
            buyers may have so you can anticipate their objections and put their
            mind at ease. Share information about the history of the item, the
            current condition and any other truthful information that may help
            you make the sale.
          </p>
        </div>

        <div>
          <p>
            <SummarizeIcon
              style={{
                color: "grey",
                width: 400,
                height: 100,
              }}
            />
          </p>
          <p>
            <strong> Provide original purchase documentation</strong>
            <p>
              Certificates, original packaging, receipts or manuals can help
              buyers feel confident purchasing from you. This is especially the
              case when you’re selling items that are highly regulated, such as
              baby toys and childcare equipment.
            </p>
          </p>
        </div>
        <div>
          <p>
            <LocalOfferIcon
              style={{
                color: "grey",
                width: 400,
                height: 100,
              }}
            />
          </p>
          <p>
            <strong> Make sure the price is right</strong>
          </p>
          <p>
            When you make your listing, we'll let you know what similar items
            are listed for near you. You can also search Marketplace for similar
            items to compare. Offering fair and competitive pricing will make it
            easier to sell your item in less time.
          </p>
        </div>
        <div>
          <p>
            <ChatBubbleOutlineIcon
              style={{
                color: "grey",
                width: 400,
                height: 100,
              }}
            />
          </p>
          <p>
            <strong> Be responsive and professional </strong>
          </p>
          <p>
            On Marketplace, buyers and sellers can rate each other on response
            time, payment speed and more. To be successful as a seller on
            Marketplace, be as responsive as possible with your buyers. Make
            sure you’re always on the same page about price, payment options,
            meeting location, shipping or any other details. Strive to receive
            only positive ratings and feedback from your customers because this
            can help you during future sales.
          </p>
        </div>
        <div>
        <p>Label</p>
          <p>
            <strong> Mark your item as sold</strong>
          </p>
          <p>
            When your buyer has received the item from you, mark it as sold so
            you don't get additional offers.
          </p> 
        </div>
      </div>
  
      <div className="selling_pages">
        <p className="seller">
          <HouseIcon
            style={{
              color: "white",
              width: 400,
              height: 80,
              margin: "0",
            }}
          />
        </p>
        <p style={{ color: "white", fontSize: "2rem" }}>Sell on Marketplace</p>
        <Link to="/">
          <button className="btn4">Create Listing</button>
        </Link>
      </div>
    </div>
  );
}
