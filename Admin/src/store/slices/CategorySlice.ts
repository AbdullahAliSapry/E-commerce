import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "./../../utilities/Interfaces";

interface ISliceCategory {
  catagories: ICategory[];
  isAdded: boolean;
}

const initialState: ISliceCategory = {
  catagories: [],
  isAdded: false,
};

const CategorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
    SetCategories: (state, action) => {
      state.catagories = action.payload;
    },
  },
});

export const { SetCategories } = CategorySlice.actions;
export default CategorySlice.reducer;
