import React, { useState, useEffect, useRef } from 'react';

function Tugas() {
  const [nama, setNama] = useState('Ahmad');
  const [angka, setAngka] = useState(0);
  const [status, setStatus] = useState('Belum ada perubahan angka.');
  
  // Untuk efek glowing kursor
  const dashboardRef = useRef(null);

  useEffect(() => {
    console.log('Dashboard Santri Neo-Digital aktif');
    document.title = "Santri Neo-Dashboard v3.0";

    const handleMouseMove = (e) => {
      if (dashboardRef.current) {
        const { left, top } = dashboardRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        dashboardRef.current.style.setProperty('--x', `${x}px`);
        dashboardRef.current.style.setProperty('--y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    console.log(`Angka diperbarui: ${angka}`);
    
    if (angka > 0) {
      setStatus('Sinkronisasi data berhasil!');
    }
  }, [angka]);

  return (
    <div className="min-h-screen bg-[#050609] text-white p-6 font-sans antialiased overflow-hidden selection:bg-indigo-500/30">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[160px] opacity-70" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[140px] opacity-60" />
        
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5c6b8a 1px, transparent 1px)', backgroundSize: '30px 30px' }}/>
        
        <div className="absolute top-[20%] left-[10%] w-24 h-24 border border-indigo-500/20 rounded-full animate-[blob_10s_infinite]" />
        <div className="absolute top-[60%] left-[80%] w-32 h-32 border border-cyan-500/20 rounded-3xl animate-[blob_12s_infinite_reverse]" />
      </div>

      {/* --- MAIN DASHBOARD CONTAINER --- */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        
        {/* HEADER SECTION */}
        <header className="col-span-1 md:col-span-3 bg-[#0a0c12]/60 backdrop-blur-3xl border border-[#1d212b] rounded-[30px] p-8 flex items-center justify-between shadow-[0_0_80px_-10px_rgba(31,38,51,0.5)]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                SANTRI NETWORK OPERATING SYSTEM
              </p>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tighter mt-3 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Halo, <span className="font-black text-indigo-400 hover:text-indigo-300 transition-colors">{nama || 'Core Santri'}</span>
            </h1>
            <p className="text-slate-400 mt-2 max-w-xl text-lg font-medium">Selamat datang di antarmuka digital Anda. Kelola data dan pantau kemajuan secara real-time.</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-mono text-slate-500">SYSTEM STATUS: <span className="text-emerald-400 font-bold">ONLINE</span></p>
            <p className="text-5xl font-light text-slate-700 tracking-tight">v3.0</p>
          </div>
        </header>

        {/* LEFT COLUMN */}
        <aside className="space-y-8 col-span-1">
          <section className="bg-[#0a0c12]/70 backdrop-blur-xl border border-[#1d212b] rounded-3xl p-7 shadow-2xl space-y-5 transition-all hover:border-indigo-500/30 group">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-indigo-950/50 rounded-2xl border border-indigo-800/30 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Identitas Santri</h2>
            </div>
            
            <div className="relative">
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan nama lengkap..."
                className="w-full px-5 py-4 bg-[#0d1017] border border-[#1d212b] rounded-2xl text-white font-medium placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all group-hover:border-[#2d3343]"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 font-mono text-xs">EDITING</span>
            </div>
          </section>
        </aside>

        {/* CENTER COLUMN */}
        <main className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <section ref={dashboardRef} className="relative group overflow-hidden md:col-span-2 bg-[#0d1017]/50 backdrop-blur-2xl border border-indigo-500/20 rounded-[30px] p-8 shadow-[0_0_60px_-10px_rgba(79,70,229,0.2)] transition-all hover:border-indigo-400/40 cursor-default">
            
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(99, 102, 241, 0.15), transparent 40%)',
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Data Poin Aktif</p>
                <h3 className="text-8xl font-black tracking-tighter text-white font-mono drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  {angka.toString().padStart(2, '0')}
                </h3>
                <p className="text-xl text-slate-400 font-medium max-w-sm">Total akumulasi data yang tercatat dalam sesi ini.</p>
              </div>

              <button
                onClick={() => setAngka(angka + 1)}
                className="group/btn relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-extrabold text-lg rounded-2xl shadow-[0_10px_40px_-10px_rgba(79,70,229,0.5)] active:scale-95 transition-all duration-150 overflow-hidden cursor-pointer"
              >
                <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover/btn:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
                  Perbarui Data
                </span>
              </button>
            </div>
          </section>

          <section className="bg-[#0a0c12]/70 backdrop-blur-xl border border-[#1d212b] rounded-3xl p-7 flex flex-col justify-between shadow-2xl transition-all hover:border-[#2d3343]">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3.5 bg-slate-800/60 rounded-2xl border border-slate-700/50">
                <svg className="w-7 h-7 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Log Aktivitas</h2>
            </div>
            
            <div className={`p-5 rounded-2xl border transition-all duration-300 ${
              angka > 0 
                ? 'bg-emerald-950/30 text-emerald-300 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                : 'bg-[#0d1017] text-slate-500 border-[#1d212b]'
            }`}>
              <p className="text-base font-medium flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${angka > 0 ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`}></span>
                {status}
              </p>
            </div>
          </section>

          <section className="bg-[#0a0c12]/70 backdrop-blur-xl border border-[#1d212b] rounded-3xl p-7 flex flex-col justify-between shadow-2xl transition-all hover:border-[#2d3343]">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3.5 bg-cyan-950/50 rounded-2xl border border-cyan-800/30">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Waktu Sesi</h2>
            </div>
            <div className="text-4xl font-mono font-bold text-white tracking-tighter">
              {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
              <span className="text-lg text-slate-500 ml-2">WIB</span>
            </div>
          </section>
        </main>
      </div>

      {/* FOOTER - FIXED TAG CLOSING */}
      <footer className="relative z-10 max-w-7xl mx-auto text-center py-10 mt-12 border-t border-[#1d212b]">
        <p className="text-sm font-medium text-slate-600 tracking-wide">
          © 2024 Santri Tech Corp. All Rights Reserved. Powered by Neo-Digital Framework v3.0.
        </p>
      </footer>

      {/* INLINE ANIMATION STYLES */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  );
}

export default Tugas;