import "react-responsive-carousel/lib/styles/carousel.min.css";
import  {Carousel}  from "react-responsive-carousel";

import market from "../../images/market.jpg"
import people from "../../images/people.jpg"
import clothes from "../../images/clothes.jpg"

export default function HomeCarrousel() {
  return (
    <div>
       <Carousel>
        <div>
          <img src={market} alt="" style={{ height: "450" }} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={people} alt="" style={{ height: "450" }} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={clothes} alt="" style={{ height: "450" }} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}



