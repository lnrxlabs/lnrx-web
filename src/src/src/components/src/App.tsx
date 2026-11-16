import React from "react";
import { ArrowRight, Factory, Leaf, ShieldCheck, Zap } from "lucide-react";
import { ContactModal } from "./components/benchmark-modal";

const pillars = [
  {
    icon: Zap,
    tag: "Unmatched Velocity",
    title: "Rapid Field Deployment",
    body: "Non-invasive, read-only deployment across brownfield industrial assets without disrupting existing plant operations.",
  },
  {
    icon: ShieldCheck,
    tag: "Compliance Shield",
    title: "Cross-Border Compliance Readiness",
    body: "Supports international exporters with primary, audit-ready operational telemetry for carbon border reporting.",
  },
  {
    icon: Factory,
    tag: "Institutional Safety",
    title: "Zero-Risk Operational Integrity",
    body: "Non-invasive brownfield integration designed for high-stress manufacturing without modifying existing control systems.",
  },
  {
    icon: Leaf,
    tag: "Measurable Decarbonization",
    title: "Process & Energy Visibility",
    body: "Provides deterministic visibility into fuel and thermal performance across industrial process infrastructure.",
  },
];

const nodes = [
  { label: "NODE 01", metric: "412.8", unit: "kg/h", status: "ACTIVE" },
  { label: "NODE 02", metric: "18.4", unit: "GJ/h", status: "SYNCED" },
  { label: "NODE 03", metric: "2.31", unit: "m³/min", status: "VERIFIED" },
];

function Pill({
  children,
  outline,
  href = "#cta",
}: {
  children: React.ReactNode;
  outline?: boolean;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={
        outline
          ? "inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-white/5"
          : "inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:opacity-90"
      }
    >
      {children}
    </a>
  );
}

function LiveStreamCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b111e]/90 p-6 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-slate-400">
          Live Data Stream
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          LIVE 12ms
        </span>
      </div>

      <div>
        {nodes.map((n) => (
          <div key={n.label} className="border-b border-white/10 py-5 last:border-b-0 last:pb-0">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{n.label}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {n.status}
              </span>
            </div>
            <p className="mt-2 font-mono text-3xl font-semibold tracking-tight text-white tabular-nums">
              {n.metric} <span className="text-base font-normal text-slate-400">{n.unit}</span>
            </p>
            <div className="sweep-line mt-3" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05080f] text-slate-100">
      <div className="mesh pointer-events-none absolute inset-0" />
      <div className="relative">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#05080f]/80 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2.5" aria-label="LNRX Labs home">
              <span className="text-xl font-bold tracking-[0.22em] text-white">LNRX</span>
              <span className="hidden border-l border-white/15 pl-2.5 text-sm font-medium tracking-tight text-slate-400 sm:block">
                Labs
              </span>
            </a>
            <div className="hidden gap-8 text-sm text-slate-400 md:flex">
              <a href="#solutions" className="transition hover:text-white">
                Solutions
              </a>
              <a href="#impact" className="transition hover:text-white">
                Enterprise Impact
              </a>
              <a href="#solutions" className="transition hover:text-white">
                Compliance Shield
              </a>
            </div>
            <ContactModal>Request Partner Access</ContactModal>
          </nav>
        </header>

        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300">
              <span className="text-emerald-400">•</span>&nbsp;Veracity Integration Hub&nbsp;
              <span className="text-cyan-400">•</span>&nbsp;Hardware-Anchored Telemetry
            </span>
            <h1 className="text-gradient mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Deterministic Telemetry for Industrial Infrastructure
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-400">
              LNRX Labs builds hardware-anchored telemetry infrastructure to deliver deterministic, audit-ready operational data for heavy industry.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill outline href="#solutions">
                Explore Infrastructure
              </Pill>
              <ContactModal>
                Request Partner Access <ArrowRight className="h-4 w-4" />
              </ContactModal>
            </div>
          </div>
          <LiveStreamCard />
        </section>

        <section id="solutions" className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-medium text-emerald-400">Why Global Enterprise Chooses LNRX</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Built for the plant floor. Trusted by the auditor.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, tag, title, body }) => (
              <div key={title} className="glass p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-wider text-cyan-400">{tag}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="impact" className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-medium text-emerald-400">Regulatory Assurance</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Compliance Shield &amp; Audit Readiness
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="glass p-8 md:col-span-3">
              <ShieldCheck className="h-6 w-6 text-cyan-400" />
              <p className="text-gradient mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                Audit-Ready Primary Telemetry
              </p>
            </div>
          </div>
        </section>

        <section id="cta" className="mx-auto max-w-7xl px-6 py-20">
          <div className="glass relative overflow-hidden p-12 text-center md:p-16">
            <div className="mesh absolute inset-0 opacity-70" />
            <div className="relative">
              <h2 className="text-gradient mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                Ready to Shield Your Supply Chain with Deterministic Veracity?
              </h2>
              <div className="mt-8">
                <ContactModal>
                  Contact Us <ArrowRight className="h-4 w-4" />
                </ContactModal>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-[0.22em] text-white">LNRX</span>
              <span className="text-xs text-slate-400">Labs</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              © 2026 LNRX Labs Pte. Ltd. All rights reserved. Technology protected under multiple international patent pending filings.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
