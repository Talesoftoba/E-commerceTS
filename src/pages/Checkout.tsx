import { useCart } from "../hooks/useCart";
import { CartItemRow } from "../components/cart/CartItemRow";
import { CartSummary } from "../components/cart/CartSummary";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

export const Checkout =()=>{
    const {cartItems} = useCart();
    const navigate = useNavigate();

    const [shippingInfo, setShippingInfo]=useState ({
        fullName:"",
        address:"",
        city:"",
        zip:"",
        country:"",
        phone:"",
    });


         const isShippingValid = Object.values(shippingInfo).every(
            val => val.trim() !==""
         );

         const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
            setShippingInfo({
                   ...shippingInfo,
                   [e.target.name]:e.target.value
            });
         };

    return(
        <div className="max-w-4xl mx-auto p-6 flex flex-col gap-8">
            <h1 className="text-2xl font-bold">Checkout</h1>

            <section className="flex flex-col gap-4">
                {cartItems.length===0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                cartItems.map((item)=>
                 <CartItemRow key={item.id} item={item}/>)
                )}
            </section>

            <section className="border p-3 rounded flex flex-col gap-2 max-w-xl w-full mx-auto">
                <h2 className="font-semibold text-lg text-center">Shipping Information</h2>
                {["fullName", "address", "city", "zip" ,"country", "phone"].map((field)=>(
                    <input
                    key={field}
                    type="text"
                    name={field}
                    placeholder={field==="zip"?"ZIP/Postal Code" : field.charAt(0).toUpperCase()+ field.slice(1)}
                    value={shippingInfo[field as keyof typeof shippingInfo]}
                    onChange={handleChange}
                    className="p-1.5 border rounded text-sm w-full focus:ring-1 focus:ring-purple-500"
                    />
                ))}
            </section>

               <CartSummary
               buttonLabel="proceed to Payment"
               disabled={!isShippingValid}
               onClicks={()=>navigate("/payment")}
               />
               {!isShippingValid &&(
                <p className="text-sm text-red-600 mt-2 px-3 py-1 bg-red-100
                border boder-red-200 rounded text-center max-w-md mx-auto">
                      Please complete all shipping fields to continue.
                </p>
               )
               }

        </div>
    );
};