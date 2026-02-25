import { useNavigate, Link } from "react-router-dom"; // 🔥 Added Link import
import { useAuthStore } from "../features/auth/store/authStore";
import { apiRequest } from "../lib/apiRequest";

export const ProfilePage = () => {
  const { currentUser, updateUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 h-full">
      {/* LEFT SIDE: User Info */}
      <div className="flex-[3] flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">User Information</h1>
          
          {/* 🔥 Changed button to a Link component */}
          <Link to="/profile/update" className="px-4 py-2 bg-yellow-400 font-medium rounded-md hover:bg-yellow-500 transition block text-center">
            Update Profile
          </Link>
          
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-500 w-24">Avatar:</span>
            <img
              src={currentUser?.avatar || "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=126&h=126&dpr=2"}
              alt="User Avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 w-24">Username:</span>
            <span className="font-bold text-lg">{currentUser?.username}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 w-24">Email:</span>
            <span className="font-bold text-lg">{currentUser?.email}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white w-fit font-medium rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* My List Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">My List</h1>
            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
              Create New Post
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
             <p className="text-gray-400">User's posts will appear here...</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Messages/Chat Component */}
      <div className="flex-[2] bg-[#fcf5f3] p-6 rounded-xl shadow-sm h-[calc(100vh-120px)] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">Messages</h1>
        <p className="text-gray-400">Chat component will go here...</p>
      </div>
    </div>
  );
};