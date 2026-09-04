import { useContext } from 'react'
import NameUserContext from './NameUserContext'

function ProfileDetail() {
  const { name, setName } = useContext(NameUserContext)

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-600/20">
              P
            </div>

            <div>
              <p className="text-slate-400 text-sm">
                Welcome back
              </p>

              <h1 className="text-white text-2xl font-bold">
                Profile
              </h1>
            </div>
          </div>

          <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800">
            <p className="text-slate-400 text-sm mb-2">
              Nama pengguna
            </p>

            <h2 className="text-white text-2xl font-semibold">
              {name}
            </h2>
          </div>

          <button
            onClick={() => setName('ali')}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold py-3.5 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-600/20"
          >
            Ganti Nama
          </button>

        </div>

        <p className="text-center text-slate-600 text-sm mt-6">
          Profile Dashboard
        </p>

      </div>

    </div>
  )
}

export default ProfileDetail