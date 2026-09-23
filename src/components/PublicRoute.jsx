import { Navigate, Outlet } from "react-router";
import useAuthStore from "../learnZustand/Auth/Store/useAuthStore";

export default function PublicRoute() {
  const user = useAuthStore((state) => state.user);

  // Jika user SUDAH login, cegah akses ke halaman /signin & /signup
  if (user) {
    // Tendang ke halaman sesuai role-nya
    if (user.role === "admin") {
      return <Navigate to="/admin" replace />;
    }
    if (user.role === "user") {
      return <Navigate to="/user" replace />;
    }
  }

  // Jika BELUM login, silakan tampilkan halaman /signin atau /signup
  return <Outlet />;
}