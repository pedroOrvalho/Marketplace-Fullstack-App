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
      <div className="productDetail_slider_container">
        <button onClick={() => setToggler(!toggler)}>
          <img src={productDetail?.image[1]} alt={productDetail?.title} />
        </button>
        <FsLightbox toggler={toggler} sources={productDetail?.image} />
      </div>
      <div className="productDetail_info_container">
        <h1>{productDetail?.title}</h1>
      </div>
    </div>
  );
}
