import baseApi from "./baseApi";

const chanelApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createChanel: build.mutation({
      query: ({ id, formData }) => ({
        url: `/chanel/create/${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Group", "Chanel"],
    }),
    getChanelById: build.query({
      query: (id) => ({
        url: `/chanel/${id}`,
        method: "GET",
      }),
      providesTags: [
        "Group",
        "Chanel",
        "ChannelMembers",
        "ChannelFiles",
        "ADMIN",
      ],
    }),

    //clear all message from channel
    clearChannel: build.mutation({
      query: (id) => ({
        url: `/message/delete/messages/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Group", "Chanel", "chat", "ChannelFiles","ADMIN",],
    }),

    //get all member
    getAllMember: build.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: [
        "Group",
        "Chanel",
        "ChannelMembers",
        "ChannelFiles",
        "ADMIN",
      ],
    }),

    //add member channel
    addMember: build.mutation({
      query: ({ userId, channelId }) => ({
        url: `/chanel/add-member/${channelId}`,
        method: "POST",
        body: { userId },
      }),
      invalidatesTags: ["ChannelMembers", "Chanel", "Group"],
    }),

    //delete member
    deleteMember: build.mutation({
      query: ({ userId, channelId }) => ({
        url: `/chanel/remove-member/${channelId}`,
        method: "POST",
        body: { userId },
      }),
      invalidatesTags: ["ChannelMembers", "Chanel", "Group"],
    }),
  }),
});

export const {
  useCreateChanelMutation,
  useGetChanelByIdQuery,
  useClearChannelMutation,
  useGetAllMemberQuery,
  useDeleteMemberMutation,
  useAddMemberMutation,
} = chanelApi;
