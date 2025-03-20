import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // sign up user or client
    getNotification: build.query({
      query: () => ({
        url: `/notification`,
        method: "GET",
      }),
      providesTags: ["notification"],
    }),
  }),
});

export const { useGetNotificationQuery } = ServiceApi;
export default ServiceApi;
