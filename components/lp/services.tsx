import { Camera, Code, LayoutTemplate, Megaphone, Search, Workflow } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { Eyebrow } from "./cta-button";

const ICONS = {
  search: Search,
  megaphone: Megaphone,
  layout: LayoutTemplate,
  workflow: Workflow,
  camera: Camera,
  code: Code,
};

export const Services = () => (
  <section className="border-y border-border/60 bg-surface/30">
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="max-w-2xl">
        <Eyebrow>Nossos serviços</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          <span className="text-metal">A estrutura completa para sua empresa </span>
          <span className="text-roxo-light">vender mais</span>
        </h2>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon as keyof typeof ICONS];
          return (
            <article key={s.title} className="rounded-2xl border border-border bg-surface/50 p-7 transition-colors hover:border-roxo/50">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-roxo/15 text-roxo-light">
                  <Icon className="size-5" />
                </span>
                <span className="font-heading text-sm font-bold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
