import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Global Navbar */}
      <Navbar />
      
      {/* Dynamic Page Content goes here */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <Outlet />
      </main>
    </div>
  );
};