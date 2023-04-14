import { apiSlice } from "./api/apiSlice";

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: "/admin/login",
        method: "POST",
        body: {
          ...credentials,
        },
      }),
    }),

    adminSendLogout: builder.mutation({
      query: () => ({
        url: "/admin/logout",
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

    adminRefreshToken: builder.mutation({
      query: () => ({
        url: "/admin/refresh_token",
        method: "GET",
      }),
    }),

    getOneAdmin: builder.query({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "GET",
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        providesTags: [{ type: "Admin", id: "List" }],
      }),
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useAdminSendLogoutMutation,
  useAdminRefreshTokenMutation,
  useGetOneAdminQuery,
} = adminApi;
