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

            {/* Thin decorative lines */}
            <div className="absolute top-1/4 left-0 w-px h-64 bg-linear-to-b from-transparent via-gold-dark/15 to-transparent pointer-events-none" />
            <div className="absolute top-1/3 right-12 w-px h-48 bg-linear-to-b from-transparent via-rose-dark/15 to-transparent hidden lg:block pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/* Content */}
                <div className="lg:col-span-7 flex flex-col space-y-8 order-2 lg:order-1">
                    <div data-reveal="fade" data-delay="0" className="flex items-center gap-4">
                        <div className="divider-gold" />
                        <span className="text-xs text-navy/50 uppercase tracking-[0.25em] font-medium">Terapia Cognitivo-Comportamental</span>
                    </div>

                    <h1 data-reveal data-delay="100" className="font-serif text-[3.2rem] md:text-[4.2rem] lg:text-[5rem] text-navy leading-[1.05] tracking-[-0.02em]">
                        Espaço de escuta,<br />
                        <span className="italic text-rose">transformação</span><br />
                        e acolhimento.
                    </h1>

                    <p data-reveal data-delay="200" className="text-lg md:text-xl text-navy/70 font-normal max-w-lg leading-relaxed">
                        Psicoterapia baseada em evidências para adultos que buscam compreender seus padrões e construir mudanças reais e sustentáveis.
                    </p>

                    <div data-reveal data-delay="300" className="flex flex-col sm:flex-row gap-4 pt-6">
                        <a href="https://wa.me/558591990688" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-3 bg-rose text-cream px-10 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-rose-dark transition-all duration-500 shadow-[0_8px_30px_rgba(194,156,154,0.15)]">
                            Agendar Sessão
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                        </a>
                        <a href="#sobre" className="inline-flex items-center justify-center gap-2 text-navy/60 hover:text-navy px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-300 border border-navy/10 hover:border-navy/25 rounded-full">
                            Conhecer Germana
                        </a>
                    </div>
                </div>

                {/* Photo */}
                <div data-reveal="right" data-delay="150" className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
                    <div className="relative w-full max-w-sm animate-float">
                        {/* Decorative ring */}
                        <div className="absolute -inset-3 border border-gold/15 rounded-[2rem] -z-10" />
                        <div className="absolute -inset-6 border border-rose/10 rounded-[2.5rem] -z-10" />

                        <div className="bg-white rounded-[1.5rem] shadow-[0_24px_64px_rgba(17,42,70,0.08)] overflow-hidden">
                            <div className="aspect-[3/4] bg-gradient-to-b from-sand/60 to-rose-light/40 flex items-center justify-center">
                                <div className="text-center px-8">
                                    <div className="w-16 h-16 mx-auto mb-4 border border-navy/10 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>
                                    </div>
                                    <p className="text-xs text-navy/35 uppercase tracking-[0.2em]">Sua foto aqui</p>
                                    <p className="text-[11px] text-navy/25 mt-1">public/images/hero.jpg</p>
                                </div>
                            </div>
                            <div className="px-6 py-5 border-t border-navy/5">
                                <p className="font-serif text-lg text-navy text-center">Germana Medeiros</p>
                                <p className="text-xs text-navy/50 text-center uppercase tracking-[0.2em] mt-1">Psicóloga Clínica</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
