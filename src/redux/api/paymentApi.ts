import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCustomerPayment: build.mutation({
      query: (data) => ({
        url: "/stripe/create-customer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["payment"],
    }),

    //create onboarding payment /stripe/connect-account
    createOnboardingPayment: build.mutation({
      query: () => ({
        url: "/stripe/connect-account",
        method: "POST",
      }),
      invalidatesTags: ["payment"],
    }),
  }),
});

export const {
  useCreateCustomerPaymentMutation,
  useCreateOnboardingPaymentMutation,
} = paymentApi;
