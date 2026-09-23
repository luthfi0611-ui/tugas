import { Outlet } from 'react-router'

function GuestLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
        <h1 className="text-xl font-bold">
          SantriApp
        </h1>

        <div className="flex gap-3">
          <a
            href="/signin"
            className="px-4 py-2 rounded-lg hover:bg-slate-800 transition"
          >
            Sign In
          </a>

          <a
            href="/signup"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Sign Up
          </a>
        </div>
      </nav>

      <Outlet />
    </div>
  )
}

export default GuestLayout