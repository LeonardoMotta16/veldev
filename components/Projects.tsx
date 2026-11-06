import { image, img } from "framer-motion/client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    name: "Pratas da Ari",
    image: "/projetos/ari-pratas.png",
    kind: "E-commerce de joalheria",
    text: "Loja completa com carrinho, cupons, checkout com Mercado Pago (PIX e cartão), avaliações e painel administrativo.Por ser um projeto de mostruario o link não é com o nome do site",
    stack: ["Django", "SQLite", "Mercado Pago"],
    gradient: "from-blue-600 to-sky-300",
    featured: true,
    href: "https://leonardomotta1.pythonanywhere.com/",
  },
  /*{
    name: "BarberFlow",
    kind: "SaaS de agendamento multi-tenant",
    text: "Agenda para barbearias com perfis de acesso e bloqueio de horários sobrepostos direto no banco.",
    stack: ["Django REST", "JWT", "Celery"],
    gradient: "from-indigo-600 to-blue-300",
    href: "#",
  },*/
  {
    name: "RRG Arts",
    image: "/projetos/RRG-Arts.png",
    kind: "Portfólio de arte digital",
    text: "Portfólio para designer esportivo, com galeria em nuvem e tema claro/escuro.",
    stack: ["JavaScript", "Cloudinary", "Netlify"],
    gradient: "from-cyan-500 to-blue-200",
    href: "https://rrgartes.netlify.app",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">Projetos no ar</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 ${p.featured ? "md:col-span-2 md:flex-row" : ""}`}
            >
              <div className={`relative min-h-52 overflow-hidden bg-gradient-to-br ${p.gradient} ${p.featured ? "md:w-2/5" : ""}`}>
  {p.image && (
    <>
      <Image
        src={p.image}
        alt={`Captura de tela do projeto ${p.name}`}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </>
  )}
  <span className="absolute bottom-4 left-5 font-display text-3xl font-bold text-white/90 transition-transform duration-300 group-hover:translate-x-1">
    {p.name}
  </span>
</div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-sm text-brand">{p.kind}</p>
                <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-muted">{s}</li>
                  ))}
                </ul>
                <span className="mt-6 flex items-center gap-1 pt-1 text-sm font-medium transition-colors group-hover:text-brand md:mt-auto">
                  Ver case <ArrowUpRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
