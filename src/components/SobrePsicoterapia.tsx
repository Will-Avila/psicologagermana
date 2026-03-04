'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function SobrePsicoterapia() {
    useScrollReveal();
    return (
        <section id="psicoterapia" className="w-full py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-navy/5 to-transparent z-10" />
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-rose-light/30 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-sand/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
                <div data-reveal="fade" className="text-center mb-14">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-0.5 bg-gold/90" />
                        <h2 className="text-xs text-navy/80 uppercase tracking-[0.25em] font-medium">Sobre a Psicoterapia</h2>
                        <div className="w-12 h-0.5 bg-gold/90" />
                    </div>
                </div>

                <div className="space-y-6 text-lg text-navy/75 font-normal leading-[1.85]">
                    <p data-reveal data-delay="0">
                        Cuidar da saúde emocional hoje vai além de &quot;falar sobre sentimentos&quot;. Envolve compreender padrões, desenvolver habilidades e construir mudanças possíveis no dia a dia.
                    </p>
                    <p data-reveal data-delay="100">
                        Na psicoterapia, ofereço um espaço profissional, ético e acolhedor para homens e mulheres adultos que desejam lidar de forma mais consciente com suas emoções, relacionamentos e desafios pessoais ou profissionais.
                    </p>
                    <p data-reveal data-delay="150">
                        Meu trabalho é fundamentado na <span className="text-navy font-medium">Terapia Cognitivo-Comportamental (TCC)</span> — uma abordagem contemporânea, estruturada e baseada em evidências científicas, reconhecida por sua eficácia no tratamento de questões emocionais e comportamentais.
                    </p>
                    <p data-reveal data-delay="200">
                        A TCC é uma psicoterapia ativa e colaborativa, orientada por objetivos definidos em conjunto, com foco em desenvolver estratégias práticas para promover mudanças consistentes e sustentáveis.
                    </p>
                </div>
            </div>
        </section>
    );
}
