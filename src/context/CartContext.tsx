import {createContext,useReducer,useContext,type ReactNode} from "react";
import type { Product } from "../types/product";
import { cartReducer } from "../reducers/cartReducer";
import type { CartState } from "../types/cartState";

type CartContextType = CartState & {
    addToCart:(product:Product)=>void;
    removeItem:(id:number)=>void;
    increment:(id:number)=>void;
    decrement:(id:number)=>void;
};

type Props = {
    children:ReactNode
};

const initialState:CartState = {cartItems:[]};

const cartContext=createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children}:Props)=>{
    const [state, dispatch] = useReducer(cartReducer,initialState);


    const addToCart = (product:Product)=> dispatch({type:
        "ADD_ITEM", payload:product});
    const removeItem = (id:number)=> dispatch({type:
      "REMOVE_ITEM", payload:id});
      const increment = (id:number)=> dispatch({type:
     "INCREMENT_QUANTITY", payload:id })
     const decrement = (id:number)=> dispatch({type:
      "DECREMENT_QUANTITY", payload:id });

      return(
        <cartContext.Provider value={{cartItems: state.cartItems, addToCart,
        removeItem,increment,decrement }}>
            {children}
        </cartContext.Provider>
      );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () =>{
    const context = useContext(cartContext);
    if(!context) throw new Error("use context must be within cartProvider");
    return context;
};