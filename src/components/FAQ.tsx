"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
    {
        q: "O que é a Terapia Cognitivo-Comportamental (TCC)?",
        a: "A TCC é uma abordagem psicoterapêutica baseada em evidências científicas que trabalha a relação entre pensamentos, emoções e comportamentos. Por meio de técnicas estruturadas, ajuda a identificar e modificar padrões disfuncionais que causam sofrimento, promovendo mudanças concretas no dia a dia. É uma das abordagens mais pesquisadas e reconhecidas mundialmente.",
    },
    {
        q: "Para quem a TCC é indicada?",
        a: "A TCC é indicada para adultos que enfrentam questões como ansiedade, depressão, estresse, burnout, dificuldades nos relacionamentos, baixa autoestima, insônia, entre outras demandas emocionais e comportamentais. Também é eficaz para quem busca autoconhecimento e desenvolvimento pessoal.",
    },
    {
        q: "Como funciona a primeira sessão?",
        a: "A primeira sessão é um espaço de escuta e acolhimento. Conversamos sobre o que te trouxe à terapia, sua história e suas expectativas. É um momento para você conhecer o meu trabalho e avaliar se faz sentido iniciar o acompanhamento. Não há julgamento, apenas compreensão.",
    },
    {
        q: "Quanto tempo dura o processo terapêutico?",
        a: "A duração varia conforme seus objetivos e a complexidade das questões envolvidas. A TCC é uma abordagem de curto a médio prazo, com resultados perceptíveis já nas primeiras semanas. Juntos, definimos os objetivos e acompanhamos a evolução ao longo do processo.",
    },
    {
        q: "As sessões são presenciais ou online?",
        a: "Atendo tanto presencialmente quanto online, com a mesma qualidade e comprometimento. O formato online é prático, seguro e permite que você faça terapia de qualquer lugar, mantendo a regularidade e a continuidade do tratamento.",
    },
    {
        q: "Preciso tomar medicação durante a terapia?",
        a: "Nem sempre. A necessidade de medicação é avaliada caso a caso. A TCC pode ser realizada de forma independente ou em conjunto com acompanhamento psiquiátrico, quando indicado. Minha formação em psicofarmacologia contribui para uma compreensão integrada do tratamento.",
    },
    {
        q: "Qual a frequência das sessões?",
        a: "O padrão recomendado é de uma sessão por semana, with duração de 50 minutos. Essa frequência permite dar continuidade ao trabalho terapêutico e manter o progresso consistente. Em alguns casos, a frequência pode ser ajustada conforme a demanda.",
    },
    {
        q: "Como faço para agendar?",
        a: "Basta me chamar pelo WhatsApp. Os horários são organizados de acordo com a sua disponibilidade. Responderei o mais breve possível para darmos início ao seu acompanhamento.",
    },
];

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    useScrollReveal();

    return (
        <section id="faq" className="w-full py-24 lg:py-32 relative overflow-hidden bg-cream">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-navy/5 to-transparent z-10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-rose-light/20 blur-[120px] rounded-[100%] pointer-events-none -z-10" />

            <div className="container mx-auto px-6 lg:px-12 max-w-3xl relative z-10">
                <div data-reveal="fade" className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-0.5 bg-gold/90" />
                        <span className="text-xs text-navy/50 uppercase tracking-[0.25em] font-medium">Dúvidas</span>
                        <div className="w-12 h-0.5 bg-gold/90" />
                    </div>
                    <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4 tracking-tight">
                        Perguntas Frequentes
                    </h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            data-reveal
                            data-delay={String(idx * 60)}
                            className="border border-navy/6 rounded-xl overflow-hidden bg-white/70 backdrop-blur-sm"
                        >
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-cream/50 transition-colors duration-300"
                            >
                                <span className="text-base text-navy/80 font-medium pr-6 leading-snug">{faq.q}</span>
                                <svg className={`w-5 h-5 text-navy/25 shrink-0 transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                            </button>
                            {openIdx === idx && (
                                <div className="px-6 pb-6 pt-0">
                                    <p className="text-sm text-navy/60 font-normal leading-relaxed">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div data-reveal data-delay="200" className="text-center mt-16">
                    <p className="text-navy/60 mb-6 text-base font-normal">Ainda tem dúvidas?</p>
                    <a href="https://wa.me/558591990688" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-rose text-cream text-sm px-8 py-4 rounded-full hover:bg-rose-dark transition-all duration-500 tracking-wide uppercase shadow-md shadow-rose/20">
                        Falar com Germana
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
