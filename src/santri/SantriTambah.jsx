import { Link } from 'react-router'

function SantriTambah() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <Link
            to="/santri"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-400 transition mb-5"
          >
            ← Kembali ke daftar santri
          </Link>

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xl">
              +
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-400 font-bold">
                Data Santri
              </p>

              <h1 className="text-3xl font-black mt-1">
                Tambah Santri
              </h1>
            </div>

          </div>

          <p className="text-sm text-slate-500 mt-3">
            Tambahkan data santri baru ke dalam sistem.
          </p>

        </div>


        {/* Form */}
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 md:p-8 shadow-2xl">

          <form className="space-y-6">

            {/* Nama */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Nama Lengkap
              </label>

              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
              />
            </div>


            {/* Kelas */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Kelas
              </label>

              <input
                type="text"
                placeholder="Contoh: 3A"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
              />
            </div>


            {/* Status */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Status
              </label>

              <select
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-indigo-500"
              >
                <option value="aktif">Aktif</option>
                <option value="tidak-aktif">Tidak Aktif</option>
              </select>
            </div>


            {/* Button */}
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 border-t border-white/10 pt-6">

              <Link
                to="/santri"
                className="rounded-xl border border-white/10 px-5 py-3 text-center text-sm font-semibold text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                Batal
              </Link>

              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 active:scale-95"
              >
                Simpan Santri
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default SantriTambah