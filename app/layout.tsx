import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  title: "Agência de Marketing em Londrina | Matra Tecnologia & Marketing",
  description:
    "Tráfego pago, sites, automação e tecnologia própria para empresas de Londrina venderem mais. Agende um diagnóstico gratuito com a Matra.",
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "Matra — Marketing e Tecnologia em Londrina",
    description: "Mais clientes, mais vendas e menos achismo. Agende um diagnóstico gratuito.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={cn("dark h-full antialiased", inter.variable, sora.variable)}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
