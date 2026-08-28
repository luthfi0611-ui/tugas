import React from "react";
import { Link, useParams, useNavigate } from "react-router";
import { dataSantri } from "./dataSantri";

export function DashboardSantri() {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 text-center">
      <div className="inline-block p-4 bg-emerald-50 rounded-full mb-4">
        <span className="text-4xl">🕌</span>
      </div>
      <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
        DASHBOARD SANTRI
      </h2>
      <p className="text-slate-600 max-w-md mx-auto">
        Selamat datang di Dashboard Santri.
      </p>
      <br></br>
      <Link to="/santri">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-6 rounded-lg transition shadow-md">
            Lihat Data Santri →
          </button>
        </Link>
    </div>
  );
}
export function DaftarSantri() {
  return (
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
            <Link to={`/santri/${s.id}`}>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition">
                [ Detail ]
              </button>
            </Link>
          </div>
        ))}
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
      <div className="bg-rose-50 border border-rose-200 text-rose-700 p-6 rounded-xl text-center">
        <p className="font-semibold text-lg">Data santri tidak ditemukan!</p>
        <button
          onClick={() => navigate("/santri")}
          className="mt-4 bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          [ Kembali ke Daftar Santri ]
        </button>
      </div>
    );
  }

  return (
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
  );
}