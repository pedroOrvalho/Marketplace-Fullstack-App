import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchAllProductsData } from "../../redux/thunk/product";
import ProductItem from "./ProductItem";


export default function ProductList() {
const products = useSelector((state: RootState) => state.products.products);
const isLoading = useSelector((state: RootState) => state.products.isLoading);
const dispatch = useDispatch<AppDispatch>();

useEffect(() => {
  dispatch(fetchAllProductsData());
}, [dispatch]);

console.log( products ," products")
if (isLoading) {
  return (
    <div>
      <CircularProgress color="secondary" />
    </div>
  );
}

 return (
   <div className="product-div">
     <h3>Products</h3>
     {products.map((item) => (
       <ProductItem item={item} />
     ))}
   </div>
 );
}
