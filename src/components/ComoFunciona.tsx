'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
    {
        num: "01",
        title: "Entre em contato",
        desc: "Você entra em contato para tirar dúvidas iniciais e entender se a psicoterapia faz sentido para você neste momento.",
    },
    {
        num: "02",
        title: "Agendamento",
        desc: "Organizamos o melhor dia e horário para iniciar o acompanhamento.",
    },
    {
        num: "03",
        title: "Avaliação inicial e compreensão do contexto",
        desc: "Nas primeiras sessões, eu escuto sua história e compreendo o que está acontecendo hoje, identificando os fatores que mantêm o sofrimento emocional.",
    },
    {
        num: "04",
        title: "Definição de objetivos terapêuticos",
        desc: "Juntos, definimos objetivos claros e possíveis, que orientam todo o processo terapêutico.",
    },
    {
        num: "05",
        title: "Autoconhecimento e transformação",
        desc: "Trabalhamos estratégias práticas para promover mudanças reais na forma de pensar, sentir e agir no dia a dia.",
    },
    {
        num: "06",
        title: "Consolidação das mudanças",
        desc: "Reforçamos o que foi aprendido, ajustamos estratégias e fortalecemos os avanços, para que as mudanças se tornem consistentes e sustentáveis.",
    },
    {
        num: "07",
        title: "Prevenção de recaídas",
        desc: "Você desenvolve mais autonomia emocional e segurança para lidar com desafios futuros, reduzindo o risco de voltar aos padrões anteriores.",
    },
];

export default function ComoFunciona() {
    useScrollReveal();
    return (
        <section id="como-funciona" className="w-full py-24 lg:py-32 bg-navy relative overflow-hidden">
            {/* Noise overlay for dark section */}
            <div className="absolute inset-0 bg-navy-noise" />

            {/* Spotlight Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--color-navy-light)_0%,transparent_70%)] opacity-40 blur-3xl pointer-events-none -z-20" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-navy-dark)_0%,transparent_70%)] blur-3xl pointer-events-none -z-20" />

            {/* Micro Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,224,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,224,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none -z-10 mix-blend-overlay" />

            {/* Decorative */}
            <div className="absolute bottom-0 left-12 w-px h-64 bg-linear-to-t from-gold/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
                <div data-reveal="fade" className="text-center mb-20">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-0.5 bg-gold/70" />
                        <span className="text-xs text-cream/90 uppercase tracking-[0.25em] font-medium">Como Funciona</span>
                        <div className="w-12 h-0.5 bg-gold/70" />
                    </div>
                    <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-4 tracking-tight">
                        Como funciona o meu trabalho
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            data-reveal
                            data-delay={String(idx * 70)}
                            className="group bg-cream/4 backdrop-blur-sm border border-cream/6 rounded-2xl p-8 hover:bg-cream/8 transition-all duration-500"
                        >
                            <span className="text-gold/60 font-serif text-3xl font-light block mb-5">{step.num}</span>
                            <h3 className="font-serif text-lg text-cream font-medium mb-4 leading-snug">{step.title}</h3>
                            <p className="text-sm text-cream/90 font-normal leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
