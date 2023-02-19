import { apiSlice } from "./api/apiSlice";
import { logOut } from "../store/reducer/authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          ...credentials,
        },
      }),
    }),

    register: builder.mutation({
      query: (initialUserData) => ({
        url: "/auth/register",
        method: "POST",
        body: {
          ...initialUserData,
        },
      }),
    }),

    sendLogout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logOut);
          dispatch(apiSlice.util.resetApiState()); // clear out the cache
        } catch (err) {
          console.log(err);
        }
      },
    }),

    refreshToken: builder.mutation({
      query: () => ({
        url: "/auth/refresh_token",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useSendLogoutMutation,
  useRefreshTokenMutation,
} = authApi;
