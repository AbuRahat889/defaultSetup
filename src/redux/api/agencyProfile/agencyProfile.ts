import { baseApi } from "../baseApi";

const agencyProfile = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get all agency profile
    getMeAgencyProfile: build.query({
      query: () => ({
        url: `user/me`,
        method: "GET",
      }),
      providesTags: ["agency"],
    }),
    // Get revivew
    getMeReview: build.query({
      query: () => ({
        url: `/review/my`,
        method: "GET",
      }),
      providesTags: ["agency"],
    }),
  }),
});

export const { useGetMeAgencyProfileQuery, useGetMeReviewQuery } = agencyProfile;
