import React, { useState, useEffect } from 'react';

function Tugas() {
  const [nama, setNama] = useState('Ahmad');
  const [angka, setAngka] = useState(0);
  const [status, setStatus] = useState('Belum ada perubahan angka.');

  // Efek pas komponen pertama kali muncul (Mounting)
  useEffect(() => {
    console.log('Dashboard Santri berhasil dijalankan');
  }, []);

  // Efek setiap kali 'angka' berubah
  useEffect(() => {
    console.log(`Angka sekarang: ${angka}`);
    document.title = `Angka: ${angka}`;

    if (angka > 0) {
      setStatus('Angka sudah berubah.');
    }
  }, [angka]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-2xl p-6 space-y-6">
        
        {/* Header */}
        <div className="border-b border-slate-700/60 pb-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Dashboard Santri
          </p>
          <h1 className="text-2xl font-bold text-white mt-1">
            Halo, <span className="text-emerald-400">{nama || 'Santri'}</span> 👋
          </h1>
        </div>

        {/* Input Nama */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-400">
            Nama Santri
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama..."
            className="w-full px-4 py-2.5 bg-slate-900/70 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200"
          />
        </div>

        {/* Counter Section */}
        <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-700/40 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Hitungan Angka</p>
            <p className="text-3xl font-extrabold text-white mt-1">{angka}</p>
          </div>

          <button
            onClick={() => setAngka(angka + 1)}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-semibold rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-150 cursor-pointer"
          >
            + Tambah
          </button>
        </div>

        {/* Status Indicator */}
        <div className="pt-2">
          <p className="text-xs font-medium text-slate-400 mb-2">Status Aktivitas</p>
          <div className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm border ${
            angka > 0 
              ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' 
              : 'bg-slate-700/30 text-slate-400 border-slate-700/50'
          }`}>
            <span className={`w-2 h-2 rounded-full ${angka > 0 ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
            {status}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Tugas;