import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar"
import { Outlet } from "react-router"

function AppLayout() {
  return (
    <SidebarProvider className="w-full min-h-screen">
      <AppSidebar />

      <main className="flex min-h-screen min-w-0 flex-1 flex-col bg-slate-950">
        <Navbar />

        <div className="w-full flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}

export default AppLayout