import { Link } from "react-router-dom";
import { Menu, UserCircle } from "lucide-react";
import { useAuthStore } from "../../features/auth/store/authStore";

export const Navbar = () => {
  // Pull the current user from our Zustand store
  const { currentUser } = useAuthStore();

  return (
    <nav className="h-20 flex items-center justify-between px-4 md:px-8 lg:px-16 bg-white shadow-sm">
      {/* LEFT: Logo */}
      <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
        <Link to="/">Estate2026</Link>
      </div>

      {/* CENTER: Links */}
      <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
        <Link to="/list" className="hover:text-blue-500 transition">Properties</Link>
      </div>

      {/* RIGHT: Auth Logic */}
      <div className="hidden md:flex items-center gap-4">
        {currentUser ? (
          <div className="flex items-center gap-3">
            <Link to="/profile" className="flex items-center gap-2 font-medium hover:text-blue-600">
              {currentUser.avatar ? (
                <img src={currentUser.avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <UserCircle size={32} className="text-gray-400" />
              )}
              <span>{currentUser.username}</span>
            </Link>
            <Link to="/profile" className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
              Profile
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2 font-medium hover:bg-gray-100 rounded-md transition">
              Sign in
            </Link>
            <Link to="/register" className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
              Sign up
            </Link>
          </>
        )}
      </div>

      {/* MOBILE: Hamburger Menu */}
      <div className="md:hidden">
        <button><Menu size={28} /></button>
      </div>
    </nav>
  );
};