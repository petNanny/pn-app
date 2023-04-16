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

    userOneConversationMessages: builder.query({
      query: (id) => ({
        url: `/messages/getMessages/${id}`,
        method: "GET",
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        providesTags: [{ type: "Conversation", id: "List" }],
      }),
    }),
  }),
});

export const { useSendMessageMutation, useUserOneConversationMessagesQuery } = messageApi;
