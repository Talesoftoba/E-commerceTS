import { useParams } from "react-router-dom";
import { productsData } from "../data/product";
import { useCart } from "../hooks/useCart";
import { ShoppingCart } from "lucide-react";


export const ProductDetails =()=>{
    const {id} = useParams<{id:string}>();
    const {addToCart}=useCart();

    const product = productsData.find((p)=>p.id.toString() === id);

    if(!product) return <p className="p-6 text-center text-gray-500">Product not found</p>

    return(
        <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 flex justify-center items-center">
                <img src={product.image} alt={product.title}
                className="w-full h-80 object-contain"/>
            </div>

           <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className=" text-2xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-xl text-purple-600 font-semibold">${product.price}</p>
            <p className="text-gray-700">{product.description}</p>

            <button
            onClick={()=>addToCart(product)}
            className="mt-4 flex items-center gap-2 p-3 bg-black
            text-white font-bold rounded hover:bg-purple-500 w-max"
            >
                <ShoppingCart size={18}/>
                Add to Cart
            </button>

          </div>
        </div>

    );

};
