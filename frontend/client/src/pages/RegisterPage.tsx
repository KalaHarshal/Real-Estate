import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { apiRequest } from "../lib/apiRequest";

// Matches your backend req.body exactly
interface RegisterFormInputs {
  username: string;
  email: string;
  password: string;
}

export const RegisterPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>();

  const onSubmit = async (data: RegisterFormInputs) => {
    setIsLoading(true);
    setError(null);

    try {
      // Hits your backend register route
      await apiRequest.post("/auth/register", data);
      
      // On success, redirect to login page
      navigate("/login");
    } catch (err: unknown) {
      const fallback = "Registration failed.";
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || fallback);
      } else {
        setError(fallback);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              placeholder="johndoe"
            />
            {errors.username && <span className="text-red-500 text-sm mt-1">{errors.username.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              placeholder="john@example.com"
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters required" }
              })}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              placeholder="••••••••"
            />
            {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
          </div>

          {error && <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm text-center">{error}</div>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition disabled:bg-blue-300 mt-2"
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};