import { useState } from "react";
import { productsData } from "../data/product";
import { ProductFilters } from "../components/product/ProductFilters";
import { ProductGrid } from "../components/product/ProductGrid";
import { SearchBar } from "../components/product/Search";
import type { Product } from "../types/product";

export const Home=()=>{
 
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

    const filterdProducts = productsData.filter((p:Product)=>{

        const matchesSearch = 
        p.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());

        const matchesCategory = category ? p.category === category : true;

        const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];

        return matchesSearch && matchesCategory && matchesPrice

    });

      return(
        <div className="p-6">
            <SearchBar searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            />
            <ProductFilters
            selectedCategory={category}
            onCategoryChange={setCategory}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            />
            <ProductGrid products={filterdProducts}/>
            
        </div>
      );

};
