import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

export default function ProductDetailSlider() {
  const productDetail = useSelector(
    (state: RootState) => state.products.productDetail
  );
  const [toggler, setToggler] = useState(false);

  return (
    <div className="productDetail_slider_container">
      <img
        onClick={() => setToggler(!toggler)}
        src={productDetail?.image[0]}
        alt={productDetail?.title}
      />
      <FsLightbox
        toggler={toggler}
        sources={productDetail?.image}
        type="image"
      />
    </div>
  );
}
