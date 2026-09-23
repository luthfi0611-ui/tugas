import { Navigate, Outlet } from "react-router";
import useAuthStore from "../learnZustand/Auth/Store/useAuthStore";

export default function ProtectedRoute({ allowedRoles }) {
  const user = useAuthStore((state) => state.user);

  // 1. Jika belum login, tendang ke halaman signin
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // 2. Jika role user tidak diizinkan masuk ke halaman ini
  if (!allowedRoles.includes(user.role)) {
    // Jika admin nyasar ke /user -> arahkan balik ke /admin
    if (user.role === "admin") {
      return <Navigate to="/admin" replace />;
    }
    // Jika user biasa nyasar ke /admin -> arahkan balik ke /user
    if (user.role === "user") {
      return <Navigate to="/user" replace />;
    }
  }

  return <Outlet />;
}