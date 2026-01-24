import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

type Props = {
    openCart:()=>void;
};

export const Header=({openCart}:Props)=>{
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
                    </button>
                    
                </nav>
            </div>
        </header>

    );

};