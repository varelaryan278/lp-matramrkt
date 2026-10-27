import { ArrowRight } from "lucide-react";
import { CTA_LABEL } from "@/lib/content";
import { cn } from "@/lib/utils";

export const CtaButton = ({ label = CTA_LABEL, className }: { label?: string; className?: string }) => (
  <a
    href="#formulario"
    className={cn(
      "group inline-flex items-center justify-center gap-2 rounded-full bg-roxo px-7 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-roxo-light sm:text-base",
      "shadow-[0_8px_40px_-8px_rgba(155,7,240,0.55)] hover:shadow-[0_10px_44px_-6px_rgba(191,86,252,0.7)]",
      className,
    )}
  >
    {label}
    <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
  </a>
);

export const Eyebrow = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <p className={cn("text-sm font-medium uppercase tracking-[0.15em] text-roxo-light", className)}>{children}</p>
);
