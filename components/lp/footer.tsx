import Image from "next/image";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, whatsappLink } from "@/lib/content";

export const Footer = () => (
  <footer className="border-t border-border/60 bg-surface/30">
    <div className="mx-auto max-w-6xl px-4 py-14 text-center">
      <h2 className="text-2xl font-bold">
        <span className="text-metal">Estamos em </span>
        <span className="text-roxo-light">Londrina, Paraná</span>
      </h2>
      <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
        <a href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-roxo-light">
          <MapPin className="size-4" /> Ver no Google Maps
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-roxo-light">
          <MessageCircle className="size-4" /> WhatsApp
        </a>
        <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-roxo-light">
          {CONTACT.instagramHandle}
        </a>
        <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-roxo-light">
          <Mail className="size-4" /> {CONTACT.email}
        </a>
      </div>

      <Image src="/logo-escrita.svg" alt="Matra" width={130} height={42} className="mx-auto mt-12 opacity-80" />
      <p className="mt-6 text-xs text-muted-foreground">
        2026 ©{CONTACT.legalName} — Todos os direitos reservados · CNPJ {CONTACT.cnpj}
      </p>
    </div>
  </footer>
);
