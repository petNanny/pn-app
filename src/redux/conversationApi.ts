import { apiSlice } from "./api/apiSlice";

export const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    petOwnerStartConversation: builder.mutation({
      query: ({ body }) => ({
        url: `/conversations`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { usePetOwnerStartConversationMutation } = conversationApi;
