"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Psicoterapia", href: "#psicoterapia" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Processo", href: "#como-funciona" },
    { label: "Avaliação", href: "#avaliacao" },
    { label: "Sobre Mim", href: "#sobre" },
    { label: "Dúvidas", href: "#faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? "bg-cream/95 backdrop-blur-xl shadow-[0_1px_0_rgba(17,42,70,0.06)] py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                <a href="#inicio" className="group flex items-center transition-transform duration-500 hover:scale-[1.02]">
                    <img src="/images/logo-germana-psicologa.webp" alt="Germana Medeiros - Psicóloga Clínica" className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply contrast-[1.1]" />
                </a>

                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-sm text-navy/60 hover:text-navy transition-colors duration-300 tracking-wide uppercase">
                            {link.label}
                        </a>
                    ))}
                </div>

                <a href="https://wa.me/558591990688" target="_blank" rel="noreferrer" className="hidden lg:inline-flex items-center gap-2 bg-rose text-cream text-sm px-7 py-3 rounded-full hover:bg-rose-dark transition-all duration-500 tracking-wide uppercase shadow-sm">
                    Agendar
                </a>

                <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]" aria-label="Menu">
                    <span className={`block w-5 h-[1.5px] bg-navy transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                    <span className={`block w-5 h-[1.5px] bg-navy transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
                    <span className={`block w-5 h-[1.5px] bg-navy transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
                </button>
            </div>

            {mobileOpen && (
                <div className="lg:hidden bg-cream/98 backdrop-blur-xl border-t border-navy/5 px-6 py-8 space-y-5 animate-fade-in">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-navy/60 hover:text-navy text-sm tracking-wide uppercase transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <a href="https://wa.me/558591990688" target="_blank" rel="noreferrer" className="block text-center bg-rose text-cream px-6 py-3.5 rounded-full text-sm tracking-wide uppercase mt-4 active:bg-rose-dark transition-colors">
                        Agendar Sessão
                    </a>
                </div>
            )}
        </nav>
    );
}
