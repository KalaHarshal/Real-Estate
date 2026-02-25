import { Slider } from "../components/shared/Slider";
import { Map } from "../components/shared/Map";
import { MapPin, Save, MessageSquare } from "lucide-react";
import type { Post } from "../types/post";

const singlePostData: Post & { description: string } = {
  id: "1",
  title: "Sea-Facing Apartment in Bandra",
  price: 85000,
  images: [
    "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ],
  bedroom: 3,
  bathroom: 2,
  address: "Carter Road, Bandra West, Mumbai",
  latitude: 19.0664,
  longitude: 72.8250,
  description:
    "Experience luxury living in this stunning sea-facing apartment located in the heart of Bandra. This fully furnished property features modern amenities, a spacious balcony with breathtaking ocean views, and 24/7 security. Perfect for families or professionals looking for a premium lifestyle.",
};

export const SinglePage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-100px)]">
      
      {/* LEFT SIDE: Details */}
      <div className="flex-[3] overflow-y-auto pr-2 pb-10 custom-scrollbar flex flex-col gap-12">
        <Slider images={singlePostData.images} />
        
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{singlePostData.title}</h1>
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={18} />
              <span>{singlePostData.address}</span>
            </div>
            <div className="text-2xl font-light px-3 py-1 bg-yellow-100 w-fit rounded-md">
              ₹{singlePostData.price.toLocaleString("en-IN")}
            </div>
          </div>
          
          {/* User Info Placeholder */}
          <div className="flex flex-col items-center justify-center gap-2 bg-[#fcf5f3] p-4 rounded-xl font-semibold">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=126&h=126&dpr=2" alt="" className="w-12 h-12 rounded-full object-cover" />
            <span>John Doe</span>
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed">
          {singlePostData.description}
        </div>
      </div>

      {/* RIGHT SIDE: Map & Features */}
      <div className="flex-[2] bg-[#fcf5f3] rounded-xl p-4 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
        <div>
          <h2 className="text-xl font-bold mb-4">Location</h2>
          <div className="w-full h-[300px] rounded-xl overflow-hidden">
            {/* Reusing our Map component! */}
            <Map items={[singlePostData]} /> 
          </div>
        </div>
        
        <div className="flex justify-between gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 transition">
            <MessageSquare size={20} className="text-blue-600" />
            Send a Message
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 transition">
            <Save size={20} className="text-blue-600" />
            Save the Place
          </button>
        </div>
      </div>
      
    </div>
  );
};