import { Link } from 'react-router'

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            MyBrand<span className="text-indigo-500">.</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/signin"
              className="text-sm text-slate-300 hover:text-white font-medium px-4 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-indigo-400 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Version 2.0 is officially live!
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.15]">
            Build faster with our <br />
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Modern Platform
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The all-in-one developer workspace to build, scale, and manage your applications effortlessly with unmatched performance.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/signup"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
            >
              Start Free Trial
            </Link>
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold transition-all"
            >
              Explore Features
            </a>
          </div>

          {/* Product Preview Mockup */}
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-2 backdrop-blur-xl shadow-2xl shadow-indigo-950/50">
            <div className="rounded-xl border border-slate-800/80 bg-slate-950 p-6 text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <pre className="text-xs sm:text-sm font-mono text-slate-300 overflow-x-auto">
                <code>
                  <span className="text-purple-400">const</span> app = <span className="text-blue-400">createApp</span>();{"\n"}
                  app.<span className="text-blue-400">use</span>(authPlugin);{"\n"}
                  app.<span className="text-blue-400">listen</span>(3000, () =&gt; &#123;{"\n"}
                  &nbsp;&nbsp;console.<span className="text-blue-400">log</span>(<span className="text-emerald-400">'🚀 Server running on port 3000'</span>);{"\n"}
                  &#125;);
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 border-t border-slate-800/60 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-slate-400">
              Powerful tools and infrastructure designed to help developers build better apps in less time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl mb-5">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Optimized for extreme speed and low latency, giving your users a seamless experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl mb-5">
                🔒
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure by Default</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Enterprise-grade security built directly into the core, protecting your data 24/7.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl mb-5">
                📊
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Monitor performance, track metrics, and gather deep insights in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-900/40 via-slate-900 to-indigo-900/40 border border-indigo-500/30 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Join thousands of developers and teams already building the future with our platform.
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
          >
            Create Your Account
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} MyBrand, Inc. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default Home  