import { Link } from 'react-router'

function SignUp() {
  return (
    <div className="min-h-screen flex text-white bg-slate-950">
      
      {/* SISI KIRI: Gambar (Tampil di desktop / screen lg ke atas) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
          alt="Sign Up Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay & Text Pendukung */}
        <div className="relative z-10 p-12 flex flex-col justify-between w-full h-full bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40">
          <div>
            <h2 className="text-2xl font-bold tracking-wide">BrandLogo</h2>
          </div>
          <div>
            <blockquote className="text-2xl font-semibold mb-4 leading-relaxed">
              "Mulai perjalanan Anda bersama kami dan nikmati kemudahan pengelolaan fitur dalam satu tempat."
            </blockquote>
            <p className="text-slate-400 text-sm">Gratis pendaftaran, tanpa kartu kredit.</p>
          </div>
        </div>
      </div>

      {/* SISI KANAN: Form Sign Up */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-8 text-sm text-slate-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-slate-400">Join us today! Enter your details below.</p>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-300">
                Username
              </label>
              <input
                type="text"
                placeholder="Choose a username"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-300">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 font-semibold text-white transition-colors shadow-lg shadow-indigo-600/20 mt-2"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-slate-400 mt-8">
            Already have an account?{' '}
            <Link
              to="/signin"
              className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Sign In
            </Link>
          </p>

        </div>
      </div>

    </div>
  )
}

export default SignUp