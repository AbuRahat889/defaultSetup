import baseApi from "./baseApi";

const chatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all message
    createChat: build.mutation({
      query: ({ id, formData }) => ({
        url: `/message/send-message/${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["chat", "Chanel", "Group"],
    }),

    //get single message  /message/678b6c9b207e8779fee25564
    getSingleMessage: build.query({
      query: (id) => ({
        url: `/message/${id}`,
        method: "GET",
      }),
    }),

    //multiple message from channel
    deleteMultipleMessage: build.mutation({
      query: (ids) => ({
        url: `/message/delete/multiple-messages`,
        method: "DELETE",
        body: ids,
      }),
      invalidatesTags: ["Group", "Chanel", "chat", "ChannelFiles", "ADMIN"],
    }),

    getSearchMessage: build.query({
      query: ({ id, search }) => ({
        url: `/message/search/messages/${id}?search=${search}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateChatMutation,
  useDeleteMultipleMessageMutation,
  useGetSingleMessageQuery,
  useGetSearchMessageQuery,
} = chatApi;
