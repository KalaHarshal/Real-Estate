import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../features/auth/store/authStore";

export const RequireAuth = () => {
  const { currentUser } = useAuthStore();

  // If there is no user in the Zustand store, redirect to login instantly
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // If they are logged in, render the child route (like the Profile Page)
  return <Outlet />;
};