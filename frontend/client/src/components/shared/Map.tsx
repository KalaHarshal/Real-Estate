import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // 🔥 CRITICAL: The map breaks without this!
import { Pin } from "./Pin";
import type { Post } from "../../types/post";

interface MapProps {
  items: Post[];
}

export const Map = ({ items }: MapProps) => {
  return (
    // center coordinates set to center of India [20.5937, 78.9629]
    <MapContainer 
      center={[20.5937, 78.9629]} 
      zoom={5} 
      scrollWheelZoom={false}
      className="w-full h-full rounded-xl z-0" // Tailwind classes for sizing
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Loop through the properties and place a Pin for each one */}
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
      
    </MapContainer>
  );
};