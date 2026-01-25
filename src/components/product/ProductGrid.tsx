import type { Product } from "../../types/product";
import { ProductCard } from "./ProductCard";

type Props={
    products:Product[]
};

export const ProductGrid = ({products}:Props)=>{
    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
        lg:grid-cols-5 xl:grid-cols-6 gap-3 ">
            {products.map((p)=>(
                <ProductCard key={p.id} product={p} />
            ))
            }

        </div>
    );

};