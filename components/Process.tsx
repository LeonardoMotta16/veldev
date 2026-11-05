const STEPS = [
  { title: "Planejamento", text: "Entendemos o negócio, definimos o escopo e desenhamos a arquitetura antes de escrever a primeira linha." },
  { title: "Desenvolvimento em fases", text: "Entregas curtas e funcionais. Você acompanha cada etapa e ajusta o rumo com o sistema já rodando." },
  { title: "Testes rigorosos", text: "Suíte de testes automatizados, revisão de segurança e validação dos fluxos críticos, como o pagamento." },
  { title: "Deploy e evolução", text: "Publicação em produção, monitoramento e suporte para o sistema crescer sem quebrar." },
];

export default function Process() {
  return (
    <section id="sobre" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">Como entregamos</h2>
        <ol className="relative mt-14 space-y-10 border-l border-line pl-8">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[3.15rem] grid h-9 w-9 place-items-center rounded-full border border-brand bg-bg font-display text-sm font-semibold text-brand">
                {i + 1}
              </span>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-xl leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
