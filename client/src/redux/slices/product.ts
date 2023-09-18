import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../components/types/type";

type InitialState = {
  productsList: Product[];
  productDetail: Product | null;
  isLoading: boolean;
  searchProduct: [];
};

const initialState: InitialState = {
  productsList: [],
  productDetail: null,
  isLoading: true,
  searchProduct: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsListData: (state, action: PayloadAction<Product[]>) => {
      state.productsList = action.payload;
      state.isLoading = false;
    },
    getProductById: (state, action: PayloadAction<Product>) => {
      state.productDetail = action.payload;
      state.isLoading = false;
    },
    searchProduct: (state, action: PayloadAction<string>) => {
      const result = state.productsList.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.productsList = result;
    },
  },
});

export const { getProductsListData, getProductById, searchProduct } =
  productSlice.actions;

  const productReducer = productSlice.reducer;
export default productReducer;
