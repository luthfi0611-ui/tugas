import { Outlet } from "react-router"

function UserLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="flex h-16 items-center border-b border-slate-800 bg-slate-900 px-6">
        <h1 className="text-xl font-bold">
          User<span className="text-indigo-500">Panel</span>
        </h1>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default UserLayout