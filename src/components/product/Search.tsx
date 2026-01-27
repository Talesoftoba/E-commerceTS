import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type Props = {
  searchTerm: string;
  onSearchChange: (term: string) => void;
};

export const SearchBar = ({ searchTerm, onSearchChange }: Props) => {
  return (
    <div className="relative w-full sm:w-1/2 mx-auto mb-6">
      {/* Search icon */}
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
      </div>

      {/* Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 border rounded-full shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-purple-400
                   focus:border-purple-400 transition"
      />
    </div>
  );
};