"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
    useScrollReveal();
    return (
        <footer className="w-full bg-navy relative overflow-hidden">
            {/* Gradient light from top */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-navy-light/30 to-transparent pointer-events-none -z-10" />

            {/* Top accent line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent relative z-10" />

            <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    {/* Brand */}
                    <div data-reveal data-delay="0" className="md:col-span-5">
                        <div className="mb-6 inline-block opacity-90 transition-opacity duration-300 hover:opacity-100">
                            <img src="/images/logo-germana-psicologa.webp" alt="Germana Medeiros - Psicóloga Clínica" className="h-16 w-auto object-contain brightness-0 invert" />
                        </div>
                        <p className="text-sm text-white/90 font-normal leading-relaxed max-w-sm">
                            Acolhimento, ética e ciência a serviço do seu bem-estar emocional. Acompanhamento presencial e online.
                        </p>
                    </div>

                    {/* Contact */}
                    <div data-reveal data-delay="100" className="md:col-span-3">
                        <p className="text-xs text-white/70 uppercase tracking-[0.25em] mb-6 font-medium">Contato</p>
                        <div className="space-y-4">
                            <a href="tel:+558591990688" className="group flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors duration-300">
                                <svg className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                                (85) 9199-0688
                            </a>
                            <a href="https://wa.me/558591990688" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors duration-300">
                                <svg className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
                                WhatsApp
                            </a>
                            <a href="https://instagram.com/germanampsicologia" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors duration-300">
                                <svg className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" /></svg>
                                @germanampsicologia
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div data-reveal data-delay="200" className="md:col-span-4">
                        <p className="text-[11px] text-white/50 uppercase tracking-[0.3em] mb-6">Navegação</p>
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
            <div data-reveal data-delay="300" className="border-t border-white/10">
                <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-white/80">&copy; {new Date().getFullYear()} Germana Medeiros. Todos os direitos reservados.</p>
                    <p className="text-xs text-white/60 mt-2 md:mt-0">Psicóloga Clínica</p>
                </div>
            </div>
        </footer>
    );
}
