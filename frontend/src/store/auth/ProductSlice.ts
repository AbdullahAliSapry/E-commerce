import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "src/utils/interfaces";

interface IProductState {
  products: IProduct[];
  productsCount: number;
  product: IProduct |null;
  orderCreated:boolean |null;
  isLoading:boolean
}

const initialState: IProductState = {
  products: [],
  productsCount: 0,
  product: null,
  orderCreated: null,
  isLoading:false
};

const productSlice = createSlice({
  initialState,
  name: "product",
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
    getProductsCount: (state, action) => {
      state.productsCount = action.payload;
    },
    getProduct: (state, action) => {
      state.product = action.payload;
    },
    createOrder: (state, action) => {
      state.orderCreated = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getAllProducts, getProductsCount, getProduct, createOrder } =
  productSlice.actions;

export default productSlice.reducer;
