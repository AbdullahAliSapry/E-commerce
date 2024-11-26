import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./slices/CategorySlice";
import AuthSlice from "./slices/AuthSlice";
import ProductSlice from "./slices/ProductSlice";

export const store = configureStore({
  reducer: {
    CategoryReducer: CategorySlice,
    Auth:AuthSlice,
    Product:ProductSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
