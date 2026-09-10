import { NavLink, Outlet } from 'react-router'
import {
  Users,
  GraduationCap,
  ClipboardCheck,
  Sparkles,
} from 'lucide-react'

function SantriLayout() {
  const navItems = [
    {
      to: '/santri',
      label: 'Daftar Santri',
      icon: Users,
      end: true,
    },
    {
      to: '/santri/nilai',
      label: 'Nilai',
      icon: GraduationCap,
    },
    {
      to: '/santri/absensi',
      label: 'Absensi',
      icon: ClipboardCheck,
    },
  ]

  return (
    <section className="min-h-screen bg-slate-950 p-5 text-white md:p-8 lg:p-10">

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <header className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 p-6 md:p-8">

          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative z-10">

            {/* Label */}
            <div className="mb-4 flex items-center gap-2">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <Sparkles
                  size={16}
                  className="text-indigo-400"
                />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400">
                Management
              </span>

            </div>


            {/* Title */}
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">

              <div>

                <h1 className="text-3xl font-black tracking-tight md:text-4xl">
                  Santri
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Kelola data santri, nilai akademik, dan absensi
                  dalam satu tempat.
                </p>

              </div>


              {/* Status */}
              <div className="hidden items-center gap-2 rounded-xl border border-emerald-500/10 bg-emerald-500/5 px-4 py-2.5 md:flex">

                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />

                <span className="text-xs font-semibold text-emerald-400">
                  Sistem Aktif
                </span>

              </div>

            </div>

          </div>

        </header>


        {/* ================= NAVIGATION ================= */}
        <div className="mb-6">

          <div className="inline-flex w-full overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/80 p-1.5 shadow-xl shadow-black/10 md:w-auto">

            {navItems.map((item) => (

              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className="group relative"
              >

                {({ isActive }) => (

                  <div
                    className={`
                      relative flex items-center justify-center gap-2
                      whitespace-nowrap rounded-xl px-4 py-2.5
                      text-xs font-semibold transition-all duration-300
                      md:px-5
                      ${
                        isActive
                          ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                          : 'text-slate-500 hover:bg-white/[0.04] hover:text-slate-200'
                      }
                    `}
                  >

                    <item.icon
                      size={15}
                      className={`
                        transition-colors
                        ${
                          isActive
                            ? 'text-white'
                            : 'text-slate-600 group-hover:text-slate-300'
                        }
                      `}
                    />

                    <span>
                      {item.label}
                    </span>

                    {/* Active Indicator */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-indigo-300" />
                    )}

                  </div>

                )}

              </NavLink>

            ))}

          </div>

        </div>


        {/* ================= CONTENT ================= */}
        <main className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl shadow-black/10">

          {/* Top Accent */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

          <div className="p-4 md:p-6">

            <Outlet />

          </div>

        </main>

      </div>

    </section>
  )
}

export default SantriLayout