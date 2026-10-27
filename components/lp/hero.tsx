import Image from "next/image";
import { MapPin } from "lucide-react";
import { HERO_STATS } from "@/lib/content";
import { CtaButton } from "./cta-button";

const StatCard = ({ value, label, className }: { value: string; label: string; className?: string }) => (
  <div
    className={`absolute z-10 rounded-2xl border border-white/10 bg-black/55 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md sm:px-5 sm:py-4 ${className}`}
  >
    <p className="font-heading text-2xl font-extrabold leading-none text-metal sm:text-4xl">{value}</p>
    <p className="mt-1.5 max-w-[9rem] text-[11px] leading-tight text-muted-foreground sm:text-xs">{label}</p>
  </div>
);

export const Hero = () => (
  <section className="bg-glow relative overflow-hidden">
    <div className="grid-lines pointer-events-none absolute inset-0" />
    <div className="relative mx-auto max-w-6xl px-4 pt-8">
      <header className="flex justify-center lg:justify-start">
        <Image src="/logo-escrita.svg" alt="Matra Tecnologia & Marketing" width={150} height={48} priority />
      </header>

      <div className="grid items-end gap-4 pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pt-4">
        <div className="animate-fade-up self-center text-center lg:pb-20 lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span className="animate-glow size-1.5 rounded-full bg-roxo-light" />
            Agência de marketing e tecnologia em Londrina
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            <span className="text-metal">A agência que faz empresas de </span>
            <span className="text-roxo-light">Londrina</span>
            <span className="text-metal"> venderem todos os dias</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0 lg:max-w-md">
            Empresas de <span className="text-roxo-light">Londrina</span> precisam de uma estratégia feita por quem
            conhece o mercado daqui. Unimos tráfego pago, tecnologia própria e um time fixo de especialistas para
            transformar anúncio em cliente — e cliente em faturamento.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 lg:items-start">
            <CtaButton />
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <MapPin className="size-3.5 text-roxo-light" />
              Londrina/PR · Atendemos todo o Paraná
            </p>
          </div>
        </div>

        <div
          className="animate-fade-up relative mx-auto aspect-square w-full max-w-[600px]"
          style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
        >
          <div className="absolute inset-x-[8%] bottom-0 top-[6%] rounded-t-full bg-gradient-to-b from-roxo/45 via-roxo-deep/40 to-transparent blur-2xl" />
          <div className="absolute inset-x-[14%] bottom-0 top-[10%] rounded-t-full border border-b-0 border-roxo-light/25" />
          <Image
            src="/jeremias.webp"
            alt="Jeremias Oliveira, CEO e fundador da Matra"
            fill
            priority
            unoptimized
            className="photo-fade object-contain object-bottom drop-shadow-[0_0_40px_rgba(155,7,240,0.35)]"
          />

          <StatCard value={HERO_STATS[0].value} label={HERO_STATS[0].label} className="-left-2 top-[30%] hidden sm:block lg:left-0" />
          <StatCard value={HERO_STATS[1].value} label={HERO_STATS[1].label} className="-right-2 top-[12%] hidden sm:block lg:-right-6" />
          <StatCard value={HERO_STATS[2].value} label={HERO_STATS[2].label} className="-right-2 bottom-[22%] hidden sm:block lg:-right-8" />

          <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-roxo/40 bg-black/70 px-5 py-2 text-center backdrop-blur lg:left-[28%]">
            <p className="text-sm font-semibold">Jeremias Oliveira</p>
            <p className="text-[11px] uppercase tracking-wider text-roxo-light">CEO & fundador da Matra</p>
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-3 gap-2 pb-14 pt-4 sm:hidden">
        {HERO_STATS.map((s) => (
          <li key={s.label} className="rounded-2xl border border-border bg-surface/70 p-3 text-center">
            <p className="font-heading text-xl font-extrabold text-roxo-light">{s.value}</p>
            <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.label}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
