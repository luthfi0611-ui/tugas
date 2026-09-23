import { createBrowserRouter } from "react-router";

import AppLayout from "./layout/AppLayout";
import UserLayout from "./layout/UserLayout";

import Home from "./pages/Home";
import About from "./pages/admin/About";
import Santri from "./pages/admin/Santri";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SantriLayout from "./layout/SantriLayout";

import DashboardUser from "./learnZustand/DashboardUser";
// Impor file ProtectedRoute yang baru dibuat
import ProtectedRoute from "./components/ProtectedRoute"; 
import PublicRoute from "./components/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },

  // PROTEKSI ROUTE ADMIN
  {
    element: <ProtectedRoute allowedRoles={["admin"]} />,
    children: [
      {
        path: "/admin",
        element: <SantriLayout />,
        children: [
          {
            path: "about",
            element: <About />,
          },
          {
            path: "santri",
            element: <Santri />,
          },
        ],
      },
    ],
  },

  // PROTEKSI ROUTE USER
  {
    element: <ProtectedRoute allowedRoles={["user"]} />,
    children: [
      {
        path: "/user",
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: <DashboardUser />,
          },
        ],
      },
    ],
  },
]);

export default router;