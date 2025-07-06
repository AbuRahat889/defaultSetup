"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";

const stripePromise = loadStripe(
  "pk_test_51NHtsDCJ7JQjNEqYMtdwIJKK4uua2gz5wPOzaSGDwYVjMgphAhxlFxMDaAyFsTqqDf2W2YXkhpBVFScpQ5CTxgUA00P9KYmKmg"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);

  const path = usePathname();

  const handleChange = (event: any) => {
    setIsCardComplete(event.complete);
  };

  //   const [createCustomerFN] = useCreateCustomerMutation();
  //   const [createSubscriptionFN] = useCreateSubscriptionMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const { paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement!,
    });
    console.log(paymentMethod);
    setLoading(false);
  };

  return (
    <div className="mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      <ToastContainer />
      <div className="space-y-4">
        <div className="p-2 border rounded flex items-center gap-2">
          <CardElement
            options={{ hidePostalCode: true }}
            className="w-full p-1"
            onChange={handleChange}
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!stripe || loading || !isCardComplete}
          className={`w-full mt-4 p-2 rounded-lg text-white ${
            !stripe || loading || !isCardComplete
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {path === "/payment"
            ? loading
              ? "Processing..."
              : "Add Payment details"
            : loading
            ? "Processing..."
            : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

const StripePayment: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <section>
        <CheckoutForm />
      </section>
    </Elements>
  );
};

export default StripePayment;
