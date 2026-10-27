import { Plus } from "lucide-react";
import { FAQ } from "@/lib/content";
import { CtaButton, Eyebrow } from "./cta-button";

export const Faq = () => (
  <section className="mx-auto max-w-3xl px-4 py-20">
    <div className="text-center">
      <Eyebrow>FAQ</Eyebrow>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        <span className="text-metal">Perguntas </span>
        <span className="text-roxo-light">frequentes</span>
      </h2>
    </div>

    <div className="mt-10 space-y-3">
      {FAQ.map((f) => (
        <details key={f.q} className="group rounded-2xl border border-border bg-surface/40 open:border-roxo/50">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus className="size-5 shrink-0 text-roxo-light transition-transform group-open:rotate-45" />
          </summary>
          <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>

    <div className="mt-12 flex justify-center">
      <CtaButton />
    </div>
  </section>
);
