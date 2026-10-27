import { ArrowUpRight } from "lucide-react";
import { CASES, CLIENTS } from "@/lib/content";
import { CtaButton, Eyebrow } from "./cta-button";

export const Cases = () => (
  <section>
    <div className="mx-auto max-w-6xl px-4 pt-20">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Cases de sucesso</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          <span className="text-metal">Resultados que aparecem </span>
          <span className="text-roxo-light">no caixa</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Não trabalhamos por vaidade. Cada campanha é pensada para gerar venda — e esses números provam.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {CASES.map((c) => (
          <a
            key={c.url}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-border bg-surface/40 p-8 transition-colors hover:border-roxo/60"
          >
            <ArrowUpRight className="absolute right-6 top-6 size-5 text-muted-foreground transition-colors group-hover:text-roxo-light" />
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.segment}</p>
            <p className="mt-4 font-heading text-4xl font-extrabold text-roxo-light">{c.result}</p>
            <p className="mt-3 font-medium">{c.label}</p>
            <p className="mt-6 text-sm text-roxo-light/80 group-hover:text-roxo-light">Ver depoimento no Instagram</p>
          </a>
        ))}
      </div>
    </div>

    <div className="mt-16 border-y border-border/60 bg-surface/20 py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Empresas que já crescem com a Matra
      </p>
      <div className="marquee overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-12 whitespace-nowrap px-6">
          {[...CLIENTS, ...CLIENTS].map((name, i) => (
            <li key={i} className="font-heading text-lg font-semibold text-muted-foreground" aria-hidden={i >= CLIENTS.length}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="flex justify-center px-4 py-14">
      <CtaButton />
    </div>
  </section>
);
