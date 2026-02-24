export const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center h-[calc(100vh-100px)]">
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-5xl font-bold leading-tight">
          Find Real Estate & Get Your Dream Place
        </h1>
        <p className="text-gray-600">
          Search properties across the city. Discover houses, apartments, and condos with real-time updates and seamless communication.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
           {/* We will add the Search Filter Bar here later */}
           <p className="text-sm text-gray-400">Search Component Placeholder...</p>
        </div>
      </div>
      <div className="flex-1 hidden md:block">
        {/* Placeholder for Hero Image */}
        <div className="w-full h-[500px] bg-blue-100 rounded-2xl flex items-center justify-center text-blue-300">
          Hero Image
        </div>
      </div>
    </div>
  );
};