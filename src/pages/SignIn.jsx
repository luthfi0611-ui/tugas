import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link,  useNavigate } from "react-router";
import { useState } from "react";
import useAuthStore from "../learnZustand/Auth/Store/useAuthStore";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Ambil fungsi login, error, dan data user dari store
  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Oper email dan password ke fungsi login
    const isSuccess = login(email, password);

    if (isSuccess) {
      // 2. Ambil user terbaru dari store setelah login
      const currentUser = useAuthStore.getState().user;

      // 3. Arahkan berdasarkan role
      if (currentUser?.role === "admin") {
        navigate("/admin");
      } else if (currentUser?.role === "user") {
        navigate("/user");
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Selamat Datang Kembali
        </h1>
        <p className="text-sm text-muted-foreground">
          Masukkan email dan password untuk masuk ke akun Anda.
        </p>
      </div>

      {/* Tampilkan pesan error jika login gagal */}
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md">
          {error}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input
            type="email"
            placeholder="nama@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Password</label>
            <Link
              to="/forgot-password"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Lupa password?
            </Link>
          </div>

          <Input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-11"
          />
        </div>

        <Button className="w-full h-11" type="submit">
          Sign In
        </Button>
      </form>

      <div className="text-center text-sm text-muted-foreground">
        Belum punya akun?{" "}
        <Link
          to="/sign-up"
          className="font-medium text-foreground hover:underline"
        >
          Daftar sekarang
        </Link>
      </div>
    </div>
  );
}