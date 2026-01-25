
type Props={
    selectedCategory:string;
    onCategoryChange:(category:string)=>void;
    priceRange:[number,number];
    onPriceChange:(range:[number,number])=>void;
};

export const ProductFilters=({selectedCategory,onCategoryChange,priceRange,onPriceChange}:Props)=>{
    return(
        <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center
        bg-white p-4 rounded-lg shadow-sm">
           
            <select
            value={selectedCategory}
            onChange={(e)=>onCategoryChange(e.target.value)}
            className="border border-gray-300 bg-white text-gray-700 rounded-lg px-4 
            py-2 sm:py-0 h-12 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-purple-500 transition
            appearance-none flex items-center sm:mt-3"
            >
              <option value="">All Categories</option>
               <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                 <option value="books">Books</option>
            </select>
            

            <div className="flex gap-3 items-center">
                <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1 text-center">Min price</label>
                <input
                type="number"
                value={priceRange[0]}
                onChange={(e)=>onPriceChange([Number(e.target.value),priceRange[1]])}
                className="border border-gray-300 rounded-lg px-3 py-2 w-24
                focus:outline-none focus:ring-2 focus:ring-purple-500 text-center "
                />
                </div>
                <span className="text-gray-400 font-bold text-lg mt-5"> - </span>

                <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1 text-center">Max price</label>
                <input
                type="number"
                value={priceRange[1]}
                 onChange={(e)=>onPriceChange([priceRange[0],Number(e.target.value)])}
                 className="border border-gray-300 rounded-lg px-3 py-2 w-24
                focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                </div>
            </div>
        </div>
    );

};