import type { Product } from "../../types/product";
import { ProductCard } from "./ProductCard";

type Props={
    products:Product[]
};

export const ProductGrid = ({products}:Props)=>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {products.map((p)=>(
                <ProductCard key={p.id} product={p} />
            ))
            }

        </div>
    );

};