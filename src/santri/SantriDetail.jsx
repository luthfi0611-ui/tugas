import { Link, useParams } from 'react-router';

function SantriDetail() {
  const { santri_id } = useParams();

  // Dummy data detail santri (Bisa disesuaikan nanti dengan Fetch API/State)
  const detailSantri = {
    id: santri_id,
    nama: "Ahmad Fauzi",
    nis: "2024001",
    kelas: "10A",
    kamar: "Al-Ghazali 01",
    status: "Aktif",
    wali: "Budi Utomo",
    telepon: "0812-3456-7890",
    alamat: "Jl. Merdeka No. 45, Jakarta Selatan",
    tanggalMasuk: "12 Juli 2023",
  };

  return (
    <div className="w-full min-h-screen bg-slate-50/50 p-4 md:p-8 text-slate-800">
      {/* Header & Back Button */}
      <div className="mb-6">
        <Link
          to="/santri"
          className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors mb-3 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> 
          Kembali ke Daftar Santri
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Profil Detail Santri
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              ID Sistem: <span className="font-mono font-medium text-slate-600">#{santri_id}</span>
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm">
            ● {detailSantri.status}
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Avatar Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white text-3xl font-extrabold flex items-center justify-center shadow-md mb-4">
            {detailSantri.nama.charAt(0)}
          </div>
          <h2 className="text-xl font-bold text-slate-900">{detailSantri.nama}</h2>
          <p className="text-xs font-mono text-slate-400 mt-1">NIS: {detailSantri.nis}</p>

          <div className="w-full border-t border-slate-100 my-4" />

          <div className="w-full space-y-3 text-left text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Kelas</span>
              <span className="font-semibold text-slate-700">Kelas {detailSantri.kelas}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Asrama</span>
              <span className="font-semibold text-slate-700">{detailSantri.kamar}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Masuk</span>
              <span className="font-semibold text-slate-700">{detailSantri.tanggalMasuk}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Information Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
            Informasi Pribadi & Orang Tua
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <span className="block text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                Nama Wali / Orang Tua
              </span>
              <p className="font-semibold text-slate-800">{detailSantri.wali}</p>
            </div>

            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <span className="block text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                Nomor Telepon
              </span>
              <p className="font-semibold text-slate-800">{detailSantri.telepon}</p>
            </div>

            <div className="sm:col-span-2 bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <span className="block text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                Alamat Rumah
              </span>
              <p className="font-semibold text-slate-800">{detailSantri.alamat}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-all">
              Cetak Profil
            </button>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-md transition-all active:scale-95">
              Edit Data Santri
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SantriDetail;