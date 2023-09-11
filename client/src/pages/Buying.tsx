import shopper from "../images/shopper.jpg";
import BuyingBanner from "../components/buying/BuyingBanner";
import BuyingIcons from "../components/buying/BuyingIcons";

export default function Buying() {
  return (
    <div className="buyingPage_container">
      <BuyingBanner />
      <BuyingIcons />
    </div>
  );
}

/*


      <div className="image">
        <div className="image1">
          <img src={shopper} alt="" style={{ width: 400 }} />
        </div>
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
        <p className="buy_sell">Buy or Sell on Marketplace</p>
        <Link to="/">
          <button className="btn3">Go to Marketplace</button>
        </Link>
      </div>

*/
