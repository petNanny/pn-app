import { apiSlice } from "./api/apiSlice";

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
        url: "/petOwners/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState()); // clear out the cache
          }, 1000);
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

    googleLogin: builder.mutation({
      query: ({ tokenId }) => ({
        url: "/auth/google",
        method: "POST",
        body: {
          token: tokenId,
        },
      }),
    }),

    verifyEmail: builder.query({
      query: ({ userId, token }) => ({
        url: `/auth/verify/${userId}/${token}/`,
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
  useGoogleLoginMutation,
  useVerifyEmailQuery,
} = authApi;
