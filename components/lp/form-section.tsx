import { LeadForm } from "./lead-form";

export const FormSection = () => (
  <section id="formulario" className="bg-glow scroll-mt-4">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 lg:grid-cols-2 lg:items-center">
      <div className="text-center lg:text-left">
        <h2 className="text-4xl font-extrabold sm:text-5xl">
          <span className="text-metal">Vamos acelerar as vendas da </span>
          <span className="text-roxo-light">sua empresa?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground lg:mx-0">
          Preencha o formulário e agende uma conversa com um dos nossos especialistas. Você recebe um diagnóstico
          estratégico gratuito do seu marketing.
        </p>
      </div>
      <LeadForm />
    </div>
  </section>
);
