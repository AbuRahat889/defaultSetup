import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // sign up user or client

    getAllReview: build.query({
      query: () => ({
        url: `/review`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),

    getReviewById: build.query({
      query: (id) => ({
        url: `/service/${id}/review`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),
    getMyReview: build.query({
      query: () => ({
        url: `/review/my`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),

    //clinet post review
    postServiceReview: build.mutation({
      query: ({ offerId, serviceId, rating, content }) => ({
        url: `/service/${serviceId}/review`,
        method: "POST",
        body: { rating, content, serviceId, offerId },
      }),
      invalidatesTags: ["review", "offer", "service"],
    }),

    // login: build.mutation({ /service/6794c35daa3733ef4437d16e/review
    // method: "GET",
    //   query: (data: any) => ({  /service/6794c35daa3733ef4437d16e/review
    //     url: `/auth/login`, /service/6795cb6a032957768373187b/review
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),
  }),
});

export const {
  useGetReviewByIdQuery,
  useGetMyReviewQuery,
  usePostServiceReviewMutation,
  useGetAllReviewQuery,
} = ServiceApi;
export default ServiceApi;
