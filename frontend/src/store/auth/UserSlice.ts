import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "src/utils/interfaces";

interface IWishlist {
  productId: string;
  userId: string;
  _id: string;
  product: IProduct;
}

interface IUserData {
  name: string;
  email: string;
  _id: string;
  wishlist: IWishlist[];
}

interface IDateState {
  user: IUserData | null;
  isLoading: boolean;
}

const initialState: IDateState = {
  user: null,
  isLoading: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.wishlist = state.user.wishlist.filter(
          (product) => product._id ==action.payload
        );
  
      }
    },
  },
});

export const { getUser, removeProduct } = UserSlice.actions;

export default UserSlice.reducer;
