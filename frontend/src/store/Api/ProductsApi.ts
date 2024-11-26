/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/Store";
import {
  createOrder,
  getAllProducts,
  getProduct,
  getProductsCount,
} from "@store/auth/ProductSlice";
import { removeProduct } from "@store/auth/UserSlice";
import { toast } from "react-toastify";
import { api } from "src/utils/RequestApi";
import { IOrder } from "src/utils/interfaces";

export const GetAllProductsApi = (
  numberOfPage: number | null,
  limit: number | null
) => {
  return async (dispatch: Dispatch<PayloadAction<string>>) => {
    try {
      const { data } = await api.get(
        `/api/v1/products?${numberOfPage ? `pageNumber=${numberOfPage}` : ``}${
          limit ? `&limit=${limit}` : ``
        } `
      );
      dispatch(getAllProducts(data.data.products));
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
};

export const GetAllProductsApiWithCategory = (categoryName: string) => {
  return async (dispatch: Dispatch<PayloadAction<string>>) => {
    try {
      const { data } = await api.get(
        `/api/v1/products?category=${categoryName}`
      );
      dispatch(getAllProducts(data.data.products));
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
};

export const getAllProductsCount = () => {
  return async (dispatch: Dispatch<PayloadAction<number>>) => {
    try {
      const { data } = await api.get(`/api/v1/products/count`);
      dispatch(getProductsCount(data.data.Count));
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
};

export const getSingleProduct = (PostId: string) => {
  return async (dispatch: Dispatch<PayloadAction<number>>) => {
    try {
      const { data } = await api.get(`/api/v1/products/${PostId}`);
      dispatch(getProduct(data.data.product));
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
};

//: ThunkAction<void, RootState, unknown, PayloadAction<boolean>>
// wait for handler to cart operation to complete
export const createOrderToProduct = (dataToOrder: Omit<IOrder, "_id">) => {
  return async (
    dispatch: Dispatch<PayloadAction<boolean>>,
    getState: () => RootState
  ) => {
    try {
      const { data } = await api.post(`/api/v1/orders/create`, dataToOrder, {
        headers: {
          Authorization: "Bearer " + getState().Auth.userConfirmation?.token,
          "Content-Type": "application/json",
        },
      });
      dispatch(createOrder(true));
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
};

// cart to user action

export const addToWishlist = (productId: string) => {
  return async (
    dispatch: Dispatch<PayloadAction<string>>,
    getState: () => RootState
  ) => {
    try {
      const { data } = await api.post(
        `/api/v1/cart/add`,
        {
          productId: productId,
        },
        {
          headers: {
            Authorization: "Bearer " + getState().Auth.userConfirmation?.token,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
};

export const RemoveFromWishlist = (productId: string) => {
  return async (
    dispatch: Dispatch<PayloadAction<string>>,
    getState: () => RootState
  ) => {
    try {
      await api.delete(`/api/v1/cart/delete-product/${productId}`, {
        headers: {
          Authorization: "Bearer " + getState().Auth.userConfirmation?.token,
        },
      });
      dispatch(removeProduct(productId));
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
};
