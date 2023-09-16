import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FsLightbox from "fslightbox-react";

import { AppDispatch, RootState } from "../redux/store";
import { fetchProductById } from "../redux/thunk/product";

export default function ProductDetail() {
  const productDetail = useSelector(
    (state: RootState) => state.products.productDetail
  );
  console.log(productDetail, "PRODUCT DETAIL INFO");
  const dispatchThunk = useDispatch<AppDispatch>();
  const { id } = useParams();
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    dispatchThunk(fetchProductById(id));
  }, [id, dispatchThunk]);

  return (
    <div className="productDetail_container">
      <button onClick={() => setToggler(!toggler)}>Open the lightbox.</button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://i.imgur.com/fsyrScY.jpg",
          "https://revealthat.com/wp-content/uploads/2022/08/iphone14-black.jpg",
          "https://www.jbhifi.com.au/cdn/shop/products/596664-Product-0-I-637982209640642178_f7b95b4c-f054-42c9-9f96-d3f7b7a211f1.jpg?v=1686263287",
          "https://i.redd.it/qd3xzi3munl91.jpg",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661969351230",
        ]}
      />
    </div>
  );
}
