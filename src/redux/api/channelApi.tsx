import baseApi from "./baseApi";

const channelApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Fetch channel details by ID
    getChannel: build.query({
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

    // Fetch files of a specific channel
    getChannelFiles: build.query({
      query: (id) => ({
        url: `/chanel/${id}/files`,
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

    // Fetch members of a specific channel
    getChannelMembers: build.query({
      query: (id) => ({
        url: `/chanel/${id}/members`,
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

    // Add a member to a channel
    addChannelMember: build.mutation({
      query: ({ userId, memberId }) => ({
        url: `/chanel/add-member/${userId}`,
        method: "POST",
        body: { memberId },
      }),
      invalidatesTags: ["ChannelMembers"],
    }),
  }),
});

export const {
  useGetChannelQuery,
  useGetChannelFilesQuery,
  useGetChannelMembersQuery,
  useAddChannelMemberMutation,
} = channelApi;

export default channelApi;
