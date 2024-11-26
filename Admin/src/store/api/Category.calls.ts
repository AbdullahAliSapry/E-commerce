import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../utilities/Requist";
import { RootState } from "../Store";
import { toast } from "react-toastify";
// dispatch: Dispatch<PayloadAction<boolean>>,
// getState: () => RootState

export const AddNewCategoryApi = (category) => {
  return async (
    dispatch: Dispatch<PayloadAction<boolean>>,
    getState: () => RootState
  ) => {
    console.log(category.image);
    
    try {
      const { data } = await api.post(
        `/api/v1/category`,
        category ,
        {
          headers: {
            Authorization:
              "Bearer " + getState().Auth.userConfirmationAdmin?.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(data.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
};
