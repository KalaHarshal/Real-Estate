import { useLoaderData } from "react-router-dom";
import { Card } from "../components/shared/Card";
import { Filter } from "../components/shared/Filter"; // 🔥 Import the Filter
import { Map } from "../components/shared/Map"
import type { Post } from "../types/post";

export const ListPage = () => {
  // This pulls the real data from your Express backend API!
  const posts = useLoaderData<Post[] | undefined>() ?? [];

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-100px)]">
      
      {/* LEFT SIDE: List & Filters */}
      <div className="flex-[3] flex flex-col gap-4 overflow-y-auto pr-2 pb-10 custom-scrollbar">
        
        {/* 🔥 Drop the Filter component right here */}
        <Filter />
        
        {/* Loop through the API data and render Cards */}
        {posts.map((post) => (
          <Card key={post.id} item={post} />
        ))}
        
        {posts.length === 0 && <p>No properties found. Is your backend running?</p>}
      </div>

      {/* RIGHT SIDE: Map */}
      <div className="flex-[2] rounded-xl border border-dashed border-gray-200 hidden lg:flex">
        <div className="w-full h-[calc(100vh-120px)]">
          <Map items={posts} />
        </div>
      </div>

    </div>
  );
};