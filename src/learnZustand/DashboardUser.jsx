import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  User,
  BookOpen,
  Server,
  ShieldAlert,
  Settings,
  Plus,
  Minus,
  RotateCcw,
  Save,
  CheckCircle2,
  AlertCircle,
  Eye,
  Edit3,
  Trash2,
  Search,
  Check,
} from "lucide-react";

export default function DashboardUser() {
  // STATE NAVIGASI TAB
  const [activeTab, setActiveTab] = useState("bio");

  // STATE PROFILE AKUN USER (Dipakai di seluruh halaman)
  const [userProfile, setUserProfile] = useState({
    nis: "2026109482",
    name: "Ahmad Mujtaba",
    email: "ahmad.mujtaba@santri.pesantren.id",
    phone: "081234567890",
    kelas: "12 IPA - Aliyah",
    kamarmasjid: "Kamar Abu Bakar - No. 04",
    alamat: "Jl. Raya Rumpin No. 45, Bogor, Jawa Barat",
    role: "Santri",
  });

  // STATE DUMMY LAINNYA
  const [count, setCount] = useState(0);
  const [userSearch, setUserSearch] = useState("");
  const [userRoleFilter, setUserRoleFilter] = useState("ALL");
  const [userPage, setUserPage] = useState(1);
  const [selectedUserDetail, setSelectedUserDetail] = useState(null);
  const [logFilter, setLogFilter] = useState("ALL");
  const [configSearch, setConfigSearch] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);

  // DATA DIREKTORI (Profil user utama masuk otomatis ke sini juga)
  const usersData = [
    { id: 1, name: userProfile.name, email: userProfile.email, role: userProfile.role, region: "Bogor", lastLogin: "Baru Saja", status: "Active" },
    { id: 2, name: "Muhammad Ali", email: "ali@santri.id", role: "Pengurus", region: "Jakarta", lastLogin: "1 jam lalu", status: "Active" },
    { id: 3, name: "Siti Rahma", email: "rahma@santri.id", role: "Ustadzah", region: "Bandung", lastLogin: "3 jam lalu", status: "Active" },
    { id: 4, name: "Budi Santoso", email: "budi@santri.id", role: "Santri", region: "Surabaya", lastLogin: "1 hari lalu", status: "Inactive" },
  ];

  const logsData = [
    { id: 1, timestamp: "13:30:12", status: "SUCCESS", action: "UPDATE_PROFILE", actor: userProfile.name, target: "Bio Santri" },
    { id: 2, timestamp: "12:15:00", status: "BLOCKED", action: "DELETE_USER", actor: userProfile.name, target: "User ID #4" },
  ];

  const [configsData, setConfigsData] = useState([
    { key: "MAINTENANCE_MODE", category: "SYSTEM", description: "Mode pemeliharaan sistem secara keseluruhan", value: false },
    { key: "AUTO_BACKUP_INTERVAL", category: "DATABASE", description: "Interval waktu backup database otomatis", value: "24 Jam" },
  ]);

  // REACT HOOK FORM SETUP
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: userProfile,
  });

  // SIMPAN BIO & PERBARUI PROFILE AKUN
  const onSubmitBio = (data) => {
    setUserProfile(data); // <-- Mengubah State Profil Akun Utama
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const triggerReadOnlyGuard = (actionName) => {
    alert(`Aksi "${actionName}" berhasil diakses oleh ${userProfile.name}!`);
  };

  // FILTER DIREKTORI
  const filteredUsers = usersData.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(userSearch.toLowerCase()) || u.email.toLowerCase().includes(userSearch.toLowerCase());
    const matchRole = userRoleFilter === "ALL" || u.role === userRoleFilter;
    return matchSearch && matchRole;
  });

  const itemsPerPage = 3;
  const totalUserPages = Math.ceil(filteredUsers.length / itemsPerPage) || 1;
  const paginatedUsers = filteredUsers.slice((userPage - 1) * itemsPerPage, userPage * itemsPerPage);

  const filteredLogs = logsData.filter((l) => logFilter === "ALL" || l.status === logFilter);
  const filteredConfigs = configsData.filter((c) => c.key.toLowerCase().includes(configSearch.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-64 bg-slate-900/80 border-r border-slate-800 p-4 space-y-4 flex-shrink-0">
        {/* CARD PROFIL AKUN USER (OTOMATIS BERUBAH) */}
        <div className="p-3 bg-indigo-950/40 border border-indigo-500/20 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-black text-white text-base shadow-lg shadow-indigo-600/30">
            {userProfile.name ? userProfile.name.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="overflow-hidden">
            <span className="text-[9px] font-mono font-bold text-indigo-400 uppercase tracking-widest block">
              {userProfile.role}
            </span>
            <h1 className="text-xs font-bold text-white truncate">{userProfile.name}</h1>
            <p className="text-[10px] text-slate-400 truncate">{userProfile.email}</p>
          </div>
        </div>

        <nav className="space-y-1 text-xs">
          <button
            onClick={() => setActiveTab("bio")}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === "bio"
                ? "bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/20"
                : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
            }`}
          >
            <User size={16} /> Bio / Detail Santri
          </button>

          <button
            onClick={() => setActiveTab("directory")}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === "directory"
                ? "bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/20"
                : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
            }`}
          >
            <BookOpen size={16} /> Direktori Teman
          </button>

          <button
            onClick={() => setActiveTab("infrastructure")}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === "infrastructure"
                ? "bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/20"
                : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
            }`}
          >
            <Server size={16} /> Server / Node Santri
          </button>

          <button
            onClick={() => setActiveTab("audit")}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === "audit"
                ? "bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/20"
                : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
            }`}
          >
            <ShieldAlert size={16} /> Log Aktivitas
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === "settings"
                ? "bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/20"
                : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
            }`}
          >
            <Settings size={16} /> Pengaturan Sistem
          </button>

          <button
            onClick={() => setActiveTab("store")}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === "store"
                ? "bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/20"
                : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
            }`}
          >
            <RotateCcw size={16} /> Zustand Store Lab
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        {/* NOTIFIKASI SUKSES */}
        {saveSuccess && (
          <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs font-bold flex items-center gap-2">
            <Check size={16} /> Biodata akun berhasil diperbarui dan diterapkan ke seluruh sistem!
          </div>
        )}

        {/* TAB 1: BIO SANTRI */}
        {activeTab === "bio" && (
          <div className="space-y-6 animate-in fade-in max-w-4xl mx-auto">
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-5">
                <div>
                  <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
                    Informasi Akun Utama
                  </span>
                  <h2 className="text-xl font-bold text-white mt-1">Biodata Santri</h2>
                  <p className="text-xs text-slate-400">
                    Perbarui profil biodata akun kamu di sini.
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 ${
                    isValid
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                  }`}
                >
                  {isValid ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
                  {isValid ? "Form Valid" : "Lengkapi Form"}
                </span>
              </div>

              <form onSubmit={handleSubmit(onSubmitBio)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Nomor Induk Santri (NIS)</label>
                    <input
                      type="text"
                      {...register("nis", { required: true })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Nama Lengkap</label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Email Santri</label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Nomor Telepon / Wali</label>
                    <input
                      type="text"
                      {...register("phone", { required: true })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Tingkat / Kelas</label>
                    <input
                      type="text"
                      {...register("kelas", { required: true })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Kamar / Asrama</label>
                    <input
                      type="text"
                      {...register("kamarmasjid", { required: true })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Alamat Lengkap Rumah</label>
                  <textarea
                    rows={3}
                    {...register("alamat", { required: true })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/20 active:scale-95 cursor-pointer"
                  >
                    <Save size={14} /> Simpan Perubahan Bio
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* TAB 2: DIREKTORI TEMAN */}
        {activeTab === "directory" && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Cari user berdasarkan nama / email..."
                  value={userSearch}
                  onChange={(e) => {
                    setUserSearch(e.target.value);
                    setUserPage(1);
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <select
                  value={userRoleFilter}
                  onChange={(e) => {
                    setUserRoleFilter(e.target.value);
                    setUserPage(1);
                  }}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none"
                >
                  <option value="ALL">Semua Role</option>
                  <option value="Santri">Santri</option>
                  <option value="Pengurus">Pengurus</option>
                  <option value="Ustadzah">Ustadzah</option>
                </select>

                <button
                  onClick={() => triggerReadOnlyGuard("Tambah User Baru")}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-indigo-500 transition-colors"
                >
                  <Plus size={14} /> Add User
                </button>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-mono uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Pengguna</th>
                      <th className="p-4">Role System</th>
                      <th className="p-4">Region</th>
                      <th className="p-4">Aktivitas Terakhir</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {paginatedUsers.length > 0 ? (
                      paginatedUsers.map((usr) => (
                        <tr key={usr.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="p-4 font-bold text-white flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-black text-indigo-400">
                              {usr.name ? usr.name.charAt(0) : "U"}
                            </div>
                            <div>
                              <p>{usr.name}</p>
                              <p className="text-[10px] text-slate-500 font-normal">{usr.email}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-bold rounded-lg">
                              {usr.role}
                            </span>
                          </td>
                          <td className="p-4 font-mono text-slate-400">{usr.region}</td>
                          <td className="p-4 text-slate-400">{usr.lastLogin}</td>
                          <td className="p-4">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                usr.status === "Active"
                                  ? "bg-emerald-500/10 text-emerald-400"
                                  : "bg-slate-800 text-slate-400"
                              }`}
                            >
                              {usr.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setSelectedUserDetail(usr)}
                                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg"
                              >
                                <Eye size={14} />
                              </button>
                              <button
                                onClick={() => triggerReadOnlyGuard(`Edit User (${usr.name})`)}
                                className="p-1.5 text-amber-400 hover:text-amber-300 bg-slate-800 rounded-lg"
                              >
                                <Edit3 size={14} />
                              </button>
                              <button
                                onClick={() => triggerReadOnlyGuard(`Hapus User (${usr.name})`)}
                                className="p-1.5 text-rose-400 hover:text-rose-300 bg-slate-800 rounded-lg"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="p-8 text-center text-slate-500">
                          Tidak ada pengguna ditemukan.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Halaman <strong className="text-white">{userPage}</strong> dari{" "}
                  <strong className="text-white">{totalUserPages}</strong>
                </span>

                <div className="flex gap-2">
                  <button
                    disabled={userPage === 1}
                    onClick={() => setUserPage((p) => Math.max(p - 1, 1))}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg disabled:opacity-40 font-bold hover:bg-slate-700"
                  >
                    Prev
                  </button>
                  <button
                    disabled={userPage === totalUserPages}
                    onClick={() => setUserPage((p) => Math.min(p + 1, totalUserPages))}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg disabled:opacity-40 font-bold hover:bg-slate-700"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INFRASTRUCTURE */}
        {activeTab === "infrastructure" && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white">Server / Node Akun {userProfile.name}</h3>
              <p className="text-xs text-slate-400">Status Server Aktif milik {userProfile.email}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3">
                  <span className="text-xs font-bold text-indigo-400 font-mono">NODE-JKT-01 (Primary)</span>
                  <p className="text-xs text-slate-400">Terhubung ke Asrama: {userProfile.kamarmasjid}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: AUDIT LOGS */}
        {activeTab === "audit" && (
          <div className="space-y-4 animate-in fade-in">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs space-y-3">
              {filteredLogs.map((log) => (
                <div key={log.id} className="flex justify-between items-center border-b border-slate-900 pb-2">
                  <span className="text-indigo-400 font-bold">{log.action}</span>
                  <span className="text-slate-400">Actor: {userProfile.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SETTINGS */}
        {activeTab === "settings" && (
          <div className="space-y-4 animate-in fade-in">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl divide-y divide-slate-800">
              {filteredConfigs.map((cfg) => (
                <div key={cfg.key} className="p-5 flex justify-between items-center">
                  <div>
                    <p className="font-mono text-xs font-bold text-white">{cfg.key}</p>
                    <p className="text-xs text-slate-400">{cfg.description}</p>
                  </div>
                  <span className="text-xs font-bold text-indigo-400">{String(cfg.value)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: ZUSTAND LAB */}
        {activeTab === "store" && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 text-center space-y-6 animate-in fade-in max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-white">Lab Store - {userProfile.name}</h2>
            <div className="text-7xl font-black text-indigo-400 my-6 font-mono">{count}</div>
            <div className="flex justify-center items-center gap-3">
              <button onClick={() => setCount((prev) => prev - 1)} className="p-4 bg-slate-800 rounded-2xl"><Minus /></button>
              <button onClick={() => setCount(0)} className="px-5 py-4 bg-slate-800 rounded-2xl text-xs font-bold"><RotateCcw /> Reset</button>
              <button onClick={() => setCount((prev) => prev + 1)} className="p-4 bg-indigo-600 text-white rounded-2xl"><Plus /></button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}