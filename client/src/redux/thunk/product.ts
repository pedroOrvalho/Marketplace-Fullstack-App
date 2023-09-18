import { AppDispatch } from "../store";
import { getProductsListData, getProductById } from "../slices/product";

export function fetchAllProductsData() {
  const productUrl = "http://localhost:7000/product";
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productUrl);
    const productData = await response.json();
    dispatch(getProductsListData(productData));
  };
}

export function fetchProductById(id: string | undefined) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`http://localhost:7000/product/${id}`);
    const data = await response.json();
    dispatch(getProductById(data));
  };
}
