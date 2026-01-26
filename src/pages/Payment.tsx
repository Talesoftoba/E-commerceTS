import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import toast from "react-hot-toast";
import { useState } from "react";

export const Payment=()=>{
 const {cartItems} = useCart();
 const navigate = useNavigate();
 const [isPaying, setIspaying] = useState(false);

 const totalPrice = cartItems.reduce(
    (sum,item) => sum + item.price * item.quantity, 0
 );

 const handlePayment = async()=>{
    try{
        setIspaying(true);
        await new Promise((resolve)=>setTimeout(resolve,1500));

        navigate("/confirmation")
    } catch(error){
        toast.error("Payment failed, Please try again");
    } finally{
        setIspaying(false);
    }
 }

    return(
       <div className="max-w-md mx-auto p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Payment</h1>

        <div className="border rounded p-4 flex justify-between">
            <span>Total Amount</span>
            <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </div>

        <div className="border rounded p-4">
            <label className="flex items-center gap-2">
            <input type="radio" checked readOnly/>
            <span>Card Payment</span>
            </label>
        </div>
        <button
        disabled={isPaying || cartItems.length===0}
        onClick={handlePayment}
        className="w-full bg-purple-600 text-white font-bold py-3 rounded"
        >
         {isPaying ? "processing..." : "Pay Now"}
        </button>

       </div>
    );

};