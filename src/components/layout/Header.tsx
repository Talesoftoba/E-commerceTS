import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";

type Props = {
    openCart:()=>void;
};

export const Header=({openCart}:Props)=>{
    const {cartItems} = useCart();
    const totalQuantity = cartItems.reduce((sum,item)=>sum + item.quantity,0)
    
    return(
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex
            justify-between items-center h-16">

                <Link to="/" className="text-2xl font-bold text-purple-600"
                >Mystore</Link>

                <nav className="flex items-center gap-6">
                    <Link to="/" className="text-gray-700 hover:text-purple-600"
                    >Home
                    </Link>

                    <button 
                    onClick={openCart}
                    className="relative text-gray-700 hover:text-purple-600">
                        <ShoppingCart size={20}/>

                        { totalQuantity > 0 &&(
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs
                            w-4 h-4 flex items-center justify-center rounded full"
                            >{totalQuantity}</span>
                        ) }
                    </button>
                    
                </nav>
            </div>
        </header>

    );

};