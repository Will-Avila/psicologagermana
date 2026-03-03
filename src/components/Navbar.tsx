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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${(scrolled || mobileOpen) ? "bg-cream/95 backdrop-blur-xl shadow-[0_1px_0_rgba(17,42,70,0.06)] py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                <a href="#inicio" className="group flex items-center transition-transform duration-500 hover:scale-[1.02] mr-8">
                    <img src="./images/logo-germana-psicologa.webp" alt="Germana Medeiros - Psicóloga Clínica" className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply contrast-[1.1]" />
                </a>

                <div className="hidden lg:flex items-center ml-auto gap-8">
                    <div className="flex items-center gap-5">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="relative text-[13px] text-navy/90 hover:text-navy transition-all duration-300 tracking-wide uppercase font-medium whitespace-nowrap hover:-translate-y-0.5 group">
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    <a href="https://wa.me/5585991990688?text=Ol%C3%A1%20Germana%2C%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noreferrer" className="btn-navy text-[13px]! px-6! py-2.5! whitespace-nowrap shadow-sm shadow-navy/10">
                        Agendar
                    </a>
                </div>

                <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]" aria-label="Menu">
                    <span className={`block w-5 h-[1.5px] bg-navy transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                    <span className={`block w-5 h-[1.5px] bg-navy transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
                    <span className={`block w-5 h-[1.5px] bg-navy transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
                </button>
            </div>

            {mobileOpen && (
                <div className="lg:hidden bg-cream/98 backdrop-blur-xl border-t border-navy/5 px-6 pt-12 pb-16 space-y-6 animate-fade-in h-[calc(100vh-72px)] overflow-y-auto">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-navy/90 hover:text-navy text-base tracking-widest uppercase transition-colors font-medium">
                            {link.label}
                        </a>
                    ))}
                    <a href="https://wa.me/5585991990688?text=Ol%C3%A1%20Germana%2C%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noreferrer" className="block text-center btn-navy px-6 py-4 rounded-full text-sm tracking-wide uppercase mt-8 shadow-md shadow-navy/20">
                        Agendar Sessão
                    </a>
                </div>
            )}
        </nav>
    );
}
