export const ListPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 h-full">
      {/* Left side: List of cards */}
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
        <h2 className="text-2xl font-bold">Search Results</h2>
        <div className="p-4 bg-white shadow rounded">Property Card Placeholder</div>
        <div className="p-4 bg-white shadow rounded">Property Card Placeholder</div>
      </div>
      
      {/* Right side: Map */}
      <div className="flex-1 bg-gray-200 rounded-xl hidden lg:flex items-center justify-center text-gray-400 min-h-[500px]">
        Mapbox Component Placeholder
      </div>
    </div>
  );
};