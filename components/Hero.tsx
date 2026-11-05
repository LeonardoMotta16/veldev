"use client";
import { motion } from "framer-motion";
import { WHATSAPP } from "./links";

const STACK = [
  { name: "Next.js", role: "Interfaces rápidas e SEO" },
  { name: "Django", role: "APIs e painéis de gestão" },
  { name: "Spring Boot", role: "Back-ends robustos" },
];

const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12 }}
        className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-20 lg:grid-cols-[1.25fr_1fr] lg:pt-28"
      >
        <div>
          <motion.h1 variants={item} className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
            Systems that don&rsquo;t fail.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Desenvolvimento web full-stack, SaaS sob medida e e-commerces de alta performance. Construímos com Next.js,
            Django e Spring Boot para o seu sistema continuar no ar quando o negócio cresce.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a href="#projetos" className="rounded-full bg-brand px-7 py-3.5 font-medium text-white shadow-lg shadow-brand/25 transition hover:brightness-110 active:scale-95">
              Ver projetos
            </a>
            <a href={WHATSAPP} className="rounded-full border border-line bg-bg px-7 py-3.5 font-medium transition hover:border-brand hover:text-brand active:scale-95">
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur">
          <p className="text-sm text-muted">Stack em produção</p>
          <ul className="mt-4 divide-y divide-line">
            {STACK.map((s) => (
              <li key={s.name} className="flex items-center justify-between py-4">
                <div>
                  <p className="font-display text-lg font-semibold">{s.name}</p>
                  <p className="text-sm text-muted">{s.role}</p>
                </div>
                <span className="flex items-center gap-2 text-sm text-muted">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  online
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
