
type Props={
    selectedCategory:string;
    onCategoryChange:(category:string)=>void;
    priceRange:[number,number];
    onPriceChange:(range:[number,number])=>void;
};

export const ProductFilters=({selectedCategory,onCategoryChange,priceRange,onPriceChange}:Props)=>{
    return(
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <select
            value={selectedCategory}
            onChange={(e)=>onCategoryChange(e.target.value)}
            className="border p-2 rounded"
            >
              <option value="">All Categories</option>
               <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                 <option value="books">Books</option>
            </select>

            <div className="flex gap-3 items-end">
                <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1">Min price</label>
                <input
                type="number"
                value={priceRange[0]}
                onChange={(e)=>onPriceChange([Number(e.target.value),priceRange[1]])}
                className="border p-2 rounded w-24"
                />
                </div>
                <span className="pb-2">-</span>
                <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1">Max price</label>
                <input
                type="number"
                value={priceRange[1]}
                 onChange={(e)=>onPriceChange([priceRange[0],Number(e.target.value)])}
                 className="border p-2 rounded w-24"
                />
                </div>
            </div>
        </div>
    );

};