import { useCart } from "../hooks/useCart";
import { CartItemRow } from "../components/cart/CartItemRow";


export const Checkout =()=>{
    const {cartItems} = useCart();

    return(
        <div className="max-w-4xl mx-auto p-6 flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-gray-800">Checkout</h1>

            <div className="flex flex-col gap-4">
                {cartItems.length===0 ? (
                    <p className="text-gray-500">Your cart is empty</p>
                ) : (
                    cartItems.map((item)=>
                    <CartItemRow key={item.id} item={item}/>)
                )
                }

            </div>
            
        </div>
    );

};