
type Props={
    searchTerm:string;
    onSearchChange:(term:string)=>void
};

export const SearchBar =({searchTerm,onSearchChange}:Props)=>{
    return(
        <input
        type="text"
        value={searchTerm}
        onChange={(e)=>onSearchChange(e.target.value)}
        placeholder="search products..."
        className="border p-2 rounded w-full sm:w-1/2 mb-4"
        />

    );
};