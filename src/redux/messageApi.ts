import { apiSlice } from "./api/apiSlice";

export const messageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: ({ body }) => ({
        url: `/messages/addMessage`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSendMessageMutation } = messageApi;
