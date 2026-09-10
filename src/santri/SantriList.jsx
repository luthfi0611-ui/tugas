import { Link } from 'react-router'
import SantriCard from '@/components/SantriCard'
import { useState } from 'react'

function SantriList() {
  const [search, setSearch] = useState('')

  const santries = [
    {
      id: 1,
      name: 'Ahmad Fauzi',
      classroom: '3A',
    },
    {
      id: 2,
      name: 'Siti Aisyah',
      classroom: '3B',
    },
    {
      id: 3,
      name: 'Rizki Ramadan',
      classroom: '3C',
    },
  ]

  const filteredSantri = santries.filter((santri) =>
    santri.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">

        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 border border-indigo-500/20 text-xl">
              🎓
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Manajemen
              </p>

              <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                Data Santri
              </h1>
            </div>
          </div>

          <p className="max-w-xl text-sm text-slate-400">
            Kelola data santri dengan mudah. Tambahkan santri baru,
            lihat informasi, dan buka detail setiap santri.
          </p>
        </div>

        {/* Button Tambah */}
        <Link
          to="/santri/tambah"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-500 hover:-translate-y-0.5 active:scale-95"
        >
          <span className="text-lg">+</span>
          Tambah Santri
        </Link>

      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

        <div className="group rounded-2xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-indigo-500/30">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">
              Total Santri
            </p>

            <span className="rounded-lg bg-indigo-500/10 px-2.5 py-1 text-xs text-indigo-400">
              Semua
            </span>
          </div>

          <p className="mt-3 text-3xl font-black">
            {santries.length}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Santri terdaftar
          </p>
        </div>

        <div className="group rounded-2xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-emerald-500/30">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">
              Santri Aktif
            </p>

            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />
          </div>

          <p className="mt-3 text-3xl font-black">
            {santries.length}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Status aktif
          </p>
        </div>

        <div className="group rounded-2xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-purple-500/30">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">
              Kelas
            </p>

            <span className="rounded-lg bg-purple-500/10 px-2.5 py-1 text-xs text-purple-400">
              Akademik
            </span>
          </div>

          <p className="mt-3 text-3xl font-black">
            3
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Kelas terdaftar
          </p>
        </div>

      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-xl">

          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
            🔍
          </span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama santri..."
            className="w-full rounded-2xl border border-white/10 bg-slate-900 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10"
          />

        </div>
      </div>

      {/* Section Card */}
      <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-5 md:p-6">

        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-lg font-bold">
              Daftar Santri
            </h2>

            <p className="text-xs text-slate-500 mt-1">
              {filteredSantri.length} santri ditemukan
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-400">
            ● Aktif
          </div>

        </div>

        {/* Cards */}
        {filteredSantri.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {filteredSantri.map((santri) => (
              <Link
                key={santri.id}
                to={`/santri/${santri.id}`}
                className="group block"
              >
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-1 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10">

                  <SantriCard
                    id={santri.id}
                    name={santri.name}
                    classroom={santri.classroom}
                  />

                </div>
              </Link>
            ))}

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">

            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-2xl">
              🔍
            </div>

            <h3 className="font-bold">
              Santri tidak ditemukan
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Coba gunakan nama pencarian yang lain.
            </p>

          </div>
        )}

      </div>

    </div>
  )
}

export default SantriList