import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import {
  Zap,
  Shield,
  BarChart3,
  Terminal,
  CheckCircle,
  ArrowRight,
  Code2,
  Cpu,
  Globe,
  Database,
  Lock,
  ChevronDown,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Check,
  HelpCircle,
  Mail,
  Send,
  MessageSquare,
  Sparkles,
  Layers,
  Activity,
  Server,
  Cloud,
  X,
  Menu,
} from 'lucide-react'

export default function Home() {
  // ================= 1. STATE MANAGEMENT =================
  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Pricing State
  const [isYearly, setIsYearly] = useState(true)
  const [teamMembers, setTeamMembers] = useState(10)

  // Interactive Terminal State
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'sys', text: 'MyBrand CLI v2.4.0 Initialized.' },
    { type: 'sys', text: 'Type "help" to see available interactive commands.' },
  ])
  const terminalBottomRef = useRef(null)

  // Solutions Tab State
  const [activeSolution, setActiveSolution] = useState('cloud')

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  // Testimonials Carousel State
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  // ================= 2. DATA CONSTANTS =================
  const TESTIMONIALS = [
    {
      id: 1,
      quote:
        "MyBrand has completely transformed how our engineering team ships code. We cut our deployment pipeline times by over 65% in the first month alone.",
      author: "Alex Rivera",
      role: "CTO at TechFlow",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "The security features out of the box are unmatched. Being SOC2 compliant from day one saved us hundreds of hours of manual compliance auditing.",
      author: "Sarah Chen",
      role: "Lead Security Architect at FinSecure",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "The real-time analytics engine provided instant visibility into our microservices latency issues. I cannot imagine going back to our old setup.",
      author: "Marcus Vance",
      role: "VP of Product at ScaleUp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 5,
    },
  ]

  const FAQS = [
    {
      question: "How does the 14-day free trial work?",
      answer:
        "You get full access to all Enterprise features for 14 days. No credit card is required to sign up, and you can cancel or downgrade to the free tier at any time.",
    },
    {
      question: "Can I migrate my existing infrastructure to MyBrand?",
      answer:
        "Yes! We provide automated migration CLI scripts for AWS, GCP, and Azure workloads, along with 24/7 dedicated migration support for Pro and Enterprise plans.",
    },
    {
      question: "What is your uptime SLA guarantee?",
      answer:
        "We guarantee a 99.99% uptime SLA for all Pro and Enterprise tier customers, backed by financially enforceable credits if SLAs are breached.",
    },
    {
      question: "How does the per-seat team member pricing work?",
      answer:
        "You only pay for active team members. You can add or remove seats dynamically at any point during your billing cycle, and charges will be pro-rated instantly.",
    },
  ]

  // ================= 3. EFFECT HANDLERS =================
  // Auto Scroll Terminal
  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [terminalLogs])

  // Testimonials Auto Play
  useEffect(() => {
    let timer
    if (isAutoPlay) {
      timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
      }, 5000)
    }
    return () => clearInterval(timer)
  }, [isAutoPlay])

  // ================= 4. INTERACTIVE LOGIC =================
  // Terminal Command Parser
  const handleTerminalSubmit = (e) => {
    e.preventDefault()
    const cmd = terminalInput.trim().toLowerCase()
    if (!cmd) return

    const newLogs = [...terminalLogs, { type: 'user', text: `$ ${terminalInput}` }]

    switch (cmd) {
      case 'help':
        newLogs.push({
          type: 'sys',
          text: 'Available commands: help | deploy | status | logs | analytics | clear',
        })
        break
      case 'deploy':
        newLogs.push({ type: 'sys', text: '🚀 Triggering production deployment...' })
        newLogs.push({ type: 'sys', text: '✔ Building modern assets...' })
        newLogs.push({ type: 'sys', text: '✔ Deploying to global edge networks (350ms).' })
        newLogs.push({ type: 'success', text: '🎉 Deployment Live: https://mybrand.app/v2-live' })
        break
      case 'status':
        newLogs.push({ type: 'sys', text: 'SYSTEM STATUS: All Systems Operational 🟢' })
        newLogs.push({ type: 'sys', text: 'API Gateway: 12ms latency | Edge Nodes: 99.99%' })
        break
      case 'analytics':
        newLogs.push({ type: 'sys', text: '📊 Active Users: 42,891 | Requests/sec: 14,200' })
        break
      case 'clear':
        setTerminalLogs([])
        setTerminalInput('')
        return
      default:
        newLogs.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for a list of available commands.`,
        })
    }

    setTerminalLogs(newLogs)
    setTerminalInput('')
  }

  // Contact Form Submission
  const handleContactSubmit = (e) => {
    e.preventDefault()
    if (!contactForm.email || !contactForm.message) return
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setContactForm({ name: '', email: '', message: '' })
    }, 4000)
  }

  // Newsletter Submission
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterSubscribed(true)
    setTimeout(() => {
      setNewsletterSubscribed(false)
      setNewsletterEmail('')
    }, 4000)
  }

  // Dynamic Pricing Calculation
  const calculatePrice = (baseMonthly) => {
    const discounted = isYearly ? baseMonthly * 0.8 : baseMonthly
    const teamMultiplier = Math.max(1, Math.floor(teamMembers / 5))
    return Math.round(discounted * teamMultiplier)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">

      {/* ================= BACKGROUND AMBIANCE LIGHTS ================= */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      {/* ================= 1. NAVIGATION BAR ================= */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="text-2xl font-black bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2"
          >
            <Sparkles size={22} className="text-indigo-400 inline" />
            MyBrand<span className="text-indigo-500">.</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#terminal" className="hover:text-white transition-colors">CLI Terminal</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Desktop Auth CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/signin"
              className="text-sm text-slate-300 hover:text-white font-medium px-4 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-900/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-400 py-1">Features</a>
              <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-400 py-1">Solutions</a>
              <a href="#terminal" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-400 py-1">CLI Terminal</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-400 py-1">Pricing</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-400 py-1">FAQ</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-400 py-1">Contact</a>
            </div>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <Link
                to="/signin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-semibold rounded-xl border border-slate-800 bg-slate-950 text-slate-300"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-semibold rounded-xl bg-indigo-600 text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ================= 2. HERO SECTION ================= */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-indigo-400 mb-8 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold">Version 2.4 Official Release</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 flex items-center gap-1">
              Live Edge Cloud <ArrowRight size={12} />
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-[1.12]">
            Build Faster With Our <br />
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Platform
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The all-in-one developer workspace to build, scale, and manage your cloud-native applications effortlessly with unmatched latency and auto-scaling.
          </p>

          {/* Action CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/signup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="#terminal"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Terminal size={16} className="text-indigo-400" />
              <span>Try Interactive CLI</span>
            </a>
          </div>

          {/* Product Code Mockup */}
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-2.5 backdrop-blur-xl shadow-2xl shadow-indigo-950/40">
            <div className="rounded-xl border border-slate-800/80 bg-slate-950 p-5 sm:p-6 text-left">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-500">server.ts — MyBrand Runtime</div>
              </div>
              <pre className="text-xs sm:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-purple-400">import</span> &#123; <span className="text-sky-300">createCloudServer</span>, <span className="text-sky-300">edgeRouter</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">'@mybrand/core'</span>;{"\n\n"}
                  <span className="text-slate-500">// Initialize global cluster with auto-scaling</span>{"\n"}
                  <span className="text-purple-400">const</span> app = <span className="text-blue-400">createCloudServer</span>(&#123; region: <span className="text-emerald-400">'global-edge'</span> &#125;);{"\n"}
                  app.<span className="text-blue-400">use</span>(<span className="text-blue-400">edgeRouter</span>());{"\n\n"}
                  app.<span className="text-blue-400">listen</span>(3000, () =&gt; &#123;{"\n"}
                  &nbsp;&nbsp;console.<span className="text-blue-400">log</span>(<span className="text-emerald-400">'🚀 Server running across 320+ Edge Nodes'</span>);{"\n"}
                  &#125;);
                </code>
              </pre>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. STATS BANNER ================= */}
      <section className="py-12 border-y border-slate-800/80 bg-slate-900/40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-black text-white">99.99%</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Uptime SLA Guaranteed</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-indigo-400">&lt; 15ms</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Global Edge Latency</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-sky-400">10M+</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Daily API Requests</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-purple-400">50K+</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Active Developers</p>
          </div>
        </div>
      </section>

      {/* ================= 4. FEATURES SECTION ================= */}
      <section id="features" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Features Matrix</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">Everything You Need To Scale</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Powerful developer tools and cloud infrastructure designed to help engineering teams ship faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast Performance</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Optimized with V8 native bindings and multi-threaded edge execution for extreme low-latency response times.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Automatic HTTP/3 Protocol</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Smart Edge Caching</li>
              </ul>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-sky-600/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Grade Security</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                End-to-end TLS encryption, DDoS protection, and automated SOC2 type II compliance out of the box.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Zero-Trust Access Rules</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Automated Web Application Firewall</li>
              </ul>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Telemetry</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Deep visibility into CPU load, heap usage, active WebSocket connections, and distributed tracing logs.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Sub-second Alerting</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> OpenTelemetry Export Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. INTERACTIVE SOLUTIONS TAB ================= */}
      <section id="solutions" className="py-20 border-t border-slate-800/60 bg-slate-900/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Architecture Solutions</span>
            <h2 className="text-3xl font-bold mt-2">Tailored For Modern Workloads</h2>
          </div>

          {/* Solution Tabs Switcher */}
          <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveSolution('cloud')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeSolution === 'cloud'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              <Cloud size={16} /> Cloud-Native Edge
            </button>
            <button
              onClick={() => setActiveSolution('security')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeSolution === 'security'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              <Lock size={16} /> Zero-Trust Security
            </button>
            <button
              onClick={() => setActiveSolution('stream')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeSolution === 'stream'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              <Activity size={16} /> Real-Time Event Streaming
            </button>
          </div>

          {/* Solution Tab Content */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 grid md:grid-cols-2 gap-8 items-center">
            {activeSolution === 'cloud' && (
              <>
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-bold">
                    SOLUTION 01
                  </span>
                  <h3 className="text-2xl font-bold">Global Edge Micro-Runtimes</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Deploy backend logic instantly across hundreds of points of presence worldwide. Zero cold starts and dynamic route replication.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-400" /> Automatic DNS routing based on user proximity</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-400" /> Instant rollbacks with atomic versioning</li>
                  </ul>
                </div>
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 font-mono text-xs space-y-3">
                  <div className="text-indigo-400 font-bold">// Edge Node Routing Map</div>
                  <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
                    <span>Region: us-east-1 (Virginia)</span>
                    <span className="text-emerald-400">ACTIVE (4ms)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
                    <span>Region: ap-southeast-1 (Singapore)</span>
                    <span className="text-emerald-400">ACTIVE (11ms)</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Region: eu-central-1 (Frankfurt)</span>
                    <span className="text-emerald-400">ACTIVE (8ms)</span>
                  </div>
                </div>
              </>
            )}

            {activeSolution === 'security' && (
              <>
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-bold">
                    SOLUTION 02
                  </span>
                  <h3 className="text-2xl font-bold">Zero-Trust Perimeter</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Safeguard every API call with mandatory Mutual TLS (mTLS) authentication and fine-grained role authorization policies.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-sky-400" /> Automated SSL certificate rotation</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-sky-400" /> Encrypted secrets manager with audit logs</li>
                  </ul>
                </div>
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 font-mono text-xs space-y-3">
                  <div className="text-sky-400 font-bold">// Security Audit Status</div>
                  <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
                    <span>mTLS Encryption:</span>
                    <span className="text-emerald-400">ENFORCED</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
                    <span>SOC2 Compliance:</span>
                    <span className="text-emerald-400">PASSED</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>DDoS Mitigation:</span>
                    <span className="text-emerald-400">PROTECTED</span>
                  </div>
                </div>
              </>
            )}

            {activeSolution === 'stream' && (
              <>
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold">
                    SOLUTION 03
                  </span>
                  <h3 className="text-2xl font-bold">Event-Driven Streaming</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Process millions of concurrent WebSocket and Server-Sent Events (SSE) channels with built-in message broker queues.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-purple-400" /> Sub-10ms pub/sub delivery latency</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-purple-400" /> Automatic consumer group rebalancing</li>
                  </ul>
                </div>
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 font-mono text-xs space-y-3">
                  <div className="text-purple-400 font-bold">// Event Queue Stream</div>
                  <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
                    <span>Throughput:</span>
                    <span className="text-purple-300">140,000 msg/sec</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
                    <span>Queue Backlog:</span>
                    <span className="text-emerald-400">0 msgs</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Active Sockets:</span>
                    <span className="text-purple-300">82,410 connected</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ================= 6. INTERACTIVE CLI TERMINAL SECTION ================= */}
      <section id="terminal" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Interactive Playground</span>
            <h2 className="text-3xl font-bold mt-2">Test Drive Our CLI Right Here</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Type <code className="text-indigo-400 font-mono bg-slate-900 px-1.5 py-0.5 rounded">help</code>, <code className="text-indigo-400 font-mono bg-slate-900 px-1.5 py-0.5 rounded">deploy</code>, or <code className="text-indigo-400 font-mono bg-slate-900 px-1.5 py-0.5 rounded">status</code> to test live commands.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden font-mono text-xs">
            {/* Terminal Top Bar */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-slate-400 text-[11px] ml-2 font-sans font-medium">bash — mybrand-cli</span>
              </div>
              <button
                onClick={() => setTerminalLogs([])}
                className="text-[10px] text-slate-500 hover:text-slate-300 transition-colors uppercase font-sans font-bold"
              >
                Clear Screen
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 h-72 overflow-y-auto space-y-2 text-slate-300">
              {terminalLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`${
                    log.type === 'user'
                      ? 'text-indigo-400 font-bold'
                      : log.type === 'success'
                      ? 'text-emerald-400'
                      : log.type === 'error'
                      ? 'text-rose-400'
                      : 'text-slate-400'
                  }`}
                >
                  {log.text}
                </div>
              ))}
              <div ref={terminalBottomRef} />
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleTerminalSubmit} className="border-t border-slate-800/80 bg-slate-900/50 p-3 flex items-center gap-2">
              <span className="text-emerald-400 font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type command here..."
                className="w-full bg-transparent text-white focus:outline-none font-mono text-xs"
              />
              <button
                type="submit"
                className="px-3 py-1 rounded bg-indigo-600 text-white font-sans font-semibold text-[10px] hover:bg-indigo-500 transition-all"
              >
                Run
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= 7. DYNAMIC PRICING SECTION ================= */}
      <section id="pricing" className="py-24 border-t border-slate-800/60 bg-slate-900/20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Simple & Transparent</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">Plans For Teams Of All Sizes</h2>
            
            {/* Billing Toggle & Team Slider */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
              {/* Yearly/Monthly Switch */}
              <div className="flex items-center gap-3 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    !isYearly ? 'bg-indigo-600 text-white' : 'text-slate-400'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isYearly ? 'bg-indigo-600 text-white' : 'text-slate-400'
                  }`}
                >
                  <span>Yearly</span>
                  <span className="bg-emerald-500 text-slate-950 px-1.5 py-0.5 rounded text-[9px] font-bold">20% OFF</span>
                </button>
              </div>

              {/* Slider Team Members */}
              <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-2xl border border-slate-800 text-xs">
                <Users size={14} className="text-indigo-400" />
                <span className="text-slate-400 font-medium">Seats: <strong className="text-white">{teamMembers}</strong></span>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={teamMembers}
                  onChange={(e) => setTeamMembers(parseInt(e.target.value))}
                  className="w-24 accent-indigo-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-6 relative">
              <div>
                <h3 className="text-lg font-bold">Starter</h3>
                <p className="text-slate-400 text-xs mt-1">Perfect for hobbyists & side projects.</p>
              </div>
              <div>
                <span className="text-4xl font-black">${calculatePrice(19)}</span>
                <span className="text-slate-400 text-xs"> / month</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> Up to 50,000 monthly requests</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> 3 Edge Server Locations</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> Community Discord Support</li>
              </ul>
              <Link
                to="/signup"
                className="block w-full text-center py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
              >
                Start Starter Trial
              </Link>
            </div>

            {/* Pro Plan (Highlighted) */}
            <div className="bg-slate-900 border-2 border-indigo-500 rounded-3xl p-8 space-y-6 relative shadow-2xl shadow-indigo-950/50">
              <span className="absolute -top-3.5 right-8 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                MOST POPULAR
              </span>
              <div>
                <h3 className="text-lg font-bold">Pro Scale</h3>
                <p className="text-slate-400 text-xs mt-1">For growing teams requiring speed & scale.</p>
              </div>
              <div>
                <span className="text-4xl font-black text-indigo-400">${calculatePrice(79)}</span>
                <span className="text-slate-400 text-xs"> / month</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> Unlimited API Requests</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> All 320+ Global Edge Locations</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> Real-time Analytics Dashboard</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> 24/7 Priority Support SLA</li>
              </ul>
              <Link
                to="/signup"
                className="block w-full text-center py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-lg shadow-indigo-600/30"
              >
                Get Started Pro
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-6 relative">
              <div>
                <h3 className="text-lg font-bold">Enterprise</h3>
                <p className="text-slate-400 text-xs mt-1">Dedicated cloud infra & custom SLA.</p>
              </div>
              <div>
                <span className="text-4xl font-black">${calculatePrice(299)}</span>
                <span className="text-slate-400 text-xs"> / month</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> Custom Dedicated Clusters</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> Custom SOC2 Compliance Audits</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-indigo-400" /> Dedicated Technical Account Manager</li>
              </ul>
              <a
                href="#contact"
                className="block w-full text-center py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. LIVE TESTIMONIALS CAROUSEL ================= */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Wall of Love</span>
            <h2 className="text-3xl font-bold mt-2">Trusted By World Class Developers</h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 relative">
            <div className="flex items-center gap-1 text-amber-400 mb-6">
              {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="text-base sm:text-xl text-slate-200 font-medium leading-relaxed italic mb-8">
              "{TESTIMONIALS[currentTestimonial].quote}"
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <img
                  src={TESTIMONIALS[currentTestimonial].avatar}
                  alt={TESTIMONIALS[currentTestimonial].author}
                  className="w-11 h-11 rounded-full object-cover border border-indigo-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{TESTIMONIALS[currentTestimonial].author}</h4>
                  <p className="text-xs text-slate-400">{TESTIMONIALS[currentTestimonial].role}</p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="p-2 rounded-xl border border-slate-800 bg-slate-950 text-slate-400 hover:text-white"
                >
                  {isAutoPlay ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button
                  onClick={() =>
                    setCurrentTestimonial(
                      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                    )
                  }
                  className="p-2 rounded-xl border border-slate-800 bg-slate-950 text-slate-400 hover:text-white"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() =>
                    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
                  }
                  className="p-2 rounded-xl border border-slate-800 bg-slate-950 text-slate-400 hover:text-white"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. INTERACTIVE FAQ ACCORDION ================= */}
      <section id="faq" className="py-20 border-t border-slate-800/60 bg-slate-900/30 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Got Questions?</span>
            <h2 className="text-3xl font-bold mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full text-left p-5 text-sm font-bold flex items-center justify-between text-slate-200 hover:text-white"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform ${
                      openFaqIndex === idx ? 'rotate-180 text-indigo-400' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="p-5 pt-0 text-xs text-slate-400 leading-relaxed border-t border-slate-800/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 10. CONTACT FORM SECTION ================= */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Get In Touch</span>
              <h2 className="text-3xl font-extrabold">Need Custom Enterprise Help?</h2>
              <p className="text-slate-400 text-xs leading-relaxed">
                Send our engineering solutions team a message and we'll reply within 2 business hours.
              </p>

              <div className="pt-4 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-indigo-400" />
                  <span>support@mybrand.app</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare size={16} className="text-indigo-400" />
                  <span>24/7 Live Agent Chat</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleContactSubmit} className="space-y-3 text-xs">
              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                  <CheckCircle size={32} className="text-emerald-400 mx-auto" />
                  <p className="font-bold text-white text-sm">Message Sent Successfully!</p>
                  <p className="text-slate-400 text-xs">We will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block mb-1 text-slate-300 font-semibold">Your Name</label>
                    <input
                      type="text"
                      placeholder="Alex Rivera"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-slate-300 font-semibold">Email Address</label>
                    <input
                      type="email"
                      placeholder="alex@techflow.io"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-slate-300 font-semibold">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your infrastructure needs..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/30"
                  >
                    <Send size={14} /> Send Message
                  </button>
                </>
              )}
            </form>

          </div>
        </div>
      </section>

      {/* ================= 11. NEWSLETTER & CTA BANNER ================= */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-950/60 via-slate-900 to-indigo-950/60 border border-indigo-500/30 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Subscribe To Developer Updates</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm mb-8">
            Get early access to release notes, architectural benchmarks, and cloud engineering tips.
          </p>

          {newsletterSubscribed ? (
            <div className="p-4 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold text-xs inline-block">
              🎉 Thanks for subscribing! Check your inbox for confirmation.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="developer@company.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-indigo-600/30"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ================= 12. FOOTER ================= */}
      <footer className="border-t border-slate-800/80 py-12 bg-slate-950 relative z-10 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 space-y-3">
            <Link to="/" className="text-lg font-black text-white flex items-center gap-1">
              <Sparkles size={16} className="text-indigo-400" />
              MyBrand<span className="text-indigo-500">.</span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              The next-generation cloud infrastructure platform built for modern development teams.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px]">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-slate-300">Features</a></li>
              <li><a href="#terminal" className="hover:text-slate-300">CLI Tools</a></li>
              <li><a href="#pricing" className="hover:text-slate-300">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px]">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-slate-300">Documentation</a></li>
              <li><a href="#solutions" className="hover:text-slate-300">API Reference</a></li>
              <li><a href="#status" className="hover:text-slate-300">System Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="hover:text-slate-300">About Us</a></li>
              <li><a href="#contact" className="hover:text-slate-300">Careers</a></li>
              <li><a href="#contact" className="hover:text-slate-300">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} MyBrand, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Discord</a>
          </div>
        </div>
      </footer>

    </div>
  )
}