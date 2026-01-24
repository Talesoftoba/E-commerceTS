import { CartItemRow } from "./CartItemRow";
import { useCart } from "../../hooks/useCart";
import { CartSummary } from "./CartSummary";

type Props ={
    isOpen:boolean;
    onClose:()=>void;
};

export const CartDrawer=({isOpen, onClose}:Props)=>{
    const {cartItems} = useCart();

    return(
        <div className={`fixed top-0 right-0 w-96 h-full bg-white shadow-lg
        transform transition-transform ${isOpen ?"translate-x-0":"translate-x-full"}`}>
            <div className="p-4 flex justify-between items-center border-b"> 

                <h2 className="text-xl font-bold" >Your Cart</h2>

                <button onClick={onClose} className="text-gray-600 hover:text-gray-800">XXXX</button>
                  </div>
                <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-64px)]">

                    {cartItems.length===0 ?(
                        <p className="text-gray-500">Your cart is empty.</p>
                    ):(cartItems.map((item)=>
                    <CartItemRow key={item.id} item={item}/>)
                    )}
                    <div className="mt-auto">
                   <CartSummary/>
                </div>
            </div>
        </div>

    );

};
