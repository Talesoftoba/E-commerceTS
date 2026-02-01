import { useState } from "react";
import { useCart } from "../hooks/useCart";
import toast from "react-hot-toast";

export const Payment = () => {
  const { cartItems } = useCart();
  const [isPaying, setIsPaying] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    try {
      setIsPaying(true);

      // Use local backend URL
      const BACKEND_URL = "http://localhost:3000";

      const res = await fetch(`${BACKEND_URL}/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }

      const data = await res.json();

      if (data.url) {
        // Redirect to Stripe checkout page
        window.location.href = data.url;
      } else {
        toast.error("No checkout URL returned from backend");
      }
    } catch (error) {
      console.error("Stripe checkout error:", error);
      toast.error("Payment failed, please try again");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Payment</h1>

      <div className="border rounded p-4 flex justify-between">
        <span>Total Amount</span>
        <span className="font-bold">${totalPrice.toFixed(2)}</span>
      </div>

      <div className="border rounded p-4">
        <label className="flex items-center gap-2">
          <input type="radio" checked readOnly />
          <span>Card Payment</span>
        </label>
      </div>

      <button
        disabled={isPaying || cartItems.length === 0}
        onClick={handlePayment}
        className="w-full bg-purple-600 text-white font-bold py-3 rounded"
      >
        {isPaying ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};