import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <>
            {/* We use a simplified custom header instead of the full Navbar to prevent anchor link issues on a 404 page */}
            <header className="fixed top-0 left-0 w-full z-50 bg-cream/95 backdrop-blur-xl shadow-[0_1px_0_rgba(17,42,70,0.06)] py-6">
                <div className="container mx-auto px-6 lg:px-12 flex justify-center">
                    <Link href="/" className="transition-transform duration-500 hover:scale-[1.02]">
                        <img src="/images/logo-germana-psicologa.webp" alt="Germana Medeiros - Psicóloga Clínica" className="h-12 sm:h-14 w-auto object-contain mix-blend-multiply contrast-[1.1]" />
                    </Link>
                </div>
            </header>

            <main className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 relative overflow-hidden">
                {/* Orbs background */}
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-rose-light/40 rounded-full blur-[120px] -z-20 pointer-events-none" />
                <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] -z-20 pointer-events-none" />

                <div className="container mx-auto px-6 text-center max-w-2xl relative z-10 flex flex-col items-center">
                    <div className="text-8xl md:text-9xl font-serif text-navy/10 font-bold mb-4 selector-none">
                        404
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 text-balance leading-tight">
                        Página <span className="italic text-rose-vibrant">não encontrada</span>
                    </h1>
                    <p className="text-lg text-navy/80 mb-12 text-balance max-w-lg mx-auto">
                        Desculpe, a página que você está procurando pode ter sido removida, mudado de nome ou não existir mais.
                    </p>

                    <Link href="/" className="btn-navy px-10 py-4 shadow-lg shadow-navy/20 inline-flex items-center gap-3 group">
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Voltar para a Página Inicial
                    </Link>
                </div>
            </main>

            <Footer />
        </>
    );
}
