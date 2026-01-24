
import type { Product } from "../../types/product";
import { Link } from "react-router-dom"

type Props = {
    product:Product
};

export const ProductCard = ({product}:Props)=>{
    return(
        <div className="border p-4 rounded hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title}
            className="w-full h-40 object-contain mb-2"/>
            <h3 className="font-semibold text-gray-800">{product.title}</h3>
            <p className="text-purple-600 font-bold">${product.price}</p>
        </Link>
        </div>
    );

};