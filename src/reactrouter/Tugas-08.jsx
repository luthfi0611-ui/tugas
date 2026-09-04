import React from "react";
import { NavLink, useParams, useNavigate } from "react-router";
import { dataSantri } from "./dataSantri";

// Komponen Navigasi Tab
export function NavigasiSantri() {
  const activeStyle = "bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition";
  const inactiveStyle = "bg-white text-slate-600 hover:bg-slate-100 font-semibold py-2 px-4 rounded-lg border border-slate-200 transition";

  return (
    <div className="flex gap-3 mb-6">
      <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
        Dashboard
      </NavLink>
      <NavLink to="/santri" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
        Daftar Santri
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
        Tentang Pondok
      </NavLink>
    </div>
  );
}

export function DashboardSantri() {
  return (
    <div>
      <NavigasiSantri />
      <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 text-center">
        <div className="inline-block p-4 bg-emerald-50 rounded-full mb-4">
          <span className="text-4xl">🧑‍💻</span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
          DASHBOARD SANTRI
        </h2>
        <p className="text-slate-600 max-w-md mx-auto mb-4">
          Selamat datang di Dashboard Santri.
        </p>
        <NavLink to="/santri">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-6 rounded-lg transition shadow-md">
            Lihat Data Santri →
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export function DaftarSantri() {
  return (
    <div>
      <NavigasiSantri />
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 border-b pb-3">
          Daftar Santri
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {dataSantri.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-800">{s.nama}</h3>
                <p className="text-sm font-medium text-slate-500 mb-4">
                  Kelas {s.kelas}
                </p>
              </div>
              <NavLink to={`/santri/${s.id}`}>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition">
                  Detail 
                </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DetailSantri() {
  const { id } = useParams();
  const navigate = useNavigate();

  const santri = dataSantri.find((item) => item.id === parseInt(id));

  if (!santri) {
    return (
      <div>
        <NavigasiSantri />
        <div className="bg-rose-50 border border-rose-200 text-rose-700 p-6 rounded-xl text-center">
          <p className="font-semibold text-lg">Data santri tidak ditemukan!</p>
          <button
            onClick={() => navigate("/santri")}
            className="mt-4 bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            [ Kembali ke Daftar Santri ]
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavigasiSantri />
      <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 border-b pb-3 mb-4">
          Detail Santri
        </h2>
        <div className="space-y-3 font-mono text-slate-700 bg-slate-50 p-4 rounded-lg mb-6 border border-slate-200">
          <p><strong className="inline-block w-20 text-slate-900">ID</strong> : {santri.id}</p>
          <p><strong className="inline-block w-20 text-slate-900">Nama</strong> : {santri.nama}</p>
          <p><strong className="inline-block w-20 text-slate-900">Kelas</strong> : {santri.kelas}</p>
        </div>
        <button
          onClick={() => navigate("/santri")}
          className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-lg transition"
        >
          [ Kembali ]
        </button>
      </div>
    </div>
  );
}

// Komponen Halaman About Pondok
export function AboutPondok() {
  return (
    <div>
      <NavigasiSantri />
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Pondok Tahfizh plus it abudzar
          </h2>
          <p className="text-slate-600 mt-1">
            hafizh qur'an mahir it
          </p>
        </div>

        <p className="text-slate-600 leading-relaxed">
          mencetak santri yang berakhlakul karimah, hafizh qur'an, dan mahir di bidang teknologi informasi.
          </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-slate-800 text-lg">Visi</h3>
            <p className="text-slate-600 text-sm">
              Menjadi lembaga pendidikan Islam unggulan yang melahirkan santri mandiri, berilmu, dan berwawasan global.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-lg">Misi</h3>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>Mendalami ilmu-ilmu keislaman</li>
              <li>Mengembangkan bakat dan teknologi</li>
              <li>Membentuk karakter islami</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-800 text-lg">Lokasi & Kontak</h3>
          <p className="text-sm text-slate-600">
            jl belok kana abis itu lurus <br />
    
          </p>
        </div>
      </div>
    </div>
  );
}