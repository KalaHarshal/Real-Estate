import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import type { Post } from "../../types/post";

interface PinProps {
  item: Post;
}

export const Pin = ({ item }: PinProps) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-3 w-[200px]">
          <img 
            src={item.images[0]} 
            alt={item.title} 
            className="w-16 h-16 object-cover rounded-md" 
          />
          <div className="flex flex-col justify-between font-medium">
            {/* Link to the individual property page */}
            <Link to={`/list/${item.id}`} className="hover:text-blue-600 transition">
              {item.title}
            </Link>
            <span className="text-sm font-light mt-1">
              ₹{item.price.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};