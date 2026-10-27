import { Check, X } from "lucide-react";
import { LOCAL_POINTS, PAIN_RESULTS } from "@/lib/content";
import { CtaButton, Eyebrow } from "./cta-button";

export const Pain = () => (
  <section className="border-y border-border/60 bg-surface/30">
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Estratégia certa para Londrina</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          <span className="text-metal">Não cometa esse </span>
          <span className="text-roxo-light">erro caro...</span>
        </h2>
        <p className="mt-5 text-muted-foreground">
          Muitas empresas de Londrina contratam agências de fora achando que a mesma receita funciona em qualquer
          cidade. Não funciona. O mercado daqui tem suas próprias regras — e quem não está aqui normalmente não
          enxerga:
        </p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
        {LOCAL_POINTS.map((p) => (
          <li key={p} className="flex items-center gap-3 rounded-xl border border-roxo/40 bg-roxo/10 p-5">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-roxo/25 text-roxo-light">
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            <span className="text-sm font-medium">{p}</span>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 text-center text-2xl font-bold">E qual é o resultado disso?</h3>
      <ul className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
        {PAIN_RESULTS.map((p) => (
          <li key={p} className="flex items-center gap-3 rounded-xl border border-border bg-surface/40 p-5">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
              <X className="size-3.5" strokeWidth={3} />
            </span>
            <span className="text-sm text-muted-foreground">{p}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex justify-center">
        <CtaButton label="Quero falar com a equipe" />
      </div>
    </div>
  </section>
);
