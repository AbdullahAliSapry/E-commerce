/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { getUser } from "@store/auth/UserSlice";
import { toast } from "react-toastify";
import { api } from "src/utils/RequestApi";

export const getDataToUser = (userId: string) => {
  return async (dispatch: Dispatch<PayloadAction<string>>) => {
    try {
      const { data } = await api.get(`/api/v1/users/${userId}`);

      dispatch(getUser(data.data.user));
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
};
