import PhotoIcon from "@mui/icons-material/Photo";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LabelIcon from "@mui/icons-material/Label";
import { Box } from "@mui/material";

export default function SellingIcons() {
  return (
    <div className="sellingIcons_container">
      <div className="sellingIcons_info_container">
        <h2>Tips for Selling on Marketplace</h2>
        <p>
          If you'd like to attract more prospective buyers, get better offers
          and sell your items faster, keep the following best practices in mind
          when creating your listings for Marketplace.
        </p>
      </div>
      <div className="sellingIcons_grid_container">
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
          <div className="sellingIcons_grid_item">
            <PhotoIcon id="sellingIcons" />
            <h3>Take your own photos</h3>
            <p>
              Avoid using photos of items that you don't own or haven't taken
              yourself. Most buyers can recognize when an image has been
              borrowed and repurposed from another website. Build trust with
              potential buyers by taking your own authentic, original and
              up-to-date photos.
            </p>
          </div>
          <div className="sellingIcons_grid_item">
            <NoteAltIcon id="sellingIcons" />
            <h3>Write a full, honest description</h3>
            <p>
              Although not required, adding a description to your listing will
              help you build trust with potential buyers, which can get you more
              offers and help you sell your item quicker. When writing a
              description for your item, think about the questions potential
              buyers may have so you can anticipate their objections and put
              their mind at ease.
            </p>
          </div>
          <div className="sellingIcons_grid_item">
            <SummarizeIcon id="sellingIcons" />
            <h3>Provide original purchase documentation</h3>
            <p>
              Certificates, original packaging, receipts or manuals can help
              buyers feel confident purchasing from you. This is especially the
              case when you're selling items that are highly regulated, such as
              baby toys and childcare equipment.
            </p>
          </div>
          <div className="sellingIcons_grid_item">
            <LocalOfferIcon id="sellingIcons" />
            <h3>Make sure the price is right</h3>
            <p>
              When you make your listing, we'll let you know what similar items
              are listed for near you. You can also search Marketplace for
              similar items to compare. Offering fair and competitive pricing
              will make it easier to sell your item in less time.
            </p>
          </div>
          <div className="sellingIcons_grid_item">
            <ChatBubbleOutlineIcon id="sellingIcons" />
            <h3>Be responsive and professional</h3>
            <p>
              On Marketplace, buyers and sellers can rate each other on response
              time, payment speed and more. To be successful as a seller on
              Marketplace, be as responsive as possible with your buyers. Make
              sure you're always on the same page about price, payment options,
              meeting location, shipping or any other details.
            </p>
          </div>
          <div className="sellingIcons_grid_item">
            <LabelIcon id="sellingIcons" />
            <h3>Mark your item as sold</h3>
            <p>
              When your buyer has received the item from you, mark it as sold so
              you don't get additional offers.
            </p>
          </div>
        </Box>
      </div>
    </div>
  );
}

/*



      <div>
        <div>
          
        </div>
      </div>

    
      </div>

*/
