import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "src/utils/interfaces";

interface ICategoryState {
  categories: ICategory[];
}

const initialState: ICategoryState = {
  categories: [],
};

const CategorySlice = createSlice({
  initialState,
  name: "product",
  reducers: {
    getAllCategories: (state, action) => {
      state.categories = action.payload;
    }
  },
});

export const { getAllCategories } = CategorySlice.actions;

export default CategorySlice.reducer;
