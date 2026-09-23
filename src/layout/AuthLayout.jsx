import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Outlet />
    </div>
  )
}

export default AuthLayout