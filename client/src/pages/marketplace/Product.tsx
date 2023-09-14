import { useEffect } from "react";
import { CircularProgress, Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchAllProductsData } from "../../redux/thunk/product";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const productsList = useSelector(
    (state: RootState) => state.products.products
  );
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllProductsData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <CircularProgress color="secondary" />
      </div>
    );
  }

  return (
    <Grid
      container
      className="productList_container"
      sx={{
        gap: "1vw",
        justifyContent:"center"
      }}
    >
      {productsList.map((item) => (
        <Grid
          item
          xs={11}
          sm={5.3}
          md={3.6}
          lg={2.2}
          xl={1.8}
          key={item._id}
        >
          <ProductItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
