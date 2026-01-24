import { useCartContext } from "../context/CartContext";

export const useCart =()=>{
    const {cartItems,addToCart,removeItem,increment,decrement}=useCartContext();

    return  {cartItems,addToCart,removeItem,increment,decrement};
}