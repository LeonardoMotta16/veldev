import { Boxes, Network, ShoppingCart } from "lucide-react";

const SERVICES = [
  {
    icon: Boxes,
    title: "Sistemas e SaaS",
    text: "Plataformas sob medida, escaláveis e seguras: multi-tenant, controle de acesso por perfil e painéis financeiros.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerces de alta performance",
    text: "Lojas rápidas, com checkout via PIX e cartão, integração com gateways de pagamento e painel administrativo próprio.",
  },
  {
    icon: Network,
    title: "Arquitetura e APIs",
    text: "APIs bem desenhadas em Django e Spring Boot, com autenticação, testes e base pronta para microsserviços.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">O que a VelDev constrói</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-line bg-bg p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/50">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <Icon size={22} />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
