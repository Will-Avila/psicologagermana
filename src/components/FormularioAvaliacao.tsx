"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const options = [
    "Crises de choro ou tristeza frequente",
    "Ansiedade constante ou sensação de aperto no peito",
    "Preocupação excessiva e dificuldade de desligar a mente",
    "Estresse intenso ou sensação de sobrecarga",
    "Cansaço emocional e esgotamento",
    "Falta de motivação ou desânimo",
    "Dificuldade para dormir ou sono não reparador",
    "Irritabilidade ou mudanças de humor",
    "Dificuldade nos relacionamentos",
    "Sensação de vazio ou perda de sentido",
    "Medo de errar ou autocobrança excessiva",
    "Dificuldade em lidar com mudanças ou decisões",
];

export default function FormularioAvaliacao() {
    const [checked, setChecked] = useState<boolean[]>(new Array(options.length).fill(false));
    const [outro, setOutro] = useState("");
    useScrollReveal();

    const toggle = (idx: number) => {
        setChecked((prev) => {
            const next = [...prev];
            next[idx] = !next[idx];
            return next;
        });
    };

    const selectedCount = checked.filter(Boolean).length + (outro.trim() ? 1 : 0);

    const buildMsg = () => {
        const selected = options.filter((_, i) => checked[i]);
        if (outro.trim()) selected.push(`Outro: ${outro.trim()}`);
        const text = `Olá, Germana! Fiz a avaliação no site e me identifiquei com:\n\n${selected.map((s) => `- ${s}`).join("\n")}\n\nGostaria de agendar uma sessão.`;
        return encodeURIComponent(text);
    };

    return (
        <section id="avaliacao" className="w-full py-24 lg:py-32 bg-cream relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-navy/5 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-navy/5 to-transparent z-10" />
            <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-sand/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[20%] left-[-8%] w-[400px] h-[400px] bg-rose-light/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 max-w-3xl relative z-10">
                <div data-reveal="fade" className="text-center mb-14">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-0.5 bg-gold/90" />
                        <span className="text-xs text-navy/80 uppercase tracking-[0.25em] font-medium">Autoavaliação</span>
                        <div className="w-12 h-0.5 bg-gold/90" />
                    </div>
                    <h2 className="font-serif text-3xl lg:text-4xl text-navy mb-4 tracking-tight leading-tight">
                        O que você está sentindo neste momento?
                    </h2>
                    <p className="text-base text-navy/90 font-normal">Você pode marcar uma ou mais opções</p>
                </div>

                <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {options.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => toggle(idx)}
                            className={`group flex items-center gap-3.5 text-left p-4 rounded-xl border transition-all duration-300 min-h-20 ${checked[idx]
                                ? "bg-navy/10 border-navy/30 shadow-sm"
                                : "bg-white border-navy/12 hover:border-navy/30 hover:shadow-md"
                                }`}
                        >
                            <span
                                className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${checked[idx] ? "bg-navy border-navy text-white" : "border-navy/30 group-hover:border-navy/50"
                                    }`}
                            >
                                {checked[idx] && (
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                )}
                            </span>
                            <span className="text-sm text-navy/75 font-normal leading-relaxed">{opt}</span>
                        </button>
                    ))}
                </div>

                {/* Outro */}
                <div data-reveal data-delay="250" className="mt-4">
                    <div className="flex items-center gap-3.5 p-4 rounded-xl border border-navy/12 bg-white shadow-sm transition-all duration-300 focus-within:border-navy/30 focus-within:shadow-md hover:border-navy/30">
                        <span className="w-5 h-5 rounded border-2 border-navy/30 flex items-center justify-center shrink-0">
                            {outro.trim() && (
                                <span className="w-2 h-2 rounded-sm bg-navy" />
                            )}
                        </span>
                        <input
                            type="text"
                            placeholder="Outro: descreva aqui..."
                            value={outro}
                            onChange={(e) => setOutro(e.target.value)}
                            className="flex-1 bg-transparent text-sm text-navy/75 placeholder:text-navy/35 outline-none font-normal"
                        />
                    </div>
                </div>

                {/* CTA */}
                {selectedCount > 0 && (
                    <div className="mt-10 text-center animate-fade-up">
                        <a
                            href={`https://wa.me/5585991990688?text=${buildMsg()}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-navy text-cream text-sm px-8 py-4 rounded-full hover:bg-navy-light transition-all duration-500 tracking-wide uppercase shadow-md shadow-navy/20 hover:shadow-lg hover:-translate-y-1"
                        >
                            Enviar avaliação
                            <svg className="w-4 h-4 transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                        </a>
                        <p className="text-xs text-navy/40 mt-3">
                            {selectedCount} {selectedCount === 1 ? "item selecionado" : "itens selecionados"}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
