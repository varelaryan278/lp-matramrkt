import { About } from "@/components/lp/about";
import { Cases } from "@/components/lp/cases";
import { Faq } from "@/components/lp/faq";
import { Footer } from "@/components/lp/footer";
import { FormSection } from "@/components/lp/form-section";
import { Hero } from "@/components/lp/hero";
import { Method } from "@/components/lp/method";
import { Pain } from "@/components/lp/pain";
import { Services } from "@/components/lp/services";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Pain />
      <Cases />
      <Services />
      <About />
      <Method />
      <FormSection />
      <Faq />
      <Footer />
    </main>
  );
}
