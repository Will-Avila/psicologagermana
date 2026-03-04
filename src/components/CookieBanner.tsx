"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Delay appearance by 3 seconds
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 z-100 w-[calc(100%-2rem)] md:w-[400px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(17,42,70,0.12)] border border-navy/5 p-6 animate-fade-in-up">
            <button
                onClick={handleDecline}
                className="absolute top-4 right-4 text-navy/40 hover:text-navy/60 transition-colors"
                aria-label="Fechar"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <p className="text-lg font-bold text-rose-vibrant mb-2" role="heading" aria-level={2}>Sua privacidade importa</p>

            <p className="text-sm text-navy/70 leading-relaxed mb-6">
                Utilizamos cookies para melhorar sua experiência de navegação e oferecer conteúdo personalizado. Ao continuar, você concorda com nossa <Link href="/termos" className="underline decoration-navy/20 hover:decoration-navy/60 underline-offset-2 transition-colors">política de privacidade e termos de uso</Link>.
            </p>

            <div className="flex items-center justify-between gap-4">
                <button
                    onClick={handleDecline}
                    className="text-xs font-medium text-navy/50 hover:text-navy/80 transition-colors"
                >
                    Não estou de acordo
                </button>
                <button
                    onClick={handleAccept}
                    className="bg-navy text-white text-xs font-semibold px-5 py-3 rounded-full hover:bg-navy-light transition-colors shadow-md shadow-navy/10"
                >
                    Concordar e Continuar
                </button>
            </div>
        </div>
    );
}
