'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = [
    {
        title: "Saúde emocional",
        items: [
            "Ansiedade e crises de pânico",
            "Estresse crônico e sobrecarga emocional",
            "Tristeza persistente e sintomas depressivos",
            "Dificuldade de regulação emocional",
            "Exaustão mental e emocional",
            "Demais questões relacionadas à saúde mental",
        ],
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
    },
    {
        title: "Relacionamentos e vínculos",
        items: [
            "Dificuldades nos relacionamentos amorosos",
            "Processos de separação e divórcio",
            "Dependência emocional",
            "Comunicação disfuncional nas relações",
            "Conflitos familiares",
        ],
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
    },
    {
        title: "Mulheres e múltiplas jornadas",
        items: [
            "Sobrecarga mental e emocional",
            "Autocobrança excessiva e perfeccionismo",
            "Dificuldade em equilibrar vida pessoal e profissional",
            "Questões de autoestima e identidade",
        ],
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <circle cx="12" cy="9" r="5" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7M9.5 18.5h5" />
            </svg>
        ),
    },
    {
        title: "Homens e saúde emocional",
        items: [
            "Dificuldade em expressar emoções",
            "Pressão por desempenho e responsabilidades",
            "Ansiedade, irritabilidade e estresse",
            "Desafios nos relacionamentos",
        ],
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <circle cx="10" cy="14" r="5" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5L19 5M19 5h-4M19 5v4" />
            </svg>
        ),
    },
    {
        title: "Trabalho, carreira e vida profissional",
        items: [
            "Burnout e esgotamento profissional",
            "Ansiedade relacionada ao trabalho",
            "Estresse no ambiente corporativo",
            "Transições de carreira",
            "Insegurança e autoconfiança profissional",
        ],
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        ),
    },
];

export default function Especialidades() {
    useScrollReveal();
    return (
        <section id="especialidades" className="w-full py-24 lg:py-32 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[30%] left-[-15%] w-[600px] h-[600px] bg-rose-light/25 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div data-reveal="fade" className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-0.5 bg-gold/90" />
                        <h2 className="text-xs text-navy/80 uppercase tracking-[0.25em] font-medium">Especialidades</h2>
                        <div className="w-12 h-0.5 bg-gold/90" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            data-reveal
                            data-delay={String(idx * 80)}
                            className="group bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-navy/5 hover-lift"
                        >
                            <div className="w-11 h-11 rounded-full border border-navy/10 group-hover:border-gold group-hover:text-gold flex items-center justify-center text-navy/60 mb-6 transition-all duration-500">
                                {cat.icon}
                            </div>
                            <h3 className="font-serif text-xl text-navy mb-5 font-medium leading-snug">{cat.title}</h3>
                            <ul className="space-y-2.5">
                                {cat.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-navy/90 font-normal leading-relaxed">
                                        <span className="w-1 h-1 rounded-full bg-gold/60 mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CTA Card (Matched Version) */}
                    <div
                        data-reveal
                        data-delay="450"
                        className="group bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-navy/5 flex flex-col justify-center items-start text-left hover-lift relative overflow-hidden"
                    >
                        <div className="relative z-10 w-full flex flex-col items-start">
                            <div className="w-11 h-11 rounded-full border border-navy/10 group-hover:border-gold group-hover:text-gold flex items-center justify-center text-navy/60 mb-6 transition-all duration-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
                            </div>
                            <h3 className="font-serif text-xl text-navy mb-4 font-medium leading-snug">
                                Não encontrou sua demanda?
                            </h3>
                            <p className="text-sm text-navy/90 font-normal leading-relaxed mb-8 max-w-[280px]">
                                Cada pessoa é única e o acompanhamento é construído de forma individual. Vamos conversar?
                            </p>
                            <a
                                href="https://wa.me/5585991990688?text=Ol%C3%A1%20Germana%2C%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-transparent border border-navy/40 text-navy hover:bg-navy hover:text-white text-xs px-8 py-3.5 rounded-full transition-all duration-500 tracking-wide uppercase shadow-xs hover:shadow-md hover:shadow-navy/20"
                            >
                                Falar com Germana
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
