import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthStore } from "../features/auth/store/authStore";
import { apiRequest } from "../lib/apiRequest";

interface UpdateProfileInputs {
  username: string;
  email: string;
  password?: string; // Optional because they might not want to change it
  avatar?: string;
}

export const ProfileUpdatePage = () => {
  const { currentUser, updateUser } = useAuthStore();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Initialize form with the user's current data!
  const { register, handleSubmit } = useForm<UpdateProfileInputs>({
    defaultValues: {
      username: currentUser?.username || "",
      email: currentUser?.email || "",
      avatar: currentUser?.avatar || "",
    }
  });

  const onSubmit = async (data: UpdateProfileInputs) => {
    setIsLoading(true);
    setError(null);

    try {
      // Hit the protected PUT route using the user's ID
      const response = await apiRequest.put(`/users/${currentUser?.id}`, {
        username: data.username,
        email: data.email,
        password: data.password || undefined, // Only send if they typed something
        avatar: data.avatar,
      });

      // Update Zustand store with the fresh database data!
      updateUser(response.data);
      
      // Redirect back to profile
      navigate("/profile");
    } catch (err: unknown) {
      const fallback = "Failed to update profile.";
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || fallback);
      } else {
        setError(fallback);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 h-full items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Update Profile</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          
          <div className="flex justify-center mb-4">
            {/* Show preview of the avatar */}
            <img 
              src={currentUser?.avatar || "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=126&h=126&dpr=2"} 
              alt="Avatar" 
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Avatar URL</label>
            <input
              type="text"
              {...register("avatar")}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              placeholder="https://example.com/my-picture.jpg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              placeholder="Leave blank to keep same"
            />
          </div>

          {error && <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm text-center">{error}</div>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition disabled:bg-blue-300 mt-2"
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};