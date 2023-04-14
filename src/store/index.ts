import { configureStore, combineReducers, ThunkAction, Action } from "@reduxjs/toolkit";
import { apiSlice } from "../redux/api/apiSlice";
import authReducer from "./reducer/authSlice";
import boardingPageReducer from "./reducer/boardingPageSlice";
import petOwnerReducer from "./reducer/petOwnerSlice";
import petSitterReducer from "./reducer/petSitterSlice";
import petReducer from "./reducer/petSlice";
import adminPageReducer from "./reducer/adminSlice";
import adminAuthReducer from "./reducer/adminAuthSlice";
import adminUserReducer from "./reducer/adminUserSlice";

export const store = configureStore({
  reducer: (state, action) => {
    if (action.type === "auth/logout") {
      state = undefined;
      localStorage.removeItem("token");
      localStorage.removeItem("currentPetOwnerId");
    }
    if (action.type === "admin/logout") {
      state = undefined;
      localStorage.removeItem("adminToken");
      localStorage.removeItem("currentAdminId");
    }
    return combineReducers({
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer,
      adminAuth: adminAuthReducer,
      petOwner: petOwnerReducer,
      boardingPage: boardingPageReducer,
      petSitter: petSitterReducer,
      pet: petReducer,
      adminPage: adminPageReducer,
      adminUser: adminUserReducer,
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
