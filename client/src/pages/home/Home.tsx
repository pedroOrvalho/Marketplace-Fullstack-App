import MarketItem from './HomeCarrousel';

import PublicSharpIcon from "@mui/icons-material/PublicSharp";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="discover">
          Discover, buy and <br />
          <span className="goods">sell goods with Marketplace.</span>
        </h1>
        <div className="explore">
          <button className="btn_explore">Explore Marketplace</button>{" "}
          <span>Create Listing</span> <br />
          <p className="ecommerce">
            Marketplace is an e-commerce platform that connects sellers and
            buyers through meaningful interactions and unique goods.
          </p>
        </div>
      </div>
      <div className="marketItem">
        <MarketItem />
      </div>

      <div>
        <h1>Why people love Marketplace</h1>
      </div>
      <div className="why">
        <div>
          <p> fingericon</p>
          <p>
            <strong>Free to use</strong>
          </p>
          <p>
            Anyone with an active account can list or buy items with no hidden
            fees
          </p>

          <div>
            <p>
              <PublicSharpIcon
                style={{
                  color: "grey",
                  width: 400,
                  height: 100,
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
          <p>
            Whether you're selling or buying, you can chat with others through
            Messenger
          </p>
        </div>
      </div>
    </div>
  );
}
