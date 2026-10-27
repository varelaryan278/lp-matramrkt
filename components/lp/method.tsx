import { METHOD, PLATFORMS } from "@/lib/content";
import { Eyebrow } from "./cta-button";

export const Method = () => (
  <section className="border-y border-border/60 bg-surface/30">
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Nosso método</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          <span className="text-metal">Um processo claro, do primeiro contato </span>
          <span className="text-roxo-light">à escala</span>
        </h2>
        <p className="mt-4 text-muted-foreground">Sem caixa-preta. Você acompanha cada etapa e cada resultado.</p>
      </div>

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {METHOD.map((s) => (
          <li key={s.n} className="rounded-2xl border border-border bg-surface/50 p-6">
            <span className="font-heading text-2xl font-bold text-roxo-light">{s.n}</span>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </li>
        ))}
      </ol>

      <div className="bg-glow mt-14 rounded-3xl border border-border p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <h3 className="text-2xl font-bold">
              <span className="text-metal">Tecnologia própria, </span>
              <span className="text-roxo-light">não planilha</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Plataformas desenvolvidas pelo nosso time para você ter controle total do seu crescimento.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PLATFORMS.map((p) => (
              <li key={p.name} className="rounded-xl border border-border bg-black/40 p-4">
                <p className="font-semibold text-roxo-light">{p.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
