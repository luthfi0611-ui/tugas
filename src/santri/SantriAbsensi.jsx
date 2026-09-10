import { useState } from 'react'

export default function SantriAbsensi() {
  const [dataAbsen, setDataAbsen] = useState([
    { id: 1, nama: 'Ahmad Fauzi', kelas: '3A', status: 'Hadir' },
    { id: 2, nama: 'Budi Santoso', kelas: '3B', status: 'Izin' },
    { id: 3, nama: 'Siti Aisyah', kelas: '3B', status: 'Hadir' },
    { id: 4, nama: 'Rizki Ramadan', kelas: '3C', status: 'Sakit' },
    { id: 5, nama: 'Fahmi Akbar', kelas: '3A', status: 'Alpa' },
  ])

  const ubahStatus = (id, statusBaru) => {
    setDataAbsen(
      dataAbsen.map((santri) =>
        santri.id === id
          ? { ...santri, status: statusBaru }
          : santri
      )
    )
  }

  const total = dataAbsen.length
  const hadir = dataAbsen.filter((a) => a.status === 'Hadir').length
  const izin = dataAbsen.filter((a) => a.status === 'Izin').length
  const sakit = dataAbsen.filter((a) => a.status === 'Sakit').length
  const alpa = dataAbsen.filter((a) => a.status === 'Alpa').length

  const statusStyle = {
    Hadir: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Izin: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    Sakit: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Alpa: 'bg-red-500/10 text-red-400 border-red-500/20',
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-5 md:p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl">
              ✓
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Absensi Santri
              </h1>

              <p className="text-sm text-slate-400 mt-1">
                Kelola kehadiran santri dengan mudah dan terstruktur.
              </p>
            </div>
          </div>
        </div>

        {/* Tanggal */}
        <div className="rounded-2xl border border-white/10 bg-slate-900 px-5 py-3">
          <p className="text-xs text-slate-500 mb-1">
            Absensi Hari Ini
          </p>

          <p className="font-semibold text-sm">
            Senin, 8 September 2026
          </p>
        </div>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400">
              Total Santri
            </span>

            <span className="text-lg">
              👥
            </span>
          </div>

          <p className="text-3xl font-bold mt-3">
            {total}
          </p>

          <p className="text-xs text-slate-500 mt-1">
            Terdaftar
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-emerald-400">
              Hadir
            </span>

            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              ✓
            </span>
          </div>

          <p className="text-3xl font-bold mt-3">
            {hadir}
          </p>

          <p className="text-xs text-slate-500 mt-1">
            Santri hadir
          </p>
        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-blue-400">
              Izin
            </span>

            <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              ℹ
            </span>
          </div>

          <p className="text-3xl font-bold mt-3">
            {izin}
          </p>

          <p className="text-xs text-slate-500 mt-1">
            Santri izin
          </p>
        </div>

        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-red-400">
              Alpa
            </span>

            <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
              !
            </span>
          </div>

          <p className="text-3xl font-bold mt-3">
            {alpa}
          </p>

          <p className="text-xs text-slate-500 mt-1">
            Tanpa keterangan
          </p>
        </div>

      </div>

      {/* Main Card */}
      <div className="rounded-3xl border border-white/10 bg-slate-900 overflow-hidden">

        {/* Card Header */}
        <div className="p-5 md:p-6 border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h2 className="text-lg font-bold">
              Daftar Kehadiran
            </h2>

            <p className="text-xs text-slate-500 mt-1">
              Perbarui status kehadiran setiap santri.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-xs text-slate-400">
              Absensi aktif
            </span>
          </div>

        </div>

        {/* List */}
        <div className="p-4 md:p-6 space-y-3">

          {dataAbsen.map((santri) => (
            <div
              key={santri.id}
              className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-white/5 bg-slate-950/60 p-4 hover:border-indigo-500/30 hover:bg-slate-950 transition-all duration-300"
            >

              {/* Profile */}
              <div className="flex items-center gap-4">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center font-bold text-indigo-300">
                  {santri.nama.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-sm">
                    {santri.nama}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    Kelas {santri.kelas} • ID #{santri.id}
                  </p>
                </div>

              </div>

              {/* Status + Button */}
              <div className="flex items-center gap-3">

                <span
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold ${statusStyle[santri.status]}`}
                >
                  {santri.status}
                </span>

                <select
                  value={santri.status}
                  onChange={(e) =>
                    ubahStatus(santri.id, e.target.value)
                  }
                  className="bg-slate-800 border border-white/10 text-xs rounded-lg px-3 py-2 outline-none focus:border-indigo-500 cursor-pointer"
                >
                  <option value="Hadir">Hadir</option>
                  <option value="Izin">Izin</option>
                  <option value="Sakit">Sakit</option>
                  <option value="Alpa">Alpa</option>
                </select>

              </div>

            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="px-5 md:px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

          <p className="text-xs text-slate-500">
            Menampilkan {total} data santri
          </p>

          <p className="text-xs text-slate-500">
            Hadir: <span className="text-emerald-400 font-semibold">{hadir}</span>
            {' • '}
            Sakit: <span className="text-amber-400 font-semibold">{sakit}</span>
            {' • '}
            Alpa: <span className="text-red-400 font-semibold">{alpa}</span>
          </p>

        </div>

      </div>

    </div>
  )
}