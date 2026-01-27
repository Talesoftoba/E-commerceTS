import { CartItemRow } from "./CartItemRow";
import { useCart } from "../../hooks/useCart";
import { CartSummary } from "./CartSummary";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props ={
    isOpen:boolean;
    onClose:()=>void;
};

export const CartDrawer=({isOpen, onClose}:Props)=>{
    const {cartItems} = useCart();
    const navigate = useNavigate();

    return(
        <>
            <div
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-90"
            />

        <div
         className={`fixed top-0 right-0 z-100 w-96 h-full bg-white shadow-lg
        transform transition-transform duration-300 ${isOpen ?"translate-x-0":"translate-x-full"}flex flex-col`}
         onClick={(e)=>e.stopPropagation()}
        >

            <div className="p-4 flex justify-between items-center border-b"> 

                <h2 className="text-md font-bold text-white bg-black rounded p-2
                text-center "
                 >Your cart</h2>

                <button 
                onClick={(e)=>{
                    e.stopPropagation();
                    onClose();
                }}
                 className="text-gray-600 hover:text-gray-800"
                 >
                    <X size={24}/>
                    </button>

                  </div>
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">

                    {cartItems.length===0 ?(
                        <p className="text-sm text-white mt-2 px-3 py-1 bg-black
                border boder-red-200 rounded text-center max-w-md mx-auto">
                            Your cart is empty.</p>
                    ):(cartItems.map((item)=>
                    <CartItemRow key={item.id} item={item}/>)
                    )}
                    <div className="mt-auto">
                   <CartSummary
                   buttonLabel="Proceed to Checkout"
                   onClicks={()=>navigate("/checkout")}
                   />
                </div>
            </div>
        </div>
      </>
    );

};
