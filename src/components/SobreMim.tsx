"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SobreMim() {
    useScrollReveal();

    return (
        <section id="sobre" className="w-full py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-navy/5 to-transparent z-10" />

            {/* Subtle glow */}
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[600px] h-[600px] bg-sand/30 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col gap-24 lg:gap-32">
                {/* --- Part 1: Imagem na Esquerda, Texto na Direita --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    {/* Photo 1 (Left) */}
                    <div data-reveal="left" data-delay="100" className="lg:col-span-5 flex justify-start order-2 lg:order-1">
                        <div className="relative w-full max-w-md group">
                            <div className="absolute -inset-4 border border-gold/10 rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl transition-all duration-500 group-hover:border-gold/30" />
                            <div className="bg-linear-to-b from-sand/50 to-rose-light/30 rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl overflow-hidden aspect-3/4 flex items-center justify-center transform-[translateZ(0)] isolate">
                                <div className="text-center px-8">
                                    <div className="w-14 h-14 mx-auto mb-4 border border-navy/8 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-navy/15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>
                                    </div>
                                    <p className="text-[10px] text-navy/20 uppercase tracking-[0.2em]">public/images/sobre-1.jpg</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text 1 (Right) */}
                    <div className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2">
                        <div data-reveal data-delay="0">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-0.5 bg-gold/90" />
                                <span className="text-xs text-navy/80 uppercase tracking-[0.25em] font-medium">Sobre Mim</span>
                            </div>
                            <h2 className="font-serif text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
                                Germana Medeiros
                            </h2>
                        </div>

                        <div className="space-y-5 text-base text-navy/90 font-normal leading-[1.85]">
                            <p data-reveal data-delay="50">
                                Olá, sou Germana, psicóloga graduada pela <span className="text-navy font-medium">Universidade Federal do Ceará</span> desde 2000.
                            </p>
                            <p data-reveal data-delay="100">
                                Atuo com a <span className="text-navy font-medium">Terapia Cognitivo-Comportamental (TCC)</span>, uma abordagem contemporânea, estruturada e baseada em evidências científicas, reconhecida por sua eficácia no tratamento das demandas emocionais e comportamentais. Meu trabalho é orientado para resultados reais, sempre conduzido com responsabilidade, ética e respeito à singularidade de cada pessoa.
                            </p>
                            <p data-reveal data-delay="150">
                                Sou especialista em TCC, com formação em psicofarmacologia e psicopatologia, o que amplia minha compreensão técnica sobre os transtornos emocionais e suas diferentes manifestações. Também possuo especialização em gestão de negócios, estratégia e gestão empresarial.
                            </p>
                            <p data-reveal data-delay="200">
                                Ao longo de mais de 20 anos, atuei em posições de liderança na área de gestão de pessoas. Essa trajetória me proporcionou uma visão ampla e estratégica sobre comportamento humano, tomada de decisão, pressão por desempenho, conflitos interpessoais, exaustão profissional e desafios do ambiente corporativo.
                            </p>
                            <p data-reveal data-delay="300">
                                Minha experiência clínica teve início na abordagem centrada na pessoa, de base humanista, o que consolidou em mim uma escuta empática, acolhedora e genuinamente respeitosa. Hoje, integro essa base humanista à estrutura e objetividade da TCC, unindo acolhimento e estratégia em um processo terapêutico consistente.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- Part 2: Texto na Esquerda, Imagem na Direita --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    {/* Text 2 (Left) */}
                    <div className="lg:col-span-7 flex flex-col space-y-6 order-2 lg:order-1">
                        <div className="space-y-5 text-base text-navy/90 font-normal leading-[1.85]">
                            <p data-reveal data-delay="0">
                                Sou também mãe — e essa vivência amplia minha compreensão sobre responsabilidade, cuidado, limites, sobrecarga e os desafios emocionais que atravessam diferentes fases da vida.
                            </p>
                            <p data-reveal data-delay="50">
                                A minha experiência profissional e de vida, aliada ao meu conhecimento técnico e à minha postura empática e leve, possibilitam que eu contribua de forma significativa para o seu processo de autoconhecimento e transformação.
                            </p>
                        </div>

                        <blockquote data-reveal data-delay="100" className="relative pl-8 py-4 border-l-2 border-gold/40 mt-4">
                            <p className="font-serif text-lg text-navy/80 italic leading-[1.7]">
                                &quot;Meu objetivo é oferecer a você — homem ou mulher adulto(a) — um espaço seguro, livre de julgamentos, onde possamos compreender padrões, fortalecer recursos internos e construir mudanças reais e sustentáveis.&quot;
                            </p>
                        </blockquote>

                        <div className="pt-2">
                            <p data-reveal data-delay="150" className="text-base text-navy/90 font-normal leading-[1.85] mb-6">
                                Se você sente que é momento de cuidar de si com mais clareza, intenção e direcionamento, será um prazer caminhar com você nessa jornada.
                            </p>

                            <div data-reveal data-delay="200">
                                <a href="https://wa.me/558591990688" target="_blank" rel="noreferrer" className="btn-rose group px-10! py-4! shadow-lg shadow-rose-vibrant/20">
                                    Agendar uma sessão
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Photo 2 (Right) */}
                    <div data-reveal="right" data-delay="100" className="lg:col-span-5 flex justify-end order-1 lg:order-2">
                        <div className="relative w-full max-w-md mt-8 lg:mt-0 group">
                            <div className="absolute -inset-4 border border-rose-light/40 rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl transition-all duration-500 group-hover:border-rose/60" />
                            <div className="bg-linear-to-t from-sand/40 to-cream rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl overflow-hidden aspect-4/5 flex items-center justify-center transform-[translateZ(0)] isolate">
                                <div className="text-center px-8">
                                    <div className="w-14 h-14 mx-auto mb-4 border border-navy/8 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-navy/15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>
                                    </div>
                                    <p className="text-[10px] text-navy/20 uppercase tracking-[0.2em]">public/images/sobre-2.jpg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
