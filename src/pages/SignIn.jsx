import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import useAuthStore from "../learnZustand/Auth/Store/useAuthStore";
import { Sparkles, ShieldCheck, Lock, Mail, ArrowRight } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isSuccess = login(email, password);

    if (isSuccess) {
      const currentUser = useAuthStore.getState().user;

      if (currentUser?.role === "admin") {
        navigate("/admin");
      } else if (currentUser?.role === "user") {
        navigate("/user");
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 flex text-slate-100">
      
      {/* ================= SISI KIRI: IMAGE & HERO SECTION (50%) ================= */}
      <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-between p-12 overflow-hidden border-r border-slate-800">
        
        {/* Background Image dengan Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

        {/* Top Branding */}
        <div className="relative z-10 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/30 border border-indigo-400/30 backdrop-blur-md">
            <Sparkles className="w-5 h-5 text-indigo-400" />
          </div>
          <span className="text-lg font-bold tracking-wider text-white">SANTRI APP</span>
        </div>

        {/* Hero Quote / Text Bottom */}
        <div className="relative z-10 space-y-4 max-w-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-md">
            <ShieldCheck className="w-4 h-4" />
            Sistem Manajemen Terpadu
          </div>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-white">
            Kelola Data Santri & Akademik Lebih Mudah
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Akses dashboard intuitif untuk memantau nilai, absensi, dan data santri secara real-time dengan tingkat keamanan tinggi.
          </p>
        </div>

        {/* Footer Info */}
        <div className="relative z-10 text-xs text-slate-400">
          © {new Date().getFullYear()} Santri App. All rights reserved.
        </div>
      </div>

      {/* ================= SISI KANAN: FORM SECTION (50%) ================= */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-16 relative">
        
        {/* Glow effect untuk mobile */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md space-y-8 relative z-10">
          
          {/* Header Form */}
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              Selamat Datang Kembali 👋
            </h1>
            <p className="text-sm text-slate-400">
              Masukkan akun Anda untuk melanjutkan ke dashboard
            </p>
          </div>

          {/* Alert Error */}
          {error && (
            <div className="p-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              {error}
            </div>
          )}

          {/* Form Utama */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Input Email */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 pl-10 bg-slate-900/80 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 rounded-xl transition-all"
                  required
                />
              </div>
            </div>

            {/* Input Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Lupa password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pl-10 bg-slate-900/80 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 rounded-xl transition-all"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              className="w-full h-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/25 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          {/* Footer Register Link */}
          <div className="text-center text-sm text-slate-400 border-t border-slate-800/80 pt-6">
            Belum punya akun?{" "}
            <Link
              to="/signup"
              className="font-semibold text-indigo-400 hover:text-indigo-300 hover:underline transition-all"
            >
              Daftar sekarang
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}