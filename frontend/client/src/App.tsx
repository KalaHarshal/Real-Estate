import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/shared/Layout";
import { RequireAuth } from "./components/shared/RequireAuth";
import { HomePage } from "./pages/HomePage";
import { ListPage } from "./pages/ListPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProfileUpdatePage } from "./pages/ProfileUpdatePage"; 
import { listPageLoader } from "./lib/loaders";
import { SinglePage } from "./pages/SinglePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/list",
        element: <ListPage />,
        loader: listPageLoader, // 🔥 Added loader for the ListPage
      },
      { path: "/list/:id", element: <SinglePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      
      // 🔥 ALL PROTECTED ROUTES GO INSIDE THIS NESTED ROUTE
      {
        element: <RequireAuth />,
        children: [
          { path: "/profile", element: <ProfilePage /> },
          { path: "/profile/update", element: <ProfileUpdatePage /> }, // 🔥 Route is now active
          
          // We will add this later when we build the property creation logic:
          // { path: "/add", element: <NewPostPage /> },
        ]
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;