import useAuthStore from "./Auth/Store/useAuthStore";
import { useNavigate } from "react-router";
import { LogOut, User, ShieldCheck, Plus, Minus, RotateCcw } from "lucide-react";

function DashboardUser() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const count = useAuthStore((state) => state.count || 0);

  const increment = useAuthStore((state) => state.increment);
  const decrement = useAuthStore((state) => state.decrement);
  const reset = useAuthStore((state) => state.reset); // Tambah fungsi reset jika ada di store

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Halo, <span className="text-indigo-400">{user?.name || "User"}</span> 👋
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Selamat datang kembali di dashboard kamu.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-4 py-2 rounded-xl text-sm font-medium transition-all"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* User Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Email Terdaftar</p>
              <p className="text-base font-semibold text-slate-200">{user?.email || "-"}</p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Role Akses</p>
              <span className="inline-block mt-1 px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-md border border-emerald-500/30 capitalize">
                {user?.role || "user"}
              </span>
            </div>
          </div>
        </div>

        {/* Counter Interactive Section */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 text-center space-y-6">
          <div>
            <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wider">
              Zustand Counter Store
            </h2>
            <div className="text-6xl font-black text-indigo-400 my-4 tracking-tight">
              {count}
            </div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <button
              onClick={decrement}
              className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700 font-semibold transition-all active:scale-95"
            >
              <Minus className="w-5 h-5" />
            </button>

            {reset && (
              <button
                onClick={reset}
                className="flex items-center gap-2 px-4 h-12 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 rounded-xl border border-slate-700 text-sm font-medium transition-all active:scale-95"
              >
                <RotateCcw className="w-4 h-4" /> Reset
              </button>
            )}

            <button
              onClick={increment}
              className="flex items-center justify-center w-12 h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-600/30 font-semibold transition-all active:scale-95"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardUser;