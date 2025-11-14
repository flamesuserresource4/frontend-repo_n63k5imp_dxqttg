import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Globe2, ShieldCheck, Wallet, RefreshCcw, Zap, LineChart, Users } from 'lucide-react'

function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/30 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 shadow-md shadow-indigo-500/30 grid place-items-center">
            <span className="text-white font-bold">P</span>
          </div>
          <div>
            <p className="text-xl font-semibold tracking-tight text-slate-900">PRAC</p>
            <p className="hidden sm:block text-[11px] uppercase tracking-wider text-slate-600">Pay • Receive • Convert</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a className="hover:text-slate-900 transition" href="#features">Features</a>
          <a className="hover:text-slate-900 transition" href="#rates">Rates</a>
          <a className="hover:text-slate-900 transition" href="#use-cases">Use cases</a>
          <a className="hover:text-slate-900 transition" href="#security">Security</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-white/60 transition">Log in</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition shadow">
            Get started <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 ring-1 ring-black/5 text-xs text-slate-700 mb-5">
              <Zap size={14} className="text-amber-500" /> Real‑time FX with transparent rates
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
              Borderless money made simple
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed max-w-xl">
              PRAC unifies sending, receiving and converting money into one secure, global wallet. Instant transfers, live FX, and transparent pricing—built for a modern, international life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-lg shadow-slate-900/10">
                Create your wallet <ArrowRight size={18} />
              </button>
              <a href="#features" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/70 hover:bg-white/90 transition ring-1 ring-black/5 text-slate-800">
                Explore features
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
              <div className="rounded-xl bg-white/70 ring-1 ring-black/5 p-4">
                <dt className="text-xs text-slate-600">Transfer speed</dt>
                <dd className="text-lg font-semibold text-slate-900">Instant</dd>
              </div>
              <div className="rounded-xl bg-white/70 ring-1 ring-black/5 p-4">
                <dt className="text-xs text-slate-600">Currencies</dt>
                <dd className="text-lg font-semibold text-slate-900">50+ wallets</dd>
              </div>
              <div className="rounded-xl bg-white/70 ring-1 ring-black/5 p-4">
                <dt className="text-xs text-slate-600">Fees</dt>
                <dd className="text-lg font-semibold text-slate-900">No hidden</dd>
              </div>
            </dl>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-purple-500/10" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute -inset-x-16 bottom-10 h-40 bg-gradient-to-t from-white to-transparent opacity-90" />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl bg-white/70 ring-1 ring-black/5 p-6 hover:shadow-xl transition relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-indigo-50/60 opacity-0 group-hover:opacity-100 transition" />
      <div className="relative flex items-start gap-4">
        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white grid place-items-center shadow">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-slate-700 mt-1 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function Features() {
  const items = [
    { icon: Users, title: 'Instant PRAC‑to‑PRAC', desc: 'Send and receive money worldwide in seconds with zero friction between PRAC users.' },
    { icon: RefreshCcw, title: 'Real‑time conversion', desc: 'Live FX rates with full price transparency. Convert only what you need—no hidden spreads.' },
    { icon: Wallet, title: 'Multi‑currency wallet', desc: 'Hold, manage, and allocate balances across 50+ currencies from one global wallet.' },
    { icon: ShieldCheck, title: 'Security by design', desc: 'Encryption, fraud detection, and dispute management keep your funds protected 24/7.' },
    { icon: Globe2, title: 'Truly borderless', desc: 'Built for freelancers, travelers, remote workers and businesses operating across borders.' },
    { icon: LineChart, title: 'Track in real time', desc: 'Instant notifications and live transaction timelines for complete peace of mind.' },
  ]

  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">One wallet. Every border.</h2>
          <p className="mt-4 text-slate-700">Move money at the speed of the internet with a platform that’s faster than banks, cheaper than exchange kiosks, and simpler than multiple accounts.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <FeatureCard key={i} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const cases = [
    {
      title: 'Freelancers',
      desc: 'Invoice clients globally, get paid in USD/EUR/GBP and convert to your local currency instantly.',
    },
    {
      title: 'Travelers',
      desc: 'Convert ahead of your trip at fair rates and pay like a local the moment you land.',
    },
    {
      title: 'Remote workers',
      desc: 'Receive salaries from foreign employers and withdraw with minimal fees.',
    },
    {
      title: 'Businesses',
      desc: 'Pay suppliers worldwide at low cost and track every transaction in real time.',
    },
  ]

  return (
    <section id="use-cases" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-8 sm:p-12 ring-1 ring-white/10 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_100%_-10%,rgba(99,102,241,.25),transparent)]" />
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cases.map((c, i) => (
              <div key={i} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <h3 className="font-semibold text-white/90">{c.title}</h3>
                <p className="text-sm text-white/75 mt-2 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-xs">No hidden fees</span>
            <span className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-xs">Live FX</span>
            <span className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-xs">Instant transfers</span>
            <span className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-xs">Dispute protection</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Rates() {
  return (
    <section id="rates" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Real‑time rates. Radical transparency.</h2>
            <p className="mt-4 text-slate-700">See the rate before you convert. We show the live mid‑market price and a simple, upfront fee. That’s it—no opaque spreads, no surprises.</p>
            <ul className="mt-6 space-y-2 text-slate-700 text-sm">
              <li>• Live mid‑market pricing</li>
              <li>• Clear fee breakdown</li>
              <li>• Convert only what you need</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/70 ring-1 ring-black/5 p-6">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-50">
                <p className="text-slate-600">Example</p>
                <p className="text-slate-900 font-semibold mt-1">Convert 1,000 USD → EUR</p>
                <p className="text-slate-700 mt-2">You’ll see the exact rate, fee, and what arrives. Nothing hidden.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50">
                <p className="text-slate-600">Speed</p>
                <p className="text-slate-900 font-semibold mt-1">Instant between PRAC users</p>
                <p className="text-slate-700 mt-2">Bank payouts follow local rails for fast settlement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Security() {
  return (
    <section id="security" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl ring-1 ring-black/5 bg-white/70 p-8 sm:p-12 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Security, compliance, trust.</h2>
            <p className="mt-4 text-slate-700">Every transfer is protected with encryption, rigorous monitoring, and layered fraud prevention. Dispute management gives you confidence when something needs a second look.</p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-700">
              <span className="px-3 py-1 rounded-full bg-slate-100">Encryption</span>
              <span className="px-3 py-1 rounded-full bg-slate-100">Fraud detection</span>
              <span className="px-3 py-1 rounded-full bg-slate-100">Dispute management</span>
              <span className="px-3 py-1 rounded-full bg-slate-100">Global KYC/AML</span>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 p-[1px]">
            <div className="rounded-2xl bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center"><ShieldCheck size={20} /></div>
                <div>
                  <p className="font-semibold text-slate-900">Protected transfers</p>
                  <p className="text-sm text-slate-700">Every transaction is verified and encrypted end‑to‑end.</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center"><Globe2 size={20} /></div>
                <div>
                  <p className="font-semibold text-slate-900">Global coverage</p>
                  <p className="text-sm text-slate-700">Built for cross‑border use with local rails where available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} PRAC. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-slate-700">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="/test" className="hover:text-slate-900">System check</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <Hero />
      <Features />
      <UseCases />
      <Rates />
      <Security />
      <Footer />
    </div>
  )
}
