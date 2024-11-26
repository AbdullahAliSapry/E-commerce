import { createSlice } from "@reduxjs/toolkit";

// interface IUser {
//   name: string;
//   email: string;
//   address: string;
//   phone: string;
// }

interface IUserConfirmation {
    fullName:string;
    isAdmin:boolean;
    token:string;
    id:string;
}

interface IAuth {
  userConfirmation: IUserConfirmation | null;
  messageRegister: string | null;
  EmailVerified: boolean;
}

const storedData: string = localStorage.getItem("userConfirmation")!;

const initialState: IAuth = {
  userConfirmation: storedData ? JSON.parse(storedData) : null,
  messageRegister: null,
  EmailVerified: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userConfirmation = action.payload;
      state.messageRegister = null;
    },
    logout: (state) => {
      state.userConfirmation = null;
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
