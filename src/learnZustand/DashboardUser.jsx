import React, { useState, useEffect, useMemo } from "react";
import useAuthStore from "./Auth/Store/useAuthStore";
import { useNavigate } from "react-router";
import {
  // Navigation & Structure Icons
  LayoutDashboard,
  Users,
  Server,
  Database,
  Activity,
  ShieldCheck,
  ShieldAlert,
  Settings,
  Terminal,
  FileText,
  HelpCircle,
  LogOut,
  Bell,
  Search,
  Filter,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  
  // Action & Status Icons
  Lock,
  Eye,
  Edit3,
  Trash2,
  Plus,
  Minus,
  RotateCcw,
  RefreshCw,
  Download,
  Copy,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  ExternalLink,
  Zap,
  Clock,
  Globe,
  Sliders,
  Cpu,
  HardDrive,
  Key
} from "lucide-react";

// ============================================================================
// 1. MOCK ENTERPRISE DATASETS (FOR READ-ONLY ADMIN CONSOLE PARITY)
// ============================================================================

const MOCK_ANALYTICS_METRICS = {
  totalUsers: 14820,
  activeSessions: 1243,
  systemUptime: "99.98%",
  monthlyApiRequests: "4.2M",
  avgResponseTime: "24ms",
  securityIncidents: 0,
};

const MOCK_SYSTEM_MODULES = [
  { id: "mod-1", name: "Authentication Gateway", status: "Operational", load: "18%", latency: "12ms" },
  { id: "mod-2", name: "Core GraphQL API", status: "Operational", load: "62%", latency: "28ms" },
  { id: "mod-3", name: "PostgreSQL Database Primary", status: "Operational", load: "45%", latency: "4ms" },
  { id: "mod-4", name: "Redis Distributed Cache", status: "Degraded", load: "89%", latency: "140ms" },
  { id: "mod-5", name: "AWS S3 Asset Pipeline", status: "Operational", load: "12%", latency: "45ms" },
  { id: "mod-6", name: "Notification Webhook Service", status: "Operational", load: "31%", latency: "19ms" },
];

const MOCK_USER_DIRECTORY = [
  { id: "usr-001", name: "Alex Supriyanto", email: "alex@company.com", role: "Super Admin", status: "Active", lastLogin: "2 mins ago", region: "ID-JKT" },
  { id: "usr-002", name: "Siti Rahmawati", email: "siti.rahma@company.com", role: "DevOps Engineer", status: "Active", lastLogin: "15 mins ago", region: "SG-SIN" },
  { id: "usr-003", name: "Budi Santoso", email: "budi.s@company.com", role: "Security Auditor", status: "Idle", lastLogin: "2 hours ago", region: "US-EAST" },
  { id: "usr-004", name: "Jessica Tan", email: "jessica@company.com", role: "Product Manager", status: "Active", lastLogin: "1 hour ago", region: "ID-JKT" },
  { id: "usr-005", name: "David Miller", email: "david.m@company.com", role: "Frontend Lead", status: "Offline", lastLogin: "1 day ago", region: "EU-FRA" },
  { id: "usr-006", name: "Rizky Pratama", email: "rizky.p@company.com", role: "Database Admin", status: "Active", lastLogin: "5 mins ago", region: "SG-SIN" },
  { id: "usr-007", name: "Dewi Lestari", email: "dewi.l@company.com", role: "QA Engineer", status: "Active", lastLogin: "30 mins ago", region: "ID-JKT" },
  { id: "usr-008", name: "Kevin Sanjaya", email: "kevin.s@company.com", role: "Backend Developer", status: "Offline", lastLogin: "3 days ago", region: "US-WEST" },
];

const MOCK_AUDIT_LOGS = [
  { id: "log-101", timestamp: "2026-09-23 11:14:02", actor: "alex@company.com", action: "DEPLOY_BUILD", target: "cluster-prod-01", status: "SUCCESS" },
  { id: "log-102", timestamp: "2026-09-23 11:10:45", actor: "system-bot", action: "AUTO_SCALE_UP", target: "node-group-alpha", status: "SUCCESS" },
  { id: "log-103", timestamp: "2026-09-23 10:55:12", actor: "budi.s@company.com", action: "UPDATE_FIREWALL", target: "waf-rule-992", status: "DENIED" },
  { id: "log-104", timestamp: "2026-09-23 10:42:00", actor: "siti.rahma@company.com", action: "FLUSH_CACHE", target: "redis-cluster-main", status: "SUCCESS" },
  { id: "log-105", timestamp: "2026-09-23 10:15:33", actor: "user-readonly", action: "MUTATE_ATTEMPT", target: "user-permissions", status: "BLOCKED" },
];

const MOCK_SYSTEM_CONFIGS = [
  { key: "ENABLE_TWO_FACTOR_AUTH", description: "Wajibkan 2FA untuk seluruh akun admin", value: true, category: "Security" },
  { key: "API_RATE_LIMIT_PER_MIN", description: "Batas maksimum HTTP Request per IP", value: "1000", category: "Network" },
  { key: "MAINTENANCE_MODE", description: "Kunci akses publik dan tampilkan halaman pemeliharaan", value: false, category: "System" },
  { key: "SESSION_TIMEOUT_MINUTES", description: "Durasi kadaluarsa token JWT otomatis", value: "60", category: "Security" },
  { key: "AUTO_BACKUP_SCHEDULE", description: "Jadwal snapshot database berkala (Cron)", value: "0 0 * * *", category: "Database" },
];

// ============================================================================
// 2. MAIN USER DASHBOARD COMPONENT (ADMIN-PARITY FULL FEATURED)
// ============================================================================

export default function DashboardUser() {
  // --------------------------------------------------------------------------
  // A. ZUSTAND STORE & ROUTING
  // --------------------------------------------------------------------------
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const count = useAuthStore((state) => state.count || 0);

  const increment = useAuthStore((state) => state.increment);
  const decrement = useAuthStore((state) => state.decrement);
  const reset = useAuthStore((state) => state.reset);

  const navigate = useNavigate();

  // --------------------------------------------------------------------------
  // B. UI & NAVIGATION STATES
  // --------------------------------------------------------------------------
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [readOnlyBannerVisible, setReadOnlyBannerVisible] = useState(true);

  // Read-Only Security Guard Modal / Toast Notification State
  const [securityModal, setSecurityModal] = useState({
    isOpen: false,
    actionAttempted: "",
    details: "",
  });

  // Table Filtering & Search States
  const [userSearch, setUserSearch] = useState("");
  const [userRoleFilter, setUserRoleFilter] = useState("ALL");
  const [logFilter, setLogFilter] = useState("ALL");
  const [configSearch, setConfigSearch] = useState("");

  // Pagination States
  const [userPage, setUserPage] = useState(1);
  const usersPerPage = 4;

  // Selected Item Detail Drawer Modal State
  const [selectedUserDetail, setSelectedUserDetail] = useState(null);

  // Interactive Live Telemetry Simulator State
  const [telemetrySim, setTelemetrySim] = useState({
    cpuLoad: 42,
    memoryUsage: 68,
    networkTraffic: 310,
  });

  // Refresh Spinner State
  const [isRefreshing, setIsRefreshing] = useState(false);

  // --------------------------------------------------------------------------
  // C. REALTIME SIMULATION EFFECTS
  // --------------------------------------------------------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetrySim((prev) => ({
        cpuLoad: Math.floor(35 + Math.random() * 30),
        memoryUsage: Math.floor(60 + Math.random() * 15),
        networkTraffic: Math.floor(280 + Math.random() * 80),
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // --------------------------------------------------------------------------
  // D. HANDLERS & SECURITY ENFORCER
  // --------------------------------------------------------------------------
  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  /**
   * Block any edit/delete/save operation and trigger the Read-Only Alert Modal
   */
  const triggerReadOnlyGuard = (actionName, details = "") => {
    setSecurityModal({
      isOpen: true,
      actionAttempted: actionName,
      details: details || "Akun Anda terautentikasi sebagai READ-ONLY USER. Perubahan struktur data atau variabel sistem hanya dapat dilakukan oleh administrator tingkat lanjut.",
    });
  };

  const handleRefreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  // --------------------------------------------------------------------------
  // E. FILTERED DATA COMPUTATION
  // --------------------------------------------------------------------------
  const filteredUsers = useMemo(() => {
    return MOCK_USER_DIRECTORY.filter((usr) => {
      const matchesSearch =
        usr.name.toLowerCase().includes(userSearch.toLowerCase()) ||
        usr.email.toLowerCase().includes(userSearch.toLowerCase());
      const matchesRole = userRoleFilter === "ALL" || usr.role === userRoleFilter;
      return matchesSearch && matchesRole;
    });
  }, [userSearch, userRoleFilter]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (userPage - 1) * usersPerPage;
    return filteredUsers.slice(startIndex, startIndex + usersPerPage);
  }, [filteredUsers, userPage]);

  const totalUserPages = Math.ceil(filteredUsers.length / usersPerPage) || 1;

  const filteredLogs = useMemo(() => {
    if (logFilter === "ALL") return MOCK_AUDIT_LOGS;
    return MOCK_AUDIT_LOGS.filter((log) => log.status === logFilter);
  }, [logFilter]);

  const filteredConfigs = useMemo(() => {
    return MOCK_SYSTEM_CONFIGS.filter(
      (cfg) =>
        cfg.key.toLowerCase().includes(configSearch.toLowerCase()) ||
        cfg.description.toLowerCase().includes(configSearch.toLowerCase())
    );
  }, [configSearch]);

  // --------------------------------------------------------------------------
  // F. RENDER HELPERS
  // --------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white flex flex-col md:flex-row overflow-x-hidden">
      
      {/* ==================================================================== */}
      {/* 3. SECURITY GUARD MODAL (PERFORMED ON ANY CHANGE ATTEMPT)           */}
      {/* ==================================================================== */}
      {securityModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6 relative border-t-4 border-t-rose-500">
            
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-rose-500/10 text-rose-400 rounded-2xl border border-rose-500/20 shrink-0">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">
                  Akses Terbatas (Read-Only)
                </h3>
                <p className="text-xs text-rose-400 font-mono mt-0.5">
                  ACTION_BLOCKED: {securityModal.actionAttempted}
                </p>
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300 space-y-2 leading-relaxed">
              <p>{securityModal.details}</p>
              <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
                <Lock size={14} className="text-amber-400 shrink-0" />
                <span>Identitas Anda: <strong className="text-indigo-400">{user?.name || "User"}</strong> ({user?.role || "User Read-Only"})</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSecurityModal({ isOpen: false, actionAttempted: "", details: "" })}
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-all"
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 4. USER DETAIL DRAWER MODAL (READ-ONLY VIEW)                       */}
      {/* ==================================================================== */}
      {selectedUserDetail && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-5 relative">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-lg font-black">
                  {selectedUserDetail.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{selectedUserDetail.name}</h3>
                  <p className="text-xs text-slate-400">{selectedUserDetail.email}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedUserDetail(null)}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg text-xs"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-500">ID Pengguna</span>
                <span className="font-mono text-slate-200">{selectedUserDetail.id}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-500">Role Sistem</span>
                <span className="text-indigo-400 font-bold">{selectedUserDetail.role}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-500">Wilayah / Region</span>
                <span className="text-slate-200">{selectedUserDetail.region}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-500">Aktivitas Terakhir</span>
                <span className="text-slate-200">{selectedUserDetail.lastLogin}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-500">Status Akun</span>
                <span className="text-emerald-400 font-bold">{selectedUserDetail.status}</span>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => triggerReadOnlyGuard(`Sunting User (${selectedUserDetail.name})`)}
                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/20 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-not-allowed opacity-80"
              >
                <Edit3 size={14} /> Edit User (Disabled)
              </button>
              <button
                onClick={() => setSelectedUserDetail(null)}
                className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 5. SIDEBAR NAVIGATION (PARITY WITH ADMIN CONSOLE)                  */}
      {/* ==================================================================== */}
      <aside
        className={`${
          sidebarOpen ? "w-full md:w-64" : "w-full md:w-20"
        } bg-slate-900/80 border-r border-slate-800/80 p-4 flex flex-col justify-between transition-all duration-300 shrink-0 z-30`}
      >
        <div className="space-y-6">
          {/* Logo & Toggle Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-600/30">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              {sidebarOpen && (
                <div>
                  <h2 className="text-sm font-extrabold tracking-wider uppercase text-white">
                    Enterprise
                  </h2>
                  <span className="text-[10px] text-slate-400 font-mono block -mt-0.5">Read-Only Console</span>
                </div>
              )}
            </div>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden md:flex p-1.5 text-slate-400 hover:text-white bg-slate-800/60 rounded-xl border border-slate-700/50"
            >
              {sidebarOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

          {/* User Profile Card Snippet */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center font-black text-xs shrink-0">
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            {sidebarOpen && (
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-white truncate">{user?.name || "User Member"}</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] text-slate-400 font-medium capitalize truncate">
                    {user?.role || "user"} (Read-Only)
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Menu Links */}
          <nav className="space-y-1">
            {[
              { id: "overview", label: "Overview Telemetry", icon: LayoutDashboard },
              { id: "users", label: "User Directory", icon: Users },
              { id: "infrastructure", label: "Services & Nodes", icon: Server },
              { id: "audit", label: "Audit & System Logs", icon: Terminal },
              { id: "settings", label: "System Configs", icon: Settings },
              { id: "store", label: "Zustand Lab Store", icon: Zap },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                  }`}
                >
                  <Icon size={18} className="shrink-0" />
                  {sidebarOpen && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Logout Button */}
        <div className="pt-4 border-t border-slate-800/80 space-y-2">
          {sidebarOpen && (
            <div className="px-3 py-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[10px] text-amber-300 font-medium flex items-center gap-2">
              <Lock size={12} className="shrink-0" />
              <span>Akses Mode Read-Only Aktif</span>
            </div>
          )}

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 p-2.5 rounded-xl text-xs font-bold transition-all"
          >
            <LogOut size={16} />
            {sidebarOpen && <span>Logout Dashboard</span>}
          </button>
        </div>
      </aside>

      {/* ==================================================================== */}
      {/* 6. MAIN CONTENT WRAPPER                                              */}
      {/* ==================================================================== */}
      <main className="flex-1 p-4 md:p-8 space-y-6 overflow-y-auto">
        
        {/* Global Banner Notice: Read-Only Privilege Mode */}
        {readOnlyBannerVisible && (
          <div className="bg-amber-500/10 border border-amber-500/30 text-amber-200 px-4 py-3 rounded-2xl flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                <strong>Mode Tinjauan Read-Only:</strong> Anda masuk sebagai <strong className="text-white">{user?.name || "User"}</strong> ({user?.email || "user@mybrand.app"}). Anda dapat menjelajahi seluruh modul sistem, namun modifikasi data dibatasi.
              </span>
            </div>
            <button
              onClick={() => setReadOnlyBannerVisible(false)}
              className="text-amber-400 hover:text-white font-bold shrink-0 text-xs"
            >
              ✕
            </button>
          </div>
        )}

        {/* Top Header Controls Bar */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900/60 border border-slate-800 p-5 rounded-3xl backdrop-blur-xl">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-white flex items-center gap-2">
              Halo, <span className="text-indigo-400">{user?.name || "User"}</span> 👋
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Identitas Login: <span className="text-slate-200 font-mono">{user?.email || "user@mybrand.app"}</span> &bull; Status Hak Akses: <span className="text-emerald-400 font-bold uppercase">{user?.role || "user"} (READ-ONLY)</span>
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={handleRefreshData}
              className={`p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 text-xs font-semibold flex items-center gap-2 transition-all ${
                isRefreshing ? "animate-spin" : ""
              }`}
              title="Refresh Telemetry"
            >
              <RefreshCw size={14} />
            </button>

            <button
              onClick={() => triggerReadOnlyGuard("Export Full System Report")}
              className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700 text-xs font-bold flex items-center gap-2 transition-all"
            >
              <Download size={14} /> Export Report
            </button>

            <button
              onClick={() => triggerReadOnlyGuard("Create New Record / Entity")}
              className="px-4 py-2.5 bg-indigo-600/40 text-slate-300 border border-indigo-500/30 rounded-xl text-xs font-bold flex items-center gap-2 cursor-not-allowed opacity-80"
            >
              <Plus size={14} /> Add New Entry
            </button>
          </div>
        </header>

        {/* ==================================================================== */}
        {/* TAB 1: OVERVIEW TELEMETRY & SYSTEM HEALTH                            */}
        {/* ==================================================================== */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-in fade-in">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="text-xs font-medium uppercase tracking-wider">Total Registered Users</span>
                  <Users size={18} className="text-indigo-400" />
                </div>
                <p className="text-2xl font-extrabold text-white">{MOCK_ANALYTICS_METRICS.totalUsers.toLocaleString()}</p>
                <p className="text-[11px] text-emerald-400 font-medium">+12.4% dari bulan lalu</p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="text-xs font-medium uppercase tracking-wider">Active Sessions</span>
                  <Activity size={18} className="text-sky-400" />
                </div>
                <p className="text-2xl font-extrabold text-white">{MOCK_ANALYTICS_METRICS.activeSessions.toLocaleString()}</p>
                <p className="text-[11px] text-slate-400 font-medium">Tersebar di 14 region</p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="text-xs font-medium uppercase tracking-wider">System Uptime</span>
                  <ShieldCheck size={18} className="text-emerald-400" />
                </div>
                <p className="text-2xl font-extrabold text-white">{MOCK_ANALYTICS_METRICS.systemUptime}</p>
                <p className="text-[11px] text-emerald-400 font-medium">SLA Target Met</p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="text-xs font-medium uppercase tracking-wider">Avg Response Time</span>
                  <Clock size={18} className="text-amber-400" />
                </div>
                <p className="text-2xl font-extrabold text-white">{MOCK_ANALYTICS_METRICS.avgResponseTime}</p>
                <p className="text-[11px] text-slate-400 font-medium">Global Edge Cache</p>
              </div>
            </div>

            {/* Simulated Realtime Health Gauge Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-2"><Cpu size={14} className="text-indigo-400" /> Cluster CPU Utilization</span>
                  <span className="font-mono text-indigo-400">{telemetrySim.cpuLoad}%</span>
                </div>
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-indigo-500 h-full transition-all duration-500"
                    style={{ width: `${telemetrySim.cpuLoad}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-2"><HardDrive size={14} className="text-purple-400" /> Memory Allocation</span>
                  <span className="font-mono text-purple-400">{telemetrySim.memoryUsage}%</span>
                </div>
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-purple-500 h-full transition-all duration-500"
                    style={{ width: `${telemetrySim.memoryUsage}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-2"><Globe size={14} className="text-sky-400" /> Network Bandwidth</span>
                  <span className="font-mono text-sky-400">{telemetrySim.networkTraffic} Mbps</span>
                </div>
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-sky-500 h-full transition-all duration-500"
                    style={{ width: `${(telemetrySim.networkTraffic / 400) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* System Modules Health Table */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-bold text-white">System Service Status</h3>
                  <p className="text-xs text-slate-400">Pemantauan kesehatan microservice (Read-Only Viewer)</p>
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold rounded-full">
                  All Systems Operational
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {MOCK_SYSTEM_MODULES.map((mod) => (
                  <div key={mod.id} className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-200">{mod.name}</p>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                        <span>Load: {mod.load}</span>
                        <span>&bull;</span>
                        <span>Latency: {mod.latency}</span>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        mod.status === "Operational"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}
                    >
                      {mod.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 2: USER DIRECTORY (ADMIN-LIKE READ ONLY TABLE WITH SEARCH & FILTER)*/}
        {/* ==================================================================== */}
        {activeTab === "users" && (
          <div className="space-y-4 animate-in fade-in">
            {/* Table Search & Control Bar */}
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
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
                  <option value="Super Admin">Super Admin</option>
                  <option value="DevOps Engineer">DevOps Engineer</option>
                  <option value="Security Auditor">Security Auditor</option>
                  <option value="Product Manager">Product Manager</option>
                </select>

                <button
                  onClick={() => triggerReadOnlyGuard("Tambah User Baru")}
                  className="px-4 py-2 bg-indigo-600/40 text-slate-300 border border-indigo-500/30 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-not-allowed opacity-80"
                >
                  <Plus size={14} /> Add User
                </button>
              </div>
            </div>

            {/* User Directory Table */}
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
                      <th className="p-4 text-right">Actions (Read-Only)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {paginatedUsers.length > 0 ? (
                      paginatedUsers.map((usr) => (
                        <tr key={usr.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="p-4 font-bold text-white flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-black text-indigo-400">
                              {usr.name.charAt(0)}
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
                                title="Lihat Detail User"
                              >
                                <Eye size={14} />
                              </button>
                              <button
                                onClick={() => triggerReadOnlyGuard(`Edit User (${usr.name})`)}
                                className="p-1.5 text-slate-500 hover:text-amber-400 bg-slate-800 rounded-lg cursor-not-allowed"
                                title="Edit (Disabled)"
                              >
                                <Edit3 size={14} />
                              </button>
                              <button
                                onClick={() => triggerReadOnlyGuard(`Hapus User (${usr.name})`)}
                                className="p-1.5 text-slate-500 hover:text-rose-400 bg-slate-800 rounded-lg cursor-not-allowed"
                                title="Delete (Disabled)"
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
                          Tidak ada pengguna yang cocok dengan kriteria pencarian.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Table Pagination Controls */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Menampilkan Halaman <strong className="text-white">{userPage}</strong> dari <strong className="text-white">{totalUserPages}</strong>
                </span>

                <div className="flex gap-2">
                  <button
                    disabled={userPage === 1}
                    onClick={() => setUserPage((p) => Math.max(p - 1, 1))}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg disabled:opacity-40 font-bold"
                  >
                    Prev
                  </button>
                  <button
                    disabled={userPage === totalUserPages}
                    onClick={() => setUserPage((p) => Math.min(p + 1, totalUserPages))}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg disabled:opacity-40 font-bold"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 3: INFRASTRUCTURE & NODES                                       */}
        {/* ==================================================================== */}
        {activeTab === "infrastructure" && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-bold text-white">Cloud Infrastructure Cluster</h3>
                  <p className="text-xs text-slate-400">Ringkasan Node dan Service Deployment (Read-Only Mode)</p>
                </div>
                <button
                  onClick={() => triggerReadOnlyGuard("Restart Node Service Cluster")}
                  className="px-3.5 py-2 bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 text-xs font-bold rounded-xl cursor-not-allowed opacity-80"
                >
                  Restart Cluster (Admin Only)
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-indigo-400 font-mono">NODE-JKT-01 (Primary)</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold rounded">Active</span>
                  </div>
                  <div className="text-xs text-slate-400 space-y-1">
                    <p>Provider: AWS ap-southeast-3 (Jakarta)</p>
                    <p>IP Address: 108.136.21.90</p>
                    <p>Containers Active: 24 Pods</p>
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-indigo-400 font-mono">NODE-SIN-02 (Secondary)</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold rounded">Active</span>
                  </div>
                  <div className="text-xs text-slate-400 space-y-1">
                    <p>Provider: AWS ap-southeast-1 (Singapore)</p>
                    <p>IP Address: 13.228.14.102</p>
                    <p>Containers Active: 18 Pods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 4: AUDIT & SYSTEM LOGS                                           */}
        {/* ==================================================================== */}
        {activeTab === "audit" && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex justify-between items-center bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <span className="text-xs font-bold text-slate-300">Filter Status Event Log:</span>
              <div className="flex gap-2">
                {["ALL", "SUCCESS", "BLOCKED", "DENIED"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setLogFilter(st)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                      logFilter === st
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-950 text-slate-400 border border-slate-800"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs space-y-3">
              {filteredLogs.map((log) => (
                <div key={log.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900 pb-2.5 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 text-[11px]">{log.timestamp}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        log.status === "SUCCESS"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : log.status === "BLOCKED"
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-rose-500/10 text-rose-400"
                      }`}
                    >
                      {log.status}
                    </span>
                    <span className="text-indigo-400 font-bold">{log.action}</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    Actor: <span className="text-slate-200">{log.actor}</span> &bull; Target: <span className="text-slate-200">{log.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 5: SYSTEM CONFIGURATIONS (READ-ONLY SWITCHES)                   */}
        {/* ==================================================================== */}
        {activeTab === "settings" && (
          <div className="space-y-4 animate-in fade-in">
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <input
                type="text"
                placeholder="Cari konfigurasi sistem..."
                value={configSearch}
                onChange={(e) => setConfigSearch(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl divide-y divide-slate-800">
              {filteredConfigs.map((cfg) => (
                <div key={cfg.key} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-white">{cfg.key}</span>
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[10px] rounded font-mono">{cfg.category}</span>
                    </div>
                    <p className="text-xs text-slate-400">{cfg.description}</p>
                  </div>

                  <div>
                    {typeof cfg.value === "boolean" ? (
                      <button
                        onClick={() => triggerReadOnlyGuard(`Ubah Konfigurasi (${cfg.key})`)}
                        className={`w-12 h-6 rounded-full p-1 transition-colors ${
                          cfg.value ? "bg-indigo-600" : "bg-slate-800"
                        } cursor-not-allowed`}
                      >
                        <div className={`w-4 h-4 rounded-full bg-white transition-transform ${cfg.value ? "translate-x-6" : "translate-x-0"}`}></div>
                      </button>
                    ) : (
                      <button
                        onClick={() => triggerReadOnlyGuard(`Sunting Nilai (${cfg.key})`)}
                        className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 rounded-xl text-xs font-mono font-bold cursor-not-allowed"
                      >
                        {cfg.value}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 6: ZUSTAND LAB STORE INTERACTIVE TEST BED                        */}
        {/* ==================================================================== */}
        {activeTab === "store" && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 text-center space-y-6 animate-in fade-in max-w-2xl mx-auto">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Interactive Client Store</span>
              <h2 className="text-xl font-bold text-white mt-1">
                Zustand Counter Test Lab
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                Pengujian state lokal pengguna yang terhubung secara global via Store.
              </p>
              <div className="text-7xl font-black text-indigo-400 my-6 tracking-tight font-mono">
                {count}
              </div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <button
                onClick={decrement}
                className="flex items-center justify-center w-14 h-14 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-2xl border border-slate-700 font-semibold transition-all active:scale-95 shadow-lg"
                title="Kurangi Counter"
              >
                <Minus className="w-6 h-6" />
              </button>

              {reset && (
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-5 h-14 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 rounded-2xl border border-slate-700 text-xs font-bold transition-all active:scale-95 shadow-lg"
                >
                  <RotateCcw className="w-4 h-4" /> Reset
                </button>
              )}

              <button
                onClick={increment}
                className="flex items-center justify-center w-14 h-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl shadow-xl shadow-indigo-600/30 font-semibold transition-all active:scale-95"
                title="Tambah Counter"
              >
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}