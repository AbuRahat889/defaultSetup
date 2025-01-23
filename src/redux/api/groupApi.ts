import baseApi from "./baseApi";

const groupApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //create group
    createGroup: build.mutation({
      query: (formData) => ({
        url: `/group/create`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Group", "Chanel"],
    }),

    //get all group
    getAllGroup: build.query({
      query: () => ({
        url: `/group`,
        method: "GET",
      }),
      providesTags: ["Group", "Chanel","ChannelMembers","ChannelFiles","ADMIN"],
    }),
  }),
});

export const { useGetAllGroupQuery, useCreateGroupMutation } = groupApi;
