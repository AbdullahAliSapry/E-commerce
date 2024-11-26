/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { getAllCategories } from "@store/auth/CategorySlice";
import { toast } from "react-toastify";
import { api } from "src/utils/RequestApi";

export const GetAllCategoriesApi = () => {
  return async (dispatch: Dispatch<PayloadAction<string>>) => {
    try {
      const { data } = await api.get(`/api/v1/category`);
      dispatch(getAllCategories(data.data.categories));
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
};
