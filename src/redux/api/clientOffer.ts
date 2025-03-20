import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // sign up user or client
    getMyOffer: build.query({
      query: ({ status, page }) => ({
        url: `/offer/status/?status=${status}&page=${page}`,
        method: "GET",
      }),
      providesTags: ["ClientOffer", "service"],
    }),

    // delete offer from user
    deleteOffer: build.mutation({
      query: (id) => ({
        url: `/offer/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ClientOffer", "service"],
    }),

    //get single offer
    getMySingleOffer: build.query({
      query: (offerId) => ({
        url: `/offer/${offerId}`,
        method: "GET",
      }),
      providesTags: ["ClientOffer", "service"],
    }),

    //get single offer
    updateOffer: build.mutation({
      query: ({ offerId, unit, description, address }) => ({
        url: `/offer/${offerId}`,
        method: "PUT",
        body: { unit, description, address },
      }),
      invalidatesTags: ["ClientOffer", "service"],
    }),

    //get single offer
    acceptOfferByClient: build.mutation({
      query: ({ offerId }) => ({
        url: `/stripe/${offerId}/create-intent`,
        method: "POST",
      }),
      invalidatesTags: ["ClientOffer", "service", "offer"],
    }),

    finishedOfferByClient: build.mutation({
      query: (id) => ({
        url: `/stripe/${id}/capture-payment`,
        method: "POST",
      }),
      invalidatesTags: ["ClientOffer", "service", "offer"],
    }),

    // updateUserInfo: build.mutation({ /stripe/6799b2dfaab782b25d943bdf/create-intent
    //   query: (formdata) => {
    //     return {
    //       url: `/user/update-profile`,
    //       method: "PUT",
    //       body: formdata,
    //     };
    //   },
    //   invalidatesTags: ["user", "auth"], /stripe/6799b2dfaab782b25d943bdf/capture-payment
    // }),
  }),
});

export const {
  useGetMyOfferQuery,
  useDeleteOfferMutation,
  useGetMySingleOfferQuery,
  useUpdateOfferMutation,
  useAcceptOfferByClientMutation,
  useFinishedOfferByClientMutation,
} = ServiceApi;
export default ServiceApi;
