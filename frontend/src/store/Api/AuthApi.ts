/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, setEmailVerified, signup } from "@store/auth/AuthSlice";
import { api } from "src/utils/RequestApi";
import { objAuth } from "src/utils/interfaces";
import { toast } from "react-toastify";

export const RegisterApi = (userDate: objAuth) => {
  return async (dispatch: Dispatch<PayloadAction<string>>) => {
    try {
      const { data } = await api.post("/api/v1/auth/register", {
        email: userDate.Email,
        password: userDate.Password,
        name: userDate.Name,
      });
      dispatch(signup(data.message));
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
};

export const LoginApi = (
  userDate: Omit<objAuth, "Name" | "ConfirmPassword">
) => {
  return async (dispatch: Dispatch<PayloadAction<string>>) => {
    try {
      const { data } = await api.post("/api/v1/auth/login", {
        email: userDate.Email,
        password: userDate.Password,
      });
      toast.success(data.message);
      localStorage.setItem("userConfirmation", JSON.stringify(data.data));
      dispatch(login(data.data));
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
};

// /:userId/verify/:token
export function verifyEmail(
  userId: string | undefined,
  token: string | undefined
) {
  return async (dispatch: Dispatch) => {
    try {
      await api.get(`/api/v1/auth/${userId}/verify/${token}`);
      dispatch(setEmailVerified());
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
}

export function logoutUser() {
  return (dispatch: Dispatch) => {
    localStorage.removeItem("userConfirmation");
    dispatch(logout());
  };
}
