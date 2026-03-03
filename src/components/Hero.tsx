'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
    useScrollReveal();
    return (
        <section id="inicio" className="relative w-full min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
            {/* Elaborated Edge Glows & Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-light/40 rounded-full blur-[120px] -z-20 pointer-events-none" />
            <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] -z-20 pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-sand/60 rounded-full blur-[150px] -z-20 pointer-events-none" />

            {/* Base subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/50 to-cream -z-30" />



            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/* Content */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start space-y-8 order-1 lg:order-1">
                    <div data-reveal="fade" data-delay="0" className="flex items-center justify-center lg:justify-start gap-4">
                        <div className="divider-gold" />
                        <span className="text-xs text-navy/80 uppercase tracking-[0.25em] font-medium">Terapia Cognitivo-Comportamental</span>
                    </div>

                    <h1 data-reveal data-delay="100" className="font-serif text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] text-navy leading-[1.2] tracking-[-0.01em] text-center lg:text-left">
                        &ldquo;Dar o primeiro passo pode ser difícil, mas você não precisa fazer isso sozinho(a). Aqui, a terapia é um caminho para viver com mais <span className="italic text-rose-vibrant whitespace-nowrap">leveza e significado</span>.&rdquo;
                    </h1>

                    <p data-reveal data-delay="200" className="text-base md:text-lg text-navy/90 font-normal max-w-2xl leading-relaxed text-center lg:text-left">
                        Psicóloga especialista em Terapia Cognitivo-Comportamental (TCC), com mais de 25 anos de formação. Atendimento psicológico online para adultos brasileiros residentes no Brasil e no exterior.
                    </p>

                    <div data-reveal data-delay="300" className="flex flex-col sm:flex-row items-stretch sm:items-center lg:items-start gap-4 pt-6 w-full max-w-sm sm:max-w-none mx-auto lg:mx-0">
                        <a href="https://wa.me/5585991990688?text=Ol%C3%A1%20Germana%2C%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noreferrer" className="btn-navy group w-full sm:w-auto px-10! py-4! shadow-lg shadow-navy/20 justify-center">
                            Agendar Sessão
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                        </a>
                        <a href="#sobre" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-navy/80 hover:text-navy px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-300 border border-navy/20 hover:border-navy/40 rounded-full">
                            Conhecer Germana
                        </a>
                    </div>
                </div>

                {/* Photo */}
                <div data-reveal="right" data-delay="150" className="lg:col-span-5 flex justify-center lg:justify-end order-2 lg:order-2">
                    <div className="relative w-full max-w-sm animate-float">
                        {/* Decorative ring */}
                        <div className="absolute -inset-3 border border-gold/15 rounded-[2rem] -z-10" />
                        <div className="absolute -inset-6 border border-rose/10 rounded-[2.5rem] -z-10" />

                        <div className="bg-white rounded-[1.5rem] shadow-[0_24px_64px_rgba(17,42,70,0.08)] overflow-hidden">
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src="./images/psicologa-germana-hero.webp"
                                    alt="Germana Medeiros - Psicóloga Clínica"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="px-6 py-5 border-t border-navy/5">
                                <p className="font-serif text-lg text-navy text-center">Germana Medeiros</p>
                                <p className="text-xs text-navy/80 text-center uppercase tracking-[0.2em] mt-1">Psicóloga Clínica</p>
                                <p className="text-[10px] text-navy/50 text-center uppercase tracking-widest mt-0.5">CRP 02221</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
