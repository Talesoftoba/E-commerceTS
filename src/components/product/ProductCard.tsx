
import type { Product } from "../../types/product";
import { Link } from "react-router-dom"

type Props = {
    product:Product
};

export const ProductCard = ({product}:Props)=>{
    return(
        <div className="border p-2 rounded hover:shadow-lg duration-300 ease-in-out
        hover:scale-105 transition-transform">
            <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title}
            className="w-full h-24 object-contain mb-1"/>
            <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">{product.title}</h3>
            <p className="text-purple-600 font-bold text-sm">${product.price}</p>
        </Link>
        </div>
    );

};