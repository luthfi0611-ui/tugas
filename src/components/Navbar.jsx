import { SidebarTrigger } from "./ui/sidebar"
import { LayoutDashboard } from "lucide-react"

function Navbar() {
  return (
    <nav className="flex h-14 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />

        <div className="flex items-center gap-2">
          <LayoutDashboard size={18} className="text-slate-700" />

          <span className="text-base font-bold text-slate-900">
            santriapp
          </span>
        </div>
      </div>

      <span className="text-sm text-slate-500">
        Admin
      </span>
    </nav>
  )
}

export default Navbar