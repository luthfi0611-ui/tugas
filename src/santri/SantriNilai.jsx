export default function SantriNilai() {
  const dataNilai = [
    { id: 1, nama: "Ahmad", matpel: "Fiqih", nilai: 85 },
    { id: 2, nama: "Budi", matpel: "Hadits", nilai: 90 },
  ]

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-10 text-white">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
            📊
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Nilai Santri
            </h1>

            <p className="text-sm text-slate-400">
              Daftar nilai akademik santri
            </p>
          </div>
        </div>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">
            Total Santri
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {dataNilai.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">
            Nilai Tertinggi
          </p>

          <h2 className="text-3xl font-bold text-emerald-400 mt-2">
            {Math.max(...dataNilai.map((n) => n.nilai))}
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">
            Rata-rata Nilai
          </p>

          <h2 className="text-3xl font-bold text-purple-400 mt-2">
            {(
              dataNilai.reduce((total, n) => total + n.nilai, 0) /
              dataNilai.length
            ).toFixed(1)}
          </h2>
        </div>

      </div>

      {/* Tabel */}
      <div className="rounded-2xl border border-white/10 bg-slate-900 overflow-hidden shadow-xl">
        
        <div className="p-5 border-b border-white/10">
          <h2 className="font-bold text-lg">
            Daftar Nilai
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Nilai mata pelajaran setiap santri
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-800/60">
              <tr>
                <th className="text-left px-6 py-4 text-slate-400 font-medium">
                  No
                </th>

                <th className="text-left px-6 py-4 text-slate-400 font-medium">
                  Nama Santri
                </th>

                <th className="text-left px-6 py-4 text-slate-400 font-medium">
                  Mata Pelajaran
                </th>

                <th className="text-left px-6 py-4 text-slate-400 font-medium">
                  Nilai
                </th>

                <th className="text-left px-6 py-4 text-slate-400 font-medium">
                  Predikat
                </th>
              </tr>
            </thead>

            <tbody>
              {dataNilai.map((n, index) => (
                <tr
                  key={n.id}
                  className="border-t border-white/5 hover:bg-white/[0.03] transition"
                >
                  <td className="px-6 py-5 text-slate-500">
                    {index + 1}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold">
                        {n.nama.charAt(0)}
                      </div>

                      <span className="font-semibold">
                        {n.nama}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {n.matpel}
                  </td>

                  <td className="px-6 py-5">
                    <span className="font-bold text-white">
                      {n.nilai}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        n.nilai >= 90
                          ? "bg-emerald-500/15 text-emerald-400"
                          : n.nilai >= 80
                          ? "bg-blue-500/15 text-blue-400"
                          : "bg-red-500/15 text-red-400"
                      }`}
                    >
                      {n.nilai >= 90
                        ? "Sangat Baik"
                        : n.nilai >= 80
                        ? "Baik"
                        : "Perlu Perbaikan"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}