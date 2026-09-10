function About() {
  const features = [
    {
      icon: '👨‍🎓',
      title: 'Manajemen Santri',
      description:
        'Kelola informasi santri secara terstruktur dan mudah diakses.',
    },
    {
      icon: '📊',
      title: 'Data Nilai',
      description:
        'Pantau nilai akademik dan perkembangan belajar santri.',
    },
    {
      icon: '✓',
      title: 'Absensi',
      description:
        'Catat dan pantau kehadiran santri secara cepat dan terorganisir.',
    },
    {
      icon: '🔒',
      title: 'Data Terstruktur',
      description:
        'Informasi disusun dengan tampilan yang sederhana dan mudah digunakan.',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white p-5 md:p-8 lg:p-10">

      <div className="mx-auto max-w-7xl">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-7 md:p-12 mb-8 shadow-2xl shadow-indigo-950/30">

          {/* Glow */}
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-purple-300/10 blur-3xl" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Tentang Sistem
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Sistem Informasi
              <span className="block text-indigo-100">
                Santri Modern.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm md:text-base leading-7 text-indigo-100">
              Platform sederhana yang dirancang untuk membantu pengelolaan
              data santri, nilai, dan absensi dalam satu dashboard yang
              modern, cepat, dan mudah digunakan.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold backdrop-blur-md">
                ⚡ Cepat
              </div>

              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold backdrop-blur-md">
                🎯 Terstruktur
              </div>

              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold backdrop-blur-md">
                ✨ Modern
              </div>

            </div>

          </div>
        </section>


        {/* Intro + Stats */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* About */}
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">

            <div className="flex items-center gap-3 mb-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                💡
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
                  Kenapa dibuat?
                </p>

                <h2 className="text-xl font-bold mt-1">
                  Tentang Platform
                </h2>
              </div>

            </div>

            <div className="space-y-4 text-sm leading-7 text-slate-400">

              <p>
                Sistem Informasi Santri dibuat untuk membantu proses
                pengelolaan data santri menjadi lebih sederhana dan
                terorganisir.
              </p>

              <p>
                Dengan satu dashboard, pengguna dapat melihat daftar
                santri, memeriksa nilai, serta mengelola informasi
                kehadiran tanpa harus berpindah-pindah halaman.
              </p>

              <p>
                Tampilan dirancang dengan pendekatan modern agar informasi
                penting dapat ditemukan dengan cepat dan mudah dipahami.
              </p>

            </div>

          </div>


          {/* System Info */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">

            <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold">
              System Info
            </p>

            <h2 className="text-xl font-bold mt-1 mb-6">
              Informasi Sistem
            </h2>

            <div className="space-y-4">

              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-sm text-slate-500">
                  Versi
                </span>

                <span className="text-sm font-semibold">
                  v1.0.0
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-sm text-slate-500">
                  Status
                </span>

                <span className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Aktif
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-sm text-slate-500">
                  Platform
                </span>

                <span className="text-sm font-semibold">
                  Web
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Interface
                </span>

                <span className="text-sm font-semibold">
                  Responsive
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* Features */}
        <section className="mb-8">

          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              Fitur Utama
            </p>

            <h2 className="text-2xl md:text-3xl font-black mt-1">
              Semua yang dibutuhkan.
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Beberapa fitur utama yang tersedia dalam sistem.
            </p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-slate-900"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/10 text-xl transition group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="mt-5 font-bold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>

        </section>


        {/* Technology */}
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8 mb-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Teknologi
              </p>

              <h2 className="text-2xl font-bold mt-1">
                Dibangun dengan teknologi modern.
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Teknologi yang digunakan dalam pengembangan aplikasi.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">

              <span className="rounded-xl border border-white/10 bg-slate-950 px-4 py-2 text-xs font-semibold text-cyan-400">
                React
              </span>

              <span className="rounded-xl border border-white/10 bg-slate-950 px-4 py-2 text-xs font-semibold text-sky-400">
                Tailwind CSS
              </span>

              <span className="rounded-xl border border-white/10 bg-slate-950 px-4 py-2 text-xs font-semibold text-yellow-400">
                JavaScript
              </span>

              <span className="rounded-xl border border-white/10 bg-slate-950 px-4 py-2 text-xs font-semibold text-orange-400">
                HTML
              </span>

            </div>

          </div>

        </section>


        {/* Footer Quote */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 to-indigo-950/50 p-7 md:p-10 text-center">

          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative">

            <div className="text-3xl mb-4">
              ✦
            </div>

            <h2 className="text-xl md:text-2xl font-bold">
              Sederhana dalam penggunaan,
              <span className="text-indigo-400">
                {' '}kuat dalam pengelolaan.
              </span>
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              Sistem Informasi Santri • Dashboard Management
            </p>

          </div>

        </section>

        {/* Footer */}
        <footer className="py-8 text-center">
          <p className="text-xs text-slate-600">
            © 2026 Sistem Informasi Santri. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  )
}

export default About