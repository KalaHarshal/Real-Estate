import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // Modern icons

export const Navbar = () => {
  return (
    <nav className="h-20 flex items-center justify-between px-4 md:px-8 lg:px-16 bg-white shadow-sm">
      {/* LEFT: Logo */}
      <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
        <Link to="/">ReEstate</Link>
      </div>

      {/* CENTER: Links (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
        <Link to="/list" className="hover:text-blue-500 transition">Properties</Link>
        <Link to="/about" className="hover:text-blue-500 transition">About</Link>
      </div>

      {/* RIGHT: Auth Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Link to="/login" className="px-4 py-2 font-medium hover:bg-gray-100 rounded-md transition">
          Sign in
        </Link>
        <Link to="/register" className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
          Sign up
        </Link>
      </div>

      {/* MOBILE: Hamburger Menu */}
      <div className="md:hidden">
        <button><Menu size={28} /></button>
      </div>
    </nav>
  );
};