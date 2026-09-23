import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import {
  Users,
  GraduationCap,
  ClipboardCheck,
  Sparkles,
  LogOut,
  ShieldCheck,
  Search,
  Bell,
  Settings,
  User,
  Plus,
  Home,
  ChevronRight,
  HelpCircle,
  X,
  CheckCircle2,
  AlertCircle,
  Info,
  TrendingUp,
  Download,
  Filter,
  Trash2,
  Eye,
  Edit3,
  Check,
  BookOpen,
  Calendar,
  CreditCard,
  ArrowUpRight,
  MoreVertical,
  Activity,
  Award,
  Clock,
  Database,
  FileSpreadsheet,
  FileText,
  Mail,
  Phone,
  Printer,
  RefreshCw,
  Sliders,
  UserPlus,
  Zap,
} from 'lucide-react'
import useAuthStore from '../learnZustand/Auth/Store/useAuthStore'

// Data Master Bawaan (Default jika localStorage belum terisi)
const INITIAL_SANTRI_LIST = [
  {
    id: 1,
    nisn: '00512345',
    name: 'Ahmad Fauzi',
    class: 'Wustho 1',
    status: 'Hadir',
    nilai: 92,
    hafalan: 'Juz 30 (Lancar)',
    sppStatus: 'Lunas',
    gender: 'Laki-laki',
    phone: '081234567890',
    guardian: 'Bapak Ruslan',
  },
  {
    id: 2,
    nisn: '00512346',
    name: 'Biti Mariam',
    class: 'Ula 2',
    status: 'Hadir',
    nilai: 88,
    hafalan: 'Juz 1-2',
    sppStatus: 'Pending',
    gender: 'Perempuan',
    phone: '081234567891',
    guardian: 'Ibu Aminah',
  },
  {
    id: 3,
    nisn: '00512347',
    name: 'Bambang "Lucinta" Supri',
    class: 'Ulya 1',
    status: 'Izin',
    nilai: 98,
    hafalan: 'Juz 29 (Barokah)',
    sppStatus: 'Lunas',
    gender: 'Waria',
    phone: '081234567892',
    guardian: 'Mami Rosa',
  },
  {
    id: 4,
    nisn: '00512348',
    name: 'Dewi Lestari',
    class: 'Wustho 2',
    status: 'Sakit',
    nilai: 85,
    hafalan: 'Juz 3',
    sppStatus: 'Belum Bayar',
    gender: 'Perempuan',
    phone: '081234567893',
    guardian: 'Ibu Ratna',
  },
  {
    id: 5,
    nisn: '00512349',
    name: 'Eko Prasetyo',
    class: 'Ula 1',
    status: 'Hadir',
    nilai: 95,
    hafalan: 'Juz 1-5 (Mutqin)',
    sppStatus: 'Lunas',
    gender: 'Laki-laki',
    phone: '081234567894',
    guardian: 'Bapak Hendra',
  },
  {
    id: 6,
    nisn: '00512350',
    name: 'Fatimah Az-Zahra',
    class: 'Ulya 2',
    status: 'Hadir',
    nilai: 90,
    hafalan: 'Juz 10',
    sppStatus: 'Lunas',
    gender: 'Perempuan',
    phone: '081234567895',
    guardian: 'Bapak Mansur',
  },
  {
    id: 7,
    nisn: '00512351',
    name: 'Gilang Ramadhan',
    class: 'Wustho 1',
    status: 'Hadir',
    nilai: 82,
    hafalan: 'Juz 30',
    sppStatus: 'Pending',
    gender: 'Laki-laki',
    phone: '081234567896',
    guardian: 'Bapak Taufik',
  },
  {
    id: 8,
    nisn: '00512352',
    name: 'Hana Haniyah',
    class: 'Ula 2',
    status: 'Izin',
    nilai: 87,
    hafalan: 'Juz 1',
    sppStatus: 'Lunas',
    gender: 'Perempuan',
    phone: '081234567897',
    guardian: 'Ibu Hani',
  },
]

export default function SantriLayout() {
  const logout = useAuthStore((state) => state.logout)
  const user = useAuthStore((state) => state.user)
  const navigate = useNavigate()

  // Navigation State
  const [activeTab, setActiveTab] = useState('santri') // 'santri' | 'nilai' | 'absensi' | 'hafalan' | 'keuangan'

  // Popover & Modal States (Fixed Overlay)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [selectedSantri, setSelectedSantri] = useState(null)

  // Filter States
  const [selectedClass, setSelectedClass] = useState('Semua')
  const [selectedStatus, setSelectedStatus] = useState('Semua')
  const [selectedGender, setSelectedGender] = useState('Semua')

  // 1. MEKANISME LOCALSTORAGE AGAR TIDAK HILANG SAAT REFRESH
  const [santriList, setSantriList] = useState(() => {
    const savedData = localStorage.getItem('SANTRI_PERSISTENT_DATA')
    if (savedData) {
      try {
        return JSON.parse(savedData)
      } catch (e) {
        console.error('Gagal membaca data dari LocalStorage:', e)
      }
    }
    return INITIAL_SANTRI_LIST
  })

  // 2. Simpan setiap ada pembaruan pada state santriList
  useEffect(() => {
    localStorage.setItem('SANTRI_PERSISTENT_DATA', JSON.stringify(santriList))
  }, [santriList])

  // Form State Tambah Santri
  const [newSantri, setNewSantri] = useState({
    name: '',
    nisn: '',
    class: 'Ula 1',
    gender: 'Laki-laki',
    phone: '',
    guardian: '',
  })

  // Notifications State
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Pendaftaran Santri Baru',
      desc: 'Bambang (Waria 💅) terverifikasi di kelas Ulya 1.',
      time: '10 menit yang lalu',
      type: 'success',
      read: false,
    },
    {
      id: 2,
      title: 'Laporan Absensi Perlu Ditinjau',
      desc: 'Kelas Wustho 2 belum mengisi absensi sesi sore.',
      time: '1 jam yang lalu',
      type: 'warning',
      read: false,
    },
    {
      id: 3,
      title: 'Jadwal Ujian Semester',
      desc: 'Jadwal ujian hafalan Al-Qur\'an telah diterbitkan.',
      time: '3 jam yang lalu',
      type: 'info',
      read: true,
    },
    {
      id: 4,
      title: 'Pembayaran SPP Terkonfirmasi',
      desc: 'Santri Eko Prasetyo melunasi SPP bulan ini.',
      time: '5 jam yang lalu',
      type: 'success',
      read: true,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  // Keyboard Shortcuts Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen((prev) => !prev)
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
        setIsNotificationsOpen(false)
        setIsProfileMenuOpen(false)
        setIsAddModalOpen(false)
        setIsFilterModalOpen(false)
        setIsDetailModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/signin')
  }

  const handleAddSantriSubmit = (e) => {
    e.preventDefault()
    if (!newSantri.name || !newSantri.nisn) return
    const created = {
      id: Date.now(),
      name: newSantri.name,
      nisn: newSantri.nisn,
      class: newSantri.class,
      status: 'Hadir',
      nilai: 85,
      hafalan: 'Juz 30 (Baru)',
      sppStatus: 'Belum Bayar',
      gender: newSantri.gender,
      phone: newSantri.phone || '-',
      guardian: newSantri.guardian || '-',
    }
    setSantriList([created, ...santriList])
    setNewSantri({
      name: '',
      nisn: '',
      class: 'Ula 1',
      gender: 'Laki-laki',
      phone: '',
      guardian: '',
    })
    setIsAddModalOpen(false)
  }

  const handleDeleteSantri = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data santri ini ngab?')) {
      setSantriList(santriList.filter((item) => item.id !== id))
    }
  }

  const handleResetDefaultData = () => {
    if (window.confirm('Reset semua data kembali ke setelan pabrik?')) {
      localStorage.removeItem('SANTRI_PERSISTENT_DATA')
      setSantriList(INITIAL_SANTRI_LIST)
    }
  }

  const handleOpenDetail = (santri) => {
    setSelectedSantri(santri)
    setIsDetailModalOpen(true)
  }

  // Multi-Filter Logic
  const filteredSantri = santriList.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nisn.includes(searchQuery) ||
      item.class.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesClass =
      selectedClass === 'Semua' || item.class === selectedClass

    const matchesStatus =
      selectedStatus === 'Semua' || item.status === selectedStatus

    const matchesGender =
      selectedGender === 'Semua' || item.gender === selectedGender

    return matchesSearch && matchesClass && matchesStatus && matchesGender
  })

  const handleExportData = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      ['NISN,Nama,Gender,Kelas,Status,Nilai,Hafalan,SPP']
        .concat(
          filteredSantri.map(
            (s) =>
              `${s.nisn},${s.name},${s.gender},${s.class},${s.status},${s.nilai},"${s.hafalan}",${s.sppStatus}`
          )
        )
        .join('\n')

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'data_santri_export.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 md:p-8 selection:bg-indigo-500 selection:text-white font-sans antialiased relative">
      
      {/* Background Radial Ambiance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-6">

        {/* ================= TOP NAVBAR ================= */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-3 px-4 backdrop-blur-md">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Home size={14} className="text-slate-500" />
            <ChevronRight size={12} className="text-slate-600" />
            <span>Dashboard Admin</span>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="font-semibold text-indigo-400 capitalize">
              {activeTab === 'santri' && 'Daftar Santri'}
              {activeTab === 'nilai' && 'Nilai Akademik'}
              {activeTab === 'absensi' && 'Absensi Presensi'}
              {activeTab === 'hafalan' && 'Catatan Hafalan'}
              {activeTab === 'keuangan' && 'Status Keuangan'}
            </span>
          </div>

          {/* Quick Actions Header */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-400 hover:border-slate-700 hover:text-slate-200 transition-all"
            >
              <Search size={14} className="text-slate-400" />
              <span className="hidden md:inline">Cari santri, NISN, kelas...</span>
              <kbd className="hidden sm:inline-block rounded border border-slate-700 bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                Ctrl K
              </kbd>
            </button>

            {/* Notification Button */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen)
                  setIsProfileMenuOpen(false)
                }}
                className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:text-white transition-all"
              >
                <Bell size={16} />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white shadow-md shadow-indigo-600/50 animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>

            {/* Profile Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsProfileMenuOpen(!isProfileMenuOpen)
                  setIsNotificationsOpen(false)
                }}
                className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-1.5 pr-3 hover:border-slate-700 transition-all"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
                  {user?.name ? user.name.charAt(0).toUpperCase() : 'L'}
                </div>
                <span className="text-xs font-medium text-slate-200 hidden sm:inline">
                  {user?.name || 'Luthfi'}
                </span>
              </button>
            </div>

          </div>
        </div>

        {/* ================= FIXED FLOATING POPUPS (Z-999 TIDAK NABRAK) ================= */}
        
        {/* 1. NOTIFICATION FLOATING PANEL */}
        {isNotificationsOpen && (
          <div className="fixed top-16 right-4 sm:right-10 w-80 sm:w-96 rounded-2xl border border-slate-800 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-2xl z-[999] animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Bell size={16} className="text-indigo-400" />
                <h4 className="text-sm font-semibold text-white">Pemberitahuan</h4>
              </div>
              {unreadCount > 0 && (
                <button
                  onClick={() =>
                    setNotifications(notifications.map((n) => ({ ...n, read: true })))
                  }
                  className="text-[11px] font-medium text-indigo-400 hover:underline"
                >
                  Tandai semua dibaca
                </button>
              )}
            </div>

            <div className="mt-3 space-y-2 max-h-80 overflow-y-auto pr-1">
              {notifications.map((item) => (
                <div
                  key={item.id}
                  className={`p-3 rounded-xl border text-xs transition-all ${
                    item.read
                      ? 'border-slate-800/40 bg-slate-950/40 text-slate-400'
                      : 'border-indigo-500/30 bg-indigo-500/10 text-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-white">{item.title}</p>
                    {!item.read && (
                      <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">{item.desc}</p>
                  <p className="text-[10px] text-slate-500 mt-2 font-mono">{item.time}</p>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => setIsNotificationsOpen(false)}
              className="mt-3 w-full rounded-xl bg-slate-800 py-2 text-center text-xs font-semibold text-slate-300 hover:bg-slate-700 transition-colors"
            >
              Tutup Notifikasi
            </button>
          </div>
        )}

        {/* 2. PROFILE MENU FLOATING PANEL */}
        {isProfileMenuOpen && (
          <div className="fixed top-16 right-4 sm:right-8 w-56 rounded-2xl border border-slate-800 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-2xl z-[999] animate-in fade-in zoom-in-95">
            <div className="px-3 py-2 border-b border-slate-800">
              <p className="text-xs font-semibold text-white">{user?.name || 'Luthfi Admin'}</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">{user?.role || 'Administrator'}</p>
            </div>
            <div className="py-1 space-y-1">
              <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs text-slate-300 hover:bg-slate-800 transition-colors">
                <User size={14} /> Profil Saya
              </button>
              <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs text-slate-300 hover:bg-slate-800 transition-colors">
                <Settings size={14} /> Pengaturan Sistem
              </button>
            </div>
            <div className="border-t border-slate-800 pt-1 mt-1">
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <LogOut size={14} /> Keluar Aplikasi
              </button>
            </div>
          </div>
        )}

        {/* ================= HEADER STATS ANALYTICS ================= */}
        <header className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-indigo-950/50 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-400">
                  SANTRI MANAGEMENT HUB v2.4 (AUTO-SAVED)
                </span>
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Manajemen Santri Terpadu
              </h1>
              <p className="text-sm text-slate-400 leading-relaxed">
                Data otomatis tersimpan di browser via LocalStorage. Tambah, hapus, atau ubah status tanpa takut hilang pas direfresh!
              </p>
              <button
                onClick={handleResetDefaultData}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-800/80 text-[11px] text-slate-300 hover:bg-slate-700 transition-all"
              >
                <RefreshCw size={12} /> Reset Data ke Setelan Awal
              </button>
            </div>

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5">
                <p className="text-[10px] font-bold uppercase text-slate-400">Total Santri</p>
                <p className="text-2xl font-black text-white mt-1">{santriList.length}</p>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                  <TrendingUp size={10} /> Live Persistent
                </span>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5">
                <p className="text-[10px] font-bold uppercase text-slate-400">Kehadiran</p>
                <p className="text-2xl font-black text-emerald-400 mt-1">96.8%</p>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Sesi Hari Ini</span>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5">
                <p className="text-[10px] font-bold uppercase text-slate-400">Rata-Rata Nilai</p>
                <p className="text-2xl font-black text-indigo-400 mt-1">88.5</p>
                <span className="text-[10px] text-indigo-300 mt-0.5 block">Kategori Baik</span>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5">
                <p className="text-[10px] font-bold uppercase text-slate-400">SPP Terbayar</p>
                <p className="text-2xl font-black text-purple-400 mt-1">
                  {santriList.filter((s) => s.sppStatus === 'Lunas').length}/{santriList.length}
                </p>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Bulan Aktif</span>
              </div>
            </div>

          </div>
        </header>

        {/* ================= NAVIGATION TABS & ACTION BUTTONS ================= */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Tab Navigation Buttons */}
          <div className="flex overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80 p-1.5 backdrop-blur-md scrollbar-none">
            <button
              onClick={() => setActiveTab('santri')}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'santri'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Users size={16} />
              <span>Daftar Santri</span>
              <span className="rounded bg-indigo-950 px-1.5 py-0.5 text-[10px] text-indigo-200">
                {filteredSantri.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('nilai')}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'nilai'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GraduationCap size={16} />
              <span>Nilai Akademik</span>
            </button>

            <button
              onClick={() => setActiveTab('absensi')}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'absensi'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ClipboardCheck size={16} />
              <span>Absensi</span>
            </button>

            <button
              onClick={() => setActiveTab('hafalan')}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'hafalan'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen size={16} />
              <span>Progres Hafalan</span>
            </button>

            <button
              onClick={() => setActiveTab('keuangan')}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'keuangan'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <CreditCard size={16} />
              <span>Keuangan SPP</span>
            </button>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => setIsFilterModalOpen(true)}
              className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-all"
            >
              <Filter size={14} />
              <span>Filter Data</span>
            </button>
            <button
              onClick={handleExportData}
              className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-all"
            >
              <Download size={14} />
              <span>Ekspor CSV</span>
            </button>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 active:scale-95 transition-all"
            >
              <Plus size={14} />
              <span>Tambah Santri</span>
            </button>
          </div>

        </div>

        {/* ================= MAIN CONTENT SECTION ================= */}
        <main className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
          
          {/* TAB 1: DAFTAR SANTRI */}
          {activeTab === 'santri' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white">Data Master Santri</h3>
                  <p className="text-xs text-slate-400">Menampilkan {filteredSantri.length} dari total {santriList.length} santri</p>
                </div>
                {(selectedClass !== 'Semua' || selectedStatus !== 'Semua' || selectedGender !== 'Semua') && (
                  <button
                    onClick={() => {
                      setSelectedClass('Semua')
                      setSelectedStatus('Semua')
                      setSelectedGender('Semua')
                    }}
                    className="text-xs text-indigo-400 hover:underline"
                  >
                    Reset Filter
                  </button>
                )}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950/80 text-slate-400 uppercase font-mono text-[10px]">
                    <tr>
                      <th className="p-3.5 rounded-l-xl">NISN</th>
                      <th className="p-3.5">Nama Santri</th>
                      <th className="p-3.5">Gender</th>
                      <th className="p-3.5">Kelas</th>
                      <th className="p-3.5">Status Presensi</th>
                      <th className="p-3.5">Wali Santri</th>
                      <th className="p-3.5 rounded-r-xl text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {filteredSantri.map((santri) => (
                      <tr key={santri.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="p-3.5 font-mono text-indigo-400 font-semibold">{santri.nisn}</td>
                        <td className="p-3.5 font-bold text-white">{santri.name}</td>
                        <td className="p-3.5">
                          <span
                            className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${
                              santri.gender === 'Waria'
                                ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                                : 'text-slate-300'
                            }`}
                          >
                            {santri.gender === 'Waria' ? '💅 Waria' : santri.gender}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-300">{santri.class}</td>
                        <td className="p-3.5">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              santri.status === 'Hadir'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : santri.status === 'Izin'
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                            }`}
                          >
                            {santri.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-400">{santri.guardian}</td>
                        <td className="p-3.5 text-right space-x-1.5">
                          <button
                            onClick={() => handleOpenDetail(santri)}
                            className="p-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all"
                            title="Lihat Detail"
                          >
                            <Eye size={13} />
                          </button>
                          <button
                            onClick={() => handleDeleteSantri(santri.id)}
                            className="p-1.5 rounded-lg border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all"
                            title="Hapus Santri"
                          >
                            <Trash2 size={13} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: NILAI AKADEMIK */}
          {activeTab === 'nilai' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white">Nilai Ujian & Evaluasi Akademik</h3>
                <span className="text-xs text-indigo-400">Tahun Ajaran 2026/2027</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSantri.map((santri) => (
                  <div key={santri.id} className="p-4 rounded-2xl border border-slate-800 bg-slate-950/40 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-white">{santri.name}</p>
                      <p className="text-xs text-slate-400">{santri.class} • NISN: {santri.nisn}</p>
                      <div className="flex gap-2 text-[10px] text-slate-400 mt-2">
                        <span className="bg-slate-800 px-2 py-0.5 rounded">Tajwid: A</span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded">Fiqih: B+</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Rata-Rata</span>
                      <span className="text-2xl font-black text-indigo-400">{santri.nilai}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ABSENSI PRESENSI */}
          {activeTab === 'absensi' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white">Presensi Kehadiran Harian</h3>
                <span className="text-xs text-emerald-400">Rabu, 23 September 2026</span>
              </div>
              <div className="space-y-2">
                {filteredSantri.map((santri) => (
                  <div key={santri.id} className="p-3 rounded-xl border border-slate-800/80 bg-slate-950/30 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-white block">{santri.name}</span>
                      <span className="text-[10px] text-slate-500">{santri.class}</span>
                    </div>
                    <div className="flex gap-1.5">
                      {['Hadir', 'Izin', 'Sakit', 'Alfa'].map((st) => (
                        <button
                          key={st}
                          onClick={() => {
                            setSantriList(
                              santriList.map((s) =>
                                s.id === santri.id ? { ...s, status: st } : s
                              )
                            )
                          }}
                          className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${
                            santri.status === st
                              ? st === 'Hadir'
                                ? 'bg-emerald-600 text-white'
                                : st === 'Izin'
                                ? 'bg-amber-600 text-white'
                                : 'bg-rose-600 text-white'
                              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CATATAN HAFALAN */}
          {activeTab === 'hafalan' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white">Pencapaian Hafalan Al-Qur'an</h3>
                <span className="text-xs text-indigo-400">Program Tahfidz</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSantri.map((santri) => (
                  <div key={santri.id} className="p-4 rounded-2xl border border-slate-800 bg-slate-950/40 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-bold text-white">{santri.name}</p>
                        <p className="text-xs text-slate-400">{santri.class}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs font-bold">
                        {santri.hafalan}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: KEUANGAN SPP */}
          {activeTab === 'keuangan' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white">Verifikasi Pembayaran SPP Bulanan</h3>
                <span className="text-xs text-slate-400">Bulan September 2026</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950/80 text-slate-400 uppercase font-mono text-[10px]">
                    <tr>
                      <th className="p-3.5 rounded-l-xl">Nama Santri</th>
                      <th className="p-3.5">Kelas</th>
                      <th className="p-3.5">Nominal SPP</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5 rounded-r-xl text-right">Ubah Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {filteredSantri.map((santri) => (
                      <tr key={santri.id}>
                        <td className="p-3.5 font-bold text-white">{santri.name}</td>
                        <td className="p-3.5 text-slate-400">{santri.class}</td>
                        <td className="p-3.5 font-mono text-slate-300">Rp 350.000</td>
                        <td className="p-3.5">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              santri.sppStatus === 'Lunas'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : santri.sppStatus === 'Pending'
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                            }`}
                          >
                            {santri.sppStatus}
                          </span>
                        </td>
                        <td className="p-3.5 text-right">
                          <button
                            onClick={() => {
                              setSantriList(
                                santriList.map((s) =>
                                  s.id === santri.id
                                    ? {
                                        ...s,
                                        sppStatus:
                                          s.sppStatus === 'Lunas'
                                            ? 'Belum Bayar'
                                            : 'Lunas',
                                      }
                                    : s
                                )
                              )
                            }}
                            className="px-3 py-1 rounded-lg bg-indigo-600 text-white font-bold text-[10px] hover:bg-indigo-500 transition-colors"
                          >
                            Tandai Lunas / Unpaid
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-slate-800/60 bg-slate-900/40 px-6 py-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-indigo-400" />
            <span>Santri Management System v2.4 • Server & Local Storage Sync</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Panduan Sistem</a>
            <a href="#" className="hover:text-slate-300">Dukungan Teknis</a>
          </div>
        </footer>

      </div>

      {/* ================= MODAL FILTER DATA ================= */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">Filter Data Santri</h3>
              <button onClick={() => setIsFilterModalOpen(false)} className="text-slate-400 hover:text-white">
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block mb-1.5 font-semibold text-slate-300">Pilih Kelas</label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Semua">Semua Kelas</option>
                  <option value="Ula 1">Ula 1</option>
                  <option value="Ula 2">Ula 2</option>
                  <option value="Wustho 1">Wustho 1</option>
                  <option value="Wustho 2">Wustho 2</option>
                  <option value="Ulya 1">Ulya 1</option>
                  <option value="Ulya 2">Ulya 2</option>
                </select>
              </div>

              <div>
                <label className="block mb-1.5 font-semibold text-slate-300">Pilih Jenis Kelamin</label>
                <select
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Semua">Semua Gender</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                  <option value="Waria">Waria 💅</option>
                </select>
              </div>

              <div>
                <label className="block mb-1.5 font-semibold text-slate-300">Status Kehadiran</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Semua">Semua Status</option>
                  <option value="Hadir">Hadir</option>
                  <option value="Izin">Izin</option>
                  <option value="Sakit">Sakit</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => setIsFilterModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-500"
            >
              Terapkan Filter
            </button>
          </div>
        </div>
      )}

      {/* ================= MODAL TAMBAH SANTRI ================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Pendaftaran Santri Baru</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAddSantriSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block mb-1 font-semibold text-slate-300">Nama Lengkap Santri</label>
                <input
                  type="text"
                  placeholder="Contoh: Ahmad Fauzi"
                  value={newSantri.name}
                  onChange={(e) => setNewSantri({ ...newSantri, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block mb-1 font-semibold text-slate-300">NISN</label>
                  <input
                    type="text"
                    placeholder="005XXXXX"
                    value={newSantri.nisn}
                    onChange={(e) => setNewSantri({ ...newSantri, nisn: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-slate-300">Jenis Kelamin</label>
                  <select
                    value={newSantri.gender}
                    onChange={(e) => setNewSantri({ ...newSantri, gender: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                    <option value="Waria">Waria 💅</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block mb-1 font-semibold text-slate-300">Kelas Diniyah</label>
                  <select
                    value={newSantri.class}
                    onChange={(e) => setNewSantri({ ...newSantri, class: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Ula 1">Ula 1</option>
                    <option value="Ula 2">Ula 2</option>
                    <option value="Wustho 1">Wustho 1</option>
                    <option value="Wustho 2">Wustho 2</option>
                    <option value="Ulya 1">Ulya 1</option>
                    <option value="Ulya 2">Ulya 2</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-slate-300">Wali Santri</label>
                  <input
                    type="text"
                    placeholder="Nama Orang Tua"
                    value={newSantri.guardian}
                    onChange={(e) => setNewSantri({ ...newSantri, guardian: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-semibold text-slate-300">No. HP / WhatsApp Wali</label>
                <input
                  type="text"
                  placeholder="08XXXXXXXXXX"
                  value={newSantri.phone}
                  onChange={(e) => setNewSantri({ ...newSantri, phone: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-800"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500"
                >
                  Simpan Santri
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL DETAIL SANTRI ================= */}
      {isDetailModalOpen && selectedSantri && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Detail Informasi Santri</h3>
              <button onClick={() => setIsDetailModalOpen(false)} className="text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <p className="text-sm font-extrabold text-indigo-400">{selectedSantri.name}</p>
                <p className="text-[11px] text-slate-400">NISN: {selectedSantri.nisn}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <div className="p-2.5 rounded-xl border border-slate-800/80 bg-slate-950/40">
                  <span className="text-[10px] text-slate-500 block">Kelas</span>
                  <span className="font-semibold">{selectedSantri.class}</span>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-800/80 bg-slate-950/40">
                  <span className="text-[10px] text-slate-500 block">Jenis Kelamin</span>
                  <span className="font-semibold">
                    {selectedSantri.gender === 'Waria' ? '💅 Waria' : selectedSantri.gender}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-800/80 bg-slate-950/40">
                  <span className="text-[10px] text-slate-500 block">Wali Santri</span>
                  <span className="font-semibold">{selectedSantri.guardian}</span>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-800/80 bg-slate-950/40">
                  <span className="text-[10px] text-slate-500 block">Telepon</span>
                  <span className="font-semibold">{selectedSantri.phone}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-950/40 space-y-1">
                <span className="text-[10px] text-slate-500 block">Capaian Hafalan</span>
                <p className="font-bold text-emerald-400">{selectedSantri.hafalan}</p>
              </div>
            </div>

            <button
              onClick={() => setIsDetailModalOpen(false)}
              className="w-full py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-700"
            >
              Tutup Modal
            </button>
          </div>
        </div>
      )}

      {/* ================= SEARCH MODAL DIALOG ================= */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-2xl space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2 flex-1">
                <Search size={16} className="text-indigo-400" />
                <input
                  type="text"
                  placeholder="Ketik nama, NISN, atau kelas santri..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-xs text-white focus:outline-none"
                  autoFocus
                />
              </div>
              <button onClick={() => setIsSearchOpen(false)} className="text-slate-400 hover:text-white">
                <X size={16} />
              </button>
            </div>
            <p className="text-[10px] text-slate-500">Pencarian langsung memfilter tabel santri secara instan.</p>
          </div>
        </div>
      )}

    </section>
  )
}