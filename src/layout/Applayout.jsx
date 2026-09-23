import AppSidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router'
import { TooltipProvider } from "@/components/ui/tooltip"

function AppLayout() {
  return (
     <TooltipProvider>
    <SidebarProvider className="w-full min-h-screen">
      <AppSidebar />

      <main className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Navbar />

        <div className="w-full flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
    </TooltipProvider>
  )
}

export default AppLayout