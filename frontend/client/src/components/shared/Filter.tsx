import { Search } from "lucide-react";

export const Filter = () => {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h1 className="text-2xl font-light mb-2">
        Search results for <b className="font-bold">India</b>
      </h1>
      
      {/* Top Row: Location Search */}
      <div className="flex">
        <input 
          type="text" 
          name="city"
          placeholder="City Location" 
          className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 transition"
        />
      </div>

      {/* Bottom Row: Detailed Filters */}
      <div className="flex flex-wrap gap-4 items-center justify-between mt-2">
        
        <div className="flex flex-col flex-1 gap-1 min-w-[100px]">
          <label htmlFor="type" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Type</label>
          <select name="type" id="type" className="p-3 border border-gray-300 rounded-md outline-none text-sm bg-white focus:border-blue-500">
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="flex flex-col flex-1 gap-1 min-w-[100px]">
          <label htmlFor="property" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Property</label>
          <select name="property" id="property" className="p-3 border border-gray-300 rounded-md outline-none text-sm bg-white focus:border-blue-500">
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="flex flex-col flex-1 gap-1 min-w-[100px]">
          <label htmlFor="minPrice" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Min Price</label>
          <input type="number" id="minPrice" name="minPrice" placeholder="any" className="p-3 border border-gray-300 rounded-md outline-none text-sm w-full focus:border-blue-500" />
        </div>

        <div className="flex flex-col flex-1 gap-1 min-w-[100px]">
          <label htmlFor="maxPrice" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Max Price</label>
          <input type="number" id="maxPrice" name="maxPrice" placeholder="any" className="p-3 border border-gray-300 rounded-md outline-none text-sm w-full focus:border-blue-500" />
        </div>

        <div className="flex flex-col flex-1 gap-1 min-w-[100px]">
          <label htmlFor="bedroom" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Bedroom</label>
          <input type="number" id="bedroom" name="bedroom" placeholder="any" className="p-3 border border-gray-300 rounded-md outline-none text-sm w-full focus:border-blue-500" />
        </div>

        <button className="flex-1 bg-yellow-400 p-3 rounded-md hover:bg-yellow-500 transition flex items-center justify-center mt-5 min-w-[60px]">
          <Search className="text-white" size={20} />
        </button>

      </div>
    </div>
  );
};