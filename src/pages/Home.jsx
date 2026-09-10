import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-6 lg:p-8">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-indigo-400">
              Dashboard
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Selamat Datang 👋
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Pantau dan kelola data santri dengan mudah.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
              📅
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Hari ini
              </p>

              <p className="text-sm font-semibold">
                Senin, 09 September
              </p>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-6 shadow-2xl shadow-indigo-950/40 sm:p-10">

          {/* Decorative */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-purple-300/10 blur-3xl" />

          <div className="relative z-10 max-w-2xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Sistem Aktif
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Kelola Data Santri
              <span className="block text-indigo-100">
                Lebih Mudah & Terstruktur.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
              Satu dashboard untuk mengelola data santri, nilai,
              absensi, dan berbagai informasi akademik secara
              cepat dan terorganisir.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <Link
                to="/santri/list"
                className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50 active:scale-95"
              >
                Lihat Data Santri →
              </Link>

              <Link
                to="/santri"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-md transition hover:bg-white/20"
              >
                Jelajahi Dashboard
              </Link>

            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.07]">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-xl">
                👨‍🎓
              </div>

              <span className="text-xs font-semibold text-emerald-400">
                +12%
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Total Santri
            </p>

            <h3 className="mt-1 text-3xl font-black">
              128
            </h3>

            <p className="mt-2 text-xs text-slate-500">
              dibanding bulan lalu
            </p>
          </div>


          <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/[0.07]">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-xl">
                ✓
              </div>

              <span className="text-xs font-semibold text-emerald-400">
                Baik
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Kehadiran
            </p>

            <h3 className="mt-1 text-3xl font-black">
              96%
            </h3>

            <p className="mt-2 text-xs text-slate-500">
              123 santri hadir hari ini
            </p>
          </div>


          <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.07]">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-xl">
                ⭐
              </div>

              <span className="text-xs font-semibold text-purple-400">
                A
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Rata-rata Nilai
            </p>

            <h3 className="mt-1 text-3xl font-black">
              88.5
            </h3>

            <p className="mt-2 text-xs text-slate-500">
              Predikat sangat baik
            </p>
          </div>


          <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.07]">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-xl">
                📋
              </div>

              <span className="text-xs font-semibold text-orange-400">
                Aktif
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Data Terdaftar
            </p>

            <h3 className="mt-1 text-3xl font-black">
              128
            </h3>

            <p className="mt-2 text-xs text-slate-500">
              data santri aktif
            </p>
          </div>

        </section>


        {/* Bottom Content */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Quick Actions */}
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">

            <div className="mb-6">
              <h2 className="text-lg font-bold">
                Akses Cepat
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Beberapa fitur yang sering digunakan.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              <Link
                to="/santri/list"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-indigo-500/40 hover:bg-indigo-500/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-xl">
                    👨‍🎓
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Data Santri
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Lihat semua data santri
                    </p>
                  </div>

                  <span className="ml-auto text-slate-500 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>


              <Link
                to="/santri/nilai"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-purple-500/40 hover:bg-purple-500/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-xl">
                    📊
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Nilai Santri
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Lihat data nilai
                    </p>
                  </div>

                  <span className="ml-auto text-slate-500 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>


              <Link
                to="/santri/absensi"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-emerald-500/40 hover:bg-emerald-500/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-xl">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Absensi
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Kelola kehadiran santri
                    </p>
                  </div>

                  <span className="ml-auto text-slate-500 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>


              <Link
                to="/about"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-orange-500/40 hover:bg-orange-500/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-xl">
                    ℹ️
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Informasi
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Tentang sistem
                    </p>
                  </div>

                  <span className="ml-auto text-slate-500 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>

            </div>
          </div>


          {/* Activity */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">

            <div className="mb-6">
              <h2 className="text-lg font-bold">
                Aktivitas Terbaru
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Aktivitas sistem hari ini.
              </p>
            </div>

            <div className="space-y-5">

              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />

                <div>
                  <p className="text-sm font-medium">
                    Data santri diperbarui
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    5 menit yang lalu
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" />

                <div>
                  <p className="text-sm font-medium">
                    Absensi hari ini selesai
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    20 menit yang lalu
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400" />

                <div>
                  <p className="text-sm font-medium">
                    Nilai berhasil diperbarui
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    1 jam yang lalu
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* Footer */}
        <div className="mt-8 border-t border-white/10 pt-5 text-center">
          <p className="text-xs text-slate-600">
            Sistem Informasi Santri • Dashboard Management
          </p>
        </div>

      </div>
    </div>
  )
}

export default Home