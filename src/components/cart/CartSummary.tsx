import { useCart } from "../../hooks/useCart";

type CartSummaryProps={
    buttonLabel?:string;
    onClicks?:()=>void;
    hideButton?:boolean;
    disabled?:boolean;
}


export const CartSummary =({
    buttonLabel="Proceed to checkout",
    onClicks,
    hideButton=false,
    disabled=false
}:CartSummaryProps)=>{
    const {cartItems} = useCart();

    const totalPrice = cartItems.reduce((sum,item)=>
         sum + item.price * item.quantity,0 );

    const isDisabled = cartItems.length===0 || disabled;

    return(
        <div className="border-t pt-4 mt-4">
            <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">Total:</span>

                <span className="font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
            </div>

         {!hideButton&&(
            <button
            onClick={onClicks}
            disabled={isDisabled}
            className="w-full p-3 bg-purple-600 text-white font-bold rounded 
            hover:bg-purple-700 disabled:bg-gray-300"
            >
            {buttonLabel}
            </button>
         )
         }
        </div>

    );
};