import { baseApi } from "../baseApi";

const OfferApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get all user offers
    getUserAllOffer: build.query({
      query: () => ({
        url: `offer/status`,
        method: "GET",
      }),
      providesTags: ["offer"],
    }),

    // Get all user offers
    getSingleOffer: build.query({
      query: (id) => ({
        url: `offer/${id}`,
        method: "GET",
      }),
      providesTags: ["offer"],
    }),

    // Accept Offer
    acceptOffer: build.mutation({
      query: (id) => ({
        url: `offer/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["offer", "service", "ClientOffer"],
    }),

    // DELETE Offer
    deletetOffer: build.mutation({
      query: (id) => ({
        url: `offer/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["offer"],
    }),

    updateOffer: build.mutation({
      query: ({ id, data }) => ({
        url: `offer/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["offer"],
    }),

    getAgencyOffer: build.query({
      query: ({ status, page }) => ({
        url: `/offer/status/?status=${status}&page=${page}`,
        method: "GET",
      }),
      providesTags: ["ClientOffer", "service"],
    }),
  }),
});

export const {
  useGetUserAllOfferQuery,
  useAcceptOfferMutation,
  useDeletetOfferMutation,
  useUpdateOfferMutation,
  useGetSingleOfferQuery,
  useGetAgencyOfferQuery,
} = OfferApi;
