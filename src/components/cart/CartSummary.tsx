import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

export const CartSummary =()=>{
    const {cartItems} = useCart();

    const totalPrice = cartItems.reduce((sum,item)=>
         sum + item.price * item.quantity,0 );

    const isDisabled = cartItems.length===0;

    return(
        <div className="border-t pt-4 mt-4">
            <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">Total:</span>

                <span className="font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
            </div>

          <Link to="/checkout" className={isDisabled ? "pointer-events-none" : ""}>
            <button
            disabled={isDisabled}
            className="w-full p-3 bg-purple-600 text-white font-bold
            rounded hover:bg-purple-700 disabled:bg-gray-300"
            >
           Proceed to Checkout
            </button>
           </Link>
        </div>

    );
};