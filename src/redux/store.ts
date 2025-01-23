import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "./features/cart/cartSlice";
import authReducer from "./features/auth/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // denote local storage
const persistCartConfig = {
  key: "cart",
  storage,
};
const persistAuthConfig = {
  key: "auth",
  storage,
};
const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: persistedCartReducer, // Add your slice here
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
export const persistor = persistStore(store);
