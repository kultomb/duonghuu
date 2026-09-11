import { FinalCTA } from "@/components/FinalCTA";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Trust } from "@/components/Trust";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="mesh-bg min-h-full">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <WhyChoose />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
