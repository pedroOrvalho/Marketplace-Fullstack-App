import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch } from "../redux/store";
import { fetchProductById } from "../redux/thunk/product";
import ProductDetailSlider from "../components/productDetail/ProductDetailSlider";
import ProductDetailInfo from "../components/productDetail/ProductDetailInfo";

export default function ProductDetail() {
  const dispatchThunk = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    dispatchThunk(fetchProductById(id));
  }, [id, dispatchThunk]);

  return (
    <div className="productDetail_container">
      <ProductDetailSlider />
      <ProductDetailInfo />
    </div>
  );
}
