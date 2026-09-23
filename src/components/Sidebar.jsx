import { NavLink } from 'react-router'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from './ui/sidebar'

import {
  GraduationCap,
  Home,
  Info,
  Users,
  LogOut,
  User,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

const navItems = [
  {
    to: '/admin',
    label: 'Dashboard',
    icon: Home,
    end: true,
  },
  {
    to: '/admin/santri',
    label: 'Santri',
    icon: Users,
  },
  {
    to: '/admin/about',
    label: 'About',
    icon: Info,
  },
]

function AppSidebar() {
  return (
    <Sidebar className="border-r border-white/10 bg-slate-950 text-white">

      {/* ================= HEADER ================= */}
      <SidebarHeader className="border-b border-white/10 p-4">

        <div className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3 transition-all duration-300 hover:border-indigo-500/20 hover:bg-white/[0.05]">

          {/* Logo */}
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">

            <GraduationCap
              size={22}
              className="text-white"
            />

            <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-400" />

          </div>

          {/* Brand */}
          <div className="flex min-w-0 flex-col">

            <span className="truncate text-base font-black tracking-tight text-white">
              SantriApp
            </span>

            <span className="mt-0.5 truncate text-[10px] font-medium text-slate-500">
              Management Platform
            </span>

          </div>

        </div>

      </SidebarHeader>


      {/* ================= CONTENT ================= */}
      <SidebarContent className="px-3 py-5">

        {/* Menu Label */}
        <div className="mb-3 flex items-center justify-between px-3">

          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
            Menu Utama
          </span>

          <Sparkles
            size={13}
            className="text-indigo-500/60"
          />

        </div>


        {/* Navigation */}
        <SidebarMenu className="space-y-1.5">

          {navItems.map((item) => (

            <SidebarMenuItem key={item.to}>

              <NavLink
                to={item.to}
                end={item.end}
                className="block w-full"
              >

                {({ isActive }) => (

                  <SidebarMenuButton
                    isActive={isActive}
                    tooltip={item.label}
                    className={`
                      group relative h-12 w-full overflow-hidden rounded-xl
                      px-3 transition-all duration-300
                      ${
                        isActive
                          ? 'bg-indigo-500/10 text-white shadow-lg shadow-indigo-950/20'
                          : 'text-slate-500 hover:bg-white/[0.04] hover:text-slate-200'
                      }
                    `}
                  >

                    {/* Active Glow */}
                    {isActive && (
                      <>
                        <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-indigo-500 shadow-lg shadow-indigo-500/60" />

                        <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.08] to-transparent" />
                      </>
                    )}


                    {/* Icon */}
                    <div
                      className={`
                        relative z-10 flex h-9 w-9 items-center justify-center rounded-lg
                        transition-all duration-300
                        ${
                          isActive
                            ? 'bg-indigo-500/15 text-indigo-400'
                            : 'bg-white/[0.03] text-slate-500 group-hover:bg-white/[0.06] group-hover:text-slate-300'
                        }
                      `}
                    >
                      <item.icon size={18} />
                    </div>


                    {/* Label */}
                    <span className="relative z-10 flex-1 text-left text-sm font-semibold">
                      {item.label}
                    </span>


                    {/* Arrow */}
                    <ChevronRight
                      size={15}
                      className={`
                        relative z-10 transition-all duration-300
                        ${
                          isActive
                            ? 'translate-x-0 text-indigo-400 opacity-100'
                            : '-translate-x-1 text-slate-700 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                        }
                      `}
                    />

                  </SidebarMenuButton>

                )}

              </NavLink>

            </SidebarMenuItem>

          ))}

        </SidebarMenu>


        {/* Quick Info */}
        <div className="mt-8 px-1">

          <div className="relative overflow-hidden rounded-2xl border border-indigo-500/10 bg-gradient-to-br from-indigo-500/[0.08] to-purple-500/[0.03] p-4">

            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />

            <div className="relative">

              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                ✦
              </div>

              <p className="text-xs font-bold text-slate-300">
                Sistem Aktif
              </p>

              <p className="mt-1 text-[10px] leading-5 text-slate-600">
                Semua sistem berjalan dengan normal.
              </p>

              <div className="mt-3 flex items-center gap-2">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-[10px] font-semibold text-emerald-400">
                  Online
                </span>

              </div>

            </div>

          </div>

        </div>

      </SidebarContent>


      {/* ================= FOOTER ================= */}
      <SidebarFooter className="border-t border-white/10 p-3">

        {/* Profile */}
        <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]">

          <div className="flex items-center gap-3">

            {/* Avatar */}
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-300 ring-1 ring-white/10">

              <User size={17} />

              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-emerald-400" />

            </div>


            {/* User Info */}
            <div className="min-w-0 flex-1">

              <p className="truncate text-xs font-bold text-slate-200">
                Admin Utama
              </p>

              <p className="mt-0.5 truncate text-[10px] text-slate-600">
                Administrator
              </p>

            </div>


            {/* Logout */}
            <button
              title="Keluar"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-600 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400"
            >
              <LogOut size={15} />
            </button>

          </div>

        </div>


        {/* Copyright */}
        <div className="pt-3 text-center">

          <p className="text-[10px] font-medium text-slate-700">
            © {new Date().getFullYear()}
            {' '}
            <span className="font-bold text-slate-500">
              SantriApp
            </span>
          </p>

        </div>

      </SidebarFooter>

    </Sidebar>
  )
}

export default AppSidebar