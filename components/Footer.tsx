import { Logo } from "./Navbar";
import { SOCIALS, WHATSAPP } from "./links";

const QUICK = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-blue-400 px-8 py-14 text-center text-white sm:px-14">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Tem um sistema para tirar do papel?</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/85">Conte a ideia e respondemos com um plano de entrega em fases.</p>
          <a href={WHATSAPP} className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-medium text-brand transition hover:scale-105 active:scale-95">
            Iniciar projeto
          </a>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">Systems that don&rsquo;t fail.</p>
          </div>
          <nav aria-label="Links rápidos">
            <p className="font-medium">Links rápidos</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {QUICK.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-ink">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-medium">Perfis profissionais</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-14 border-t border-line pt-6 text-sm text-muted">© {new Date().getFullYear()} VelDev. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
