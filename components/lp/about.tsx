import { ABOUT_STATS, TEAM } from "@/lib/content";
import { CtaButton, Eyebrow } from "./cta-button";

const initials = (name: string) =>
  name.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]).join("").toUpperCase();

export const About = () => (
  <section className="mx-auto max-w-6xl px-4 py-20">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <Eyebrow>Quem somos</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          <span className="text-metal">Olá, somos a </span>
          <span className="text-roxo-light">Matra!</span>
        </h2>
        <div className="mt-6 space-y-4 text-muted-foreground">
          <p>
            Somos uma agência de marketing e tecnologia de Londrina. Não fazemos campanhas isoladas:{" "}
            <strong className="text-foreground">construímos máquinas de crescimento</strong> que transformam
            investimento em vendas previsíveis.
          </p>
          <p>
            Diferente de agências tradicionais, temos tecnologia própria — CRM, portal de resultados, disparo no
            WhatsApp — e um time fixo de especialistas. Sem freelancer rotativo, sem terceirização, com acesso
            direto a quem executa.
          </p>
          <p>
            À frente do time está <strong className="text-foreground">Jeremias Oliveira</strong>, CEO e fundador da
            Matra e diretor da plataforma SpotForm — que acompanha de perto a estratégia de cada cliente.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {ABOUT_STATS.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-surface/40 p-6 text-center">
            <p className="font-heading text-3xl font-extrabold text-roxo-light sm:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-20 text-center">
      <h3 className="text-2xl font-bold">O time que assume o seu crescimento</h3>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        Quando você contrata a Matra, essas pessoas ficam comprometidas com o resultado da sua empresa.
      </p>
      <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {TEAM.map((m) => (
          <li key={m.name}>
            <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-roxo/30 bg-gradient-to-br from-roxo-deep to-roxo font-heading text-xl font-bold text-white shadow-[0_8px_30px_-8px_rgba(155,7,240,0.5)]">
              {initials(m.name)}
            </div>
            <p className="mt-4 font-semibold">{m.name}</p>
            <p className="text-sm text-muted-foreground">{m.role}</p>
          </li>
        ))}
      </ul>
      <div className="mt-14 flex justify-center">
        <CtaButton />
      </div>
    </div>
  </section>
);
