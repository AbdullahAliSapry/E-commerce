import { createSlice } from "@reduxjs/toolkit";

interface IProductState {
  isProductCreated: boolean;
}

const initialState: IProductState = {
  isProductCreated: false,
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    createProduct: (state, action) => {
      state.isProductCreated = action.payload;
    },
  },
});

export const { createProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
