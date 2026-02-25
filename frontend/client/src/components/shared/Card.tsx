import { Link } from "react-router-dom";
import { MapPin, BedDouble, Bath, Save, MessageSquare } from "lucide-react";
import type { Post } from "../../types/post";

// This defines the exact shape of the data coming from your Express API
interface CardProps {
  item: Post;
}

export const Card = ({ item }: CardProps) => {
  return (
    <div className="flex gap-4 mb-6 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
      
      {/* LEFT SIDE: Property Image */}
      <Link to={`/list/${item.id}`} className="flex-2 h-48 lg:h-[200px] w-[200px] shrink-0">
        <img 
          src={item.images[0]} 
          alt={item.title} 
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>

      {/* RIGHT SIDE: Property Details */}
      <div className="flex-[3] flex flex-col justify-between gap-2">
        
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 transition hover:text-blue-600">
          <Link to={`/list/${item.id}`}>{item.title}</Link>
        </h2>
        
        {/* Address */}
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <MapPin size={16} />
          <span>{item.address}</span>
        </p>
        
        {/* Price (Formatted for Indian Rupees) */}
        <p className="text-xl font-light px-2 py-1 bg-yellow-100 w-fit rounded-md">
          ₹{item.price.toLocaleString("en-IN")}
        </p>

        {/* Bottom Row: Features & Actions */}
        <div className="flex justify-between items-center mt-2">
          
          {/* Features (Beds & Baths) */}
          <div className="flex gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
              <BedDouble size={16} />
              <span>{item.bedroom} Beds</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
              <Bath size={16} />
              <span>{item.bathroom} Baths</span>
            </div>
          </div>
          
          {/* Action Buttons (Save & Message) */}
          <div className="flex gap-2">
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
              <Save size={16} className="text-gray-600" />
            </button>
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
              <MessageSquare size={16} className="text-gray-600" />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};