import baseApi from "./baseApi";

const notification = baseApi.injectEndpoints({
  endpoints: (build) => ({

    //get all notification
    getAllNotification: build.query({
      query: () => ({
        url: `/notification`,
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
  }),
});

export const { useGetAllNotificationQuery } = notification;
