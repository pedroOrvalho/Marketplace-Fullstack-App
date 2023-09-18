import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch } from "../redux/store";
import { fetchProductById } from "../redux/thunk/product";
import ProductDetailSlider from "../components/productDetail/ProductDetailSlider";
import ProductDetailInfo from "../components/productDetail/ProductDetailInfo";

import { Paper } from "@mui/material";

export default function ProductDetail() {
  const dispatchThunk = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    dispatchThunk(fetchProductById(id));
  }, [id, dispatchThunk]);

  return (
    <Paper className="productDetail_container" elevation={5}>
      <ProductDetailSlider />
      <ProductDetailInfo />
    </Paper>
  );
}
