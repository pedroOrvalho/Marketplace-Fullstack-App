import { AppDispatch } from "../store";
import { productActions } from "../slices/product";

export function fetchProductData() {
  const productUrl = "http://localhost:7000/products";
return async (dispatch: AppDispatch) => {

    const response = await fetch(productUrl);
    const productData = await response.json();
    dispatch(productActions.getProductData(productData));
  };
}
