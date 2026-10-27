"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { INVESTMENT_OPTIONS, SEGMENTS, whatsappLink } from "@/lib/content";

const maskPhone = (value: string) => {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const inputCls =
  "w-full rounded-xl border border-border bg-black/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-roxo-light focus:outline-none";

const Label = ({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
    {children} <span className="text-roxo-light">*</span>
  </label>
);

export const LeadForm = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams(window.location.search);
    const origem = [params.get("utm_source"), params.get("utm_campaign")].filter(Boolean).join(" / ");

    const message = [
      "Olá! Vim pela página da Matra e quero aumentar minhas vendas.",
      "",
      `*Nome:* ${data.get("nome")}`,
      `*WhatsApp:* ${phone}`,
      `*Instagram:* ${data.get("instagram")}`,
      `*Segmento:* ${data.get("segmento")}`,
      `*Investimento em marketing:* ${data.get("investimento")}`,
      ...(origem ? [`*Origem:* ${origem}`] : []),
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-border bg-surface/80 p-6 backdrop-blur sm:p-8">
      <div>
        <Label htmlFor="nome">Qual o seu nome?</Label>
        <input id="nome" name="nome" required autoComplete="name" className={inputCls} placeholder="Seu nome" />
      </div>
      <div>
        <Label htmlFor="whatsapp">Qual o seu WhatsApp?</Label>
        <input
          id="whatsapp"
          name="whatsapp"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="\(\d{2}\) \d{4,5}-\d{4}"
          title="Informe um WhatsApp com DDD"
          value={phone}
          onChange={(e) => setPhone(maskPhone(e.target.value))}
          className={inputCls}
          placeholder="(43) 99999-9999"
        />
      </div>
      <div>
        <Label htmlFor="instagram">Qual o Instagram da empresa?</Label>
        <input id="instagram" name="instagram" required className={inputCls} placeholder="@suaempresa" />
      </div>
      <div>
        <Label htmlFor="segmento">Qual o segmento da sua empresa?</Label>
        <select id="segmento" name="segmento" required defaultValue="" className={inputCls}>
          <option value="" disabled>
            Selecione
          </option>
          {SEGMENTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <fieldset>
        <legend className="mb-3 text-sm font-medium">
          Quanto você pretende investir em marketing por mês? <span className="text-roxo-light">*</span>
        </legend>
        <div className="grid gap-2">
          {INVESTMENT_OPTIONS.map((opt) => (
            <label
              key={opt}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-black/40 px-4 py-3 text-sm transition-colors hover:border-roxo/50 has-[:checked]:border-roxo-light has-[:checked]:bg-roxo/10"
            >
              <input type="radio" name="investimento" value={opt} required className="size-4 accent-roxo" />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-roxo px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_40px_-8px_rgba(155,7,240,0.55)] transition-all hover:bg-roxo-light"
      >
        Agendar minha conversa
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Diagnóstico gratuito · Sem compromisso · Resposta em até 24h
      </p>
    </form>
  );
};
