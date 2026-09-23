import useAuthStore from "../../learnZustand/Auth Store/useAuthStore"

function Profile() {
  const { username, role } = useAuthStore()

  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold">Profile</h1>

        <div className="mt-8 space-y-5">
          <div>
            <p className="text-sm text-slate-400">Username</p>
            <p className="mt-1 text-lg font-semibold">{username}</p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Role</p>
            <p className="mt-1 text-lg font-semibold capitalize">{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile