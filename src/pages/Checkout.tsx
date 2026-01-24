import { useCart } from "../hooks/useCart";
import { CartItemRow } from "../components/cart/CartItemRow";


export const Checkout =()=>{
    const {cartItems} = useCart();

    return(
        <div className="">
            <h1 className="">Checkout</h1>

            <div className="">
                {cartItems.length===0 ? (
                    <p className="">Your cart is empty</p>
                ) : (
                    cartItems.map((item)=>
                    <CartItemRow key={item.id} item={item}/>)
                )
                }

            </div>
            
        </div>
    );

};