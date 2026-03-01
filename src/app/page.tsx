import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SobrePsicoterapia from "@/components/SobrePsicoterapia";
import Especialidades from "@/components/Especialidades";
import ComoFunciona from "@/components/ComoFunciona";
import FormularioAvaliacao from "@/components/FormularioAvaliacao";
import SobreMim from "@/components/SobreMim";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <SobrePsicoterapia />
        <Especialidades />
        <ComoFunciona />
        <FormularioAvaliacao />
        <SobreMim />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
