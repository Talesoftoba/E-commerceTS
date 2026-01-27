import type { Product } from "../../types/product";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="block border border-gray-200 rounded-lg bg-white overflow-hidden
                 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      {/* Image container with vivid background */}
      <div className="w-full flex items-center justify-center p-4 bg-purple-200 rounded-lg">
        
        <img
          src={product.image}
          alt={product.title}
          className="max-h-32 object-contain"
        />
       
      </div>

      {/* Card content */}
      <div className="p-3 flex flex-col gap-1">
        <h3 className="font-medium text-gray-800 text-sm line-clamp-2">
          {product.title}
        </h3>
        <p className="text-purple-600 font-bold text-sm">${product.price}</p>
      </div>
    </Link>
  );
};