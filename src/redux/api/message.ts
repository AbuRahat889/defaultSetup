import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // sign up user or client
    getMessage: build.query({
      query: (id) => ({
        url: `/offer/${id}/update`,
        method: "GET",
      }),
      providesTags: ["message"],
    }),

    //send message
    postMessage: build.mutation({
      query: ({ content, id }) => ({
        url: `/offer/${id}/update`,
        method: "POST",
        body: { content },
      }),
      invalidatesTags: ["message"],
    }),

    // login: build.mutation({  /offer/67960bcea78c5d9810472ba0/update
    // method: "GET",
    //   query: (data: any) => ({
    //     url: `/auth/login`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),
  }),
});

export const { useGetMessageQuery, usePostMessageMutation } = ServiceApi;
export default ServiceApi;
