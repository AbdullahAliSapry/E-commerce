import { createSlice } from "@reduxjs/toolkit";


interface IUserConfirmation {
  fullName: string;
  isAdmin: boolean;
  token: string;
  id: string;
}

interface IAuth {
  userConfirmationAdmin: IUserConfirmation | null;
  messageRegister: string | null;
  EmailVerified: boolean;
}

const storedData: string = localStorage.getItem("userConfirmationAdmin")!;

const initialState: IAuth = {
  userConfirmationAdmin: storedData ? JSON.parse(storedData) : null,
  messageRegister: null,
  EmailVerified: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userConfirmationAdmin = action.payload;
      state.messageRegister = null;
    },
    logout: (state) => {
      state.userConfirmationAdmin = null;
    },
    signup: (state, action) => {
      state.messageRegister = action.payload;
    },
    setEmailVerified: (state) => {
      state.EmailVerified = true;
      state.messageRegister = null;
    },
  },
});

export const { login, logout, signup, setEmailVerified } = AuthSlice.actions;

export default AuthSlice.reducer;
