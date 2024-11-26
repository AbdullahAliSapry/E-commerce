import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth/AuthSlice";
import ProductSlice from "./auth/ProductSlice";
import UserSlice from "./auth/UserSlice";
import CategorySlice from "./auth/CategorySlice";

export const store = configureStore({
  reducer: {
    Auth: AuthSlice,
    Products: ProductSlice,
    Users: UserSlice,
    Category: CategorySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
