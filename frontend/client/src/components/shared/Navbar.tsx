import { Link, useNavigate } from "react-router-dom";
import { Menu, UserCircle, LogOut } from "lucide-react"; // Added LogOut icon
import { useAuthStore } from "../../features/auth/store/authStore";
import { apiRequest } from "../../lib/apiRequest";

export const Navbar = () => {
  const { currentUser, updateUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Hit your backend logout route to clear the HTTP-only cookie
      await apiRequest.post("/auth/logout");
      
      // Clear the Zustand store (this instantly updates the UI)
      updateUser(null);
      
      // Redirect to home
      navigate("/");
    } catch (err) {
      console.error("Failed to logout", err);
    }
  };

  return (
    <nav className="h-20 flex items-center justify-between px-4 md:px-8 lg:px-16 bg-white shadow-sm">
      <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
        <Link to="/">Estate2026</Link>
      </div>

      <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
        <Link to="/list" className="hover:text-blue-500 transition">Properties</Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        {currentUser ? (
          <div className="flex items-center gap-4">
            <Link to="/profile" className="flex items-center gap-2 font-medium hover:text-blue-600">
              {currentUser.avatar ? (
                <img src={currentUser.avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <UserCircle size={32} className="text-gray-400" />
              )}
              <span>{currentUser.username}</span>
            </Link>
            
            {/* 🔥 New Logout Button */}
            <button 
              onClick={handleLogout}
              className="flex items-center gap-1 px-4 py-2 bg-red-50 text-red-600 font-medium rounded-md hover:bg-red-100 transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2 font-medium hover:bg-gray-100 rounded-md transition">Sign in</Link>
            <Link to="/register" className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">Sign up</Link>
          </>
        )}
      </div>

      <div className="md:hidden">
        <button><Menu size={28} /></button>
      </div>
    </nav>
  );
};