"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
    useScrollReveal();
    return (
        <footer className="w-full bg-navy relative overflow-hidden">
            {/* Gradient light from top */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-navy-light/30 to-transparent pointer-events-none -z-10" />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    {/* Brand */}
                    <div data-reveal data-delay="0" className="md:col-span-5">
                        <div className="mb-6 inline-block opacity-90 transition-opacity duration-300 hover:opacity-100">
                            <img src="./images/logo-germana-psicologa.webp" alt="Germana Medeiros - Psicóloga Clínica" className="h-16 w-auto object-contain brightness-0 invert" />
                        </div>
                        <p className="text-sm text-white/90 font-normal leading-relaxed max-w-sm">
                            Acolhimento, ética e ciência a serviço do seu bem-estar emocional. Acompanhamento online.
                        </p>
                        <p className="text-xs text-white/60 tracking-wider font-medium">
                            CRP 02221
                        </p>
                    </div>

                    {/* Contact */}
                    <div data-reveal data-delay="100" className="md:col-span-3">
                        <p className="text-xs text-white/95 uppercase tracking-[0.25em] mb-6 font-medium">Contato</p>
                        <div className="space-y-4">
                            <a href="https://wa.me/5585991990688?text=Ol%C3%A1%20Germana%2C%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors duration-300">
                                <svg className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors duration-300 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                (85) 99199-0688
                            </a>
                            <a href="mailto:contato@psicologagermanamedeiros.com.br" className="group flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors duration-300">
                                <svg className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                                contato@psicologagermanamedeiros.com.br
                            </a>
                            <a href="https://instagram.com/psicologagermanamedeiros" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors duration-300">
                                <svg className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" /></svg>
                                @psicologagermanamedeiros
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div data-reveal data-delay="200" className="md:col-span-4">
                        <p className="text-xs text-white/95 uppercase tracking-[0.25em] mb-6 font-medium">Navegação</p>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: "Início", href: "#inicio" },
                                { label: "Psicoterapia", href: "#psicoterapia" },
                                { label: "Especialidades", href: "#especialidades" },
                                { label: "Processo", href: "#como-funciona" },
                                { label: "Avaliação", href: "#avaliacao" },
                                { label: "Sobre Mim", href: "#sobre" },
                                { label: "Dúvidas", href: "#faq" },
                            ].map((link) => (
                                <a key={link.href} href={link.href} className="text-sm text-white/80 hover:text-white flex items-center gap-2 transition-colors duration-300 group">
                                    <span className="w-1 h-px bg-gold/0 group-hover:bg-gold transition-all duration-300"></span>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/15">
                <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-xs text-white/70 text-center md:text-left">
                        &copy; 2026 Germana Medeiros &mdash; Psicóloga Clínica &bull; CRP 02221
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 mt-2 md:mt-0">
                        <a href="/termos" className="text-[10px] text-white/50 hover:text-white/80 transition-colors uppercase tracking-wider">
                            Termos de Uso e Política de Privacidade
                        </a>
                        <span className="hidden md:inline-block text-white/20">•</span>
                        <p className="text-[10px] text-white/50 tracking-wider uppercase">
                            Todos os direitos reservados
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
