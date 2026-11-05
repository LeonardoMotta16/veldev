"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP } from "./links";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Logo() {
  return (
    <a href="#inicio" className="group flex items-center gap-2.5" aria-label="VelDev, ir para o início">
<Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 rounded-xl transition-transform duration-500 group-hover:scale-110"/>
      <span className="font-display text-xl font-semibold tracking-tight">VelDev</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP}
          className="hidden rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition hover:brightness-110 active:scale-95 md:inline-block"
        >
          Iniciar projeto
        </a>
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-line md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-line bg-bg px-5 pb-5 md:hidden">
          <ul className="flex flex-col py-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-ink">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href={WHATSAPP} className="block rounded-full bg-brand py-3 text-center font-medium text-white">Iniciar projeto</a>
        </div>
      )}
    </header>
  );
}
