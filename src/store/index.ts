import { configureStore, combineReducers, ThunkAction, Action } from "@reduxjs/toolkit";
import { apiSlice } from "../redux/api/apiSlice";
import authReducer from "./reducer/authSlice";
import petOwnerReducer from "./reducer/petOwnerSlice";

export const store = configureStore({
  reducer: (state, action) => {
    if (action.type === "auth/logout") {
      state = undefined;
      localStorage.removeItem("token");
      localStorage.removeItem("currentPetOwnerId");
    }
    return combineReducers({
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer,
      petOwner: petOwnerReducer,
    })(state, action);
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
