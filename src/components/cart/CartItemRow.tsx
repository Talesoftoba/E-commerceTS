import { Trash } from "lucide-react";
import type { CartItem } from "../../types/cart";
import { useCart } from "../../hooks/useCart";
import { QuantityControl } from "./QuantityControl";

type Props = {
    item:CartItem
};

export const CartItemRow=({item}:Props)=>{
    const {increment,decrement,removeItem}=useCart();

    return(
        <div className="flex gap-4 items-center border-b py-4">
            <img src={item.image} alt={item.title} className="h-16 w-25 object-contain" />
            <div className="flex-1 flex flex-col">
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-gray-500">${item.price}</p>
              

                <div className="mt-2">
                    <QuantityControl
                    quantity={item.quantity}
                    onIncrement={()=>increment(item.id)}
                    onDecrement={()=>decrement(item.id)}
                    />
                </div>
                </div>
                <button 
                onClick={()=>removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
                >
                  <Trash size={18}/>
                </button>

                
</div>
    );
};
