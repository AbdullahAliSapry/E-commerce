/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { api } from "../../utilities/Requist";
import { toast } from "react-toastify";
import { IProduct } from "../../utilities/Interfaces";

export const createProductApi = (obj: IProduct) => {
  return async (
    dispatch: Dispatch<PayloadAction<boolean>>,
    getState: () => RootState
  ) => {
    try {
      const { data } = await api.post("/api/v1/products", obj, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + getState().Auth.userConfirmationAdmin?.token,
        },
      });
      toast.success(data.message);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };
};
