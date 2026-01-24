import { Plus,Minus } from "lucide-react";
import type React from "react";

type Props={
    quantity:number;
    onIncrement:()=>void;
    onDecrement:()=>void;
};

export const QuantityControl:React.FC<Props> =({quantity,onIncrement,
    onDecrement})=>{
        return( 
        <div className="flex items-center gap-2">
        <button onClick={onDecrement} className="p-1 border rounded text-red-500 hover:bg-red-100">
            <Minus size={14} />
        </button>

        <span className=" text-gray-800 font-semibold">
            {quantity}</span>

        <button onClick={onIncrement} className="p-1 border rounded text-green-500 hover:bg-green-100">
            <Plus size={14} />
        </button>

    </div>
        );
    }


