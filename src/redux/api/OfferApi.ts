import { baseApi } from "./baseApi";

const offerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOffer: build.mutation({
      query: ({ id, bodyData }) => ({
        url: `/service/${id}/offer`,
        method: "POST",
        body: bodyData,
      }),
      invalidatesTags: ["offer", "service", "ClientOffer"],
    }),
  }),
});

export const { useCreateOfferMutation } = offerApi;
