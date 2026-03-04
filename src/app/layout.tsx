import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Germana Medeiros | Psicóloga Clínica - TCC",
  description: "Psicóloga especialista em Terapia Cognitivo-Comportamental (TCC) com mais de 25 anos de experiência. Atendimento psicológico online para adultos brasileiros residentes no Brasil e no exterior.",
  keywords: ["Psicóloga", "Terapia Cognitivo-Comportamental", "TCC", "Psicoterapia Online", "Germana Medeiros", "Psicóloga para Brasileiros no Exterior", "Saúde Mental"],
  authors: [{ name: "Germana Medeiros" }],
  creator: "Germana Medeiros",
  publisher: "Germana Medeiros",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://psicologagermanamedeiros.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Germana Medeiros | Psicóloga Clínica Especialista em TCC',
    description: 'Atendimento psicológico online com acolhimento, ética e ciência a serviço do seu bem-estar emocional. Especialista em Terapia Cognitivo-Comportamental.',
    url: 'https://psicologagermanamedeiros.com.br',
    siteName: 'Psicóloga Germana Medeiros',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/psicologa-germana-hero.webp', // Assuming this is a good OG image
        width: 1200,
        height: 630,
        alt: 'Germana Medeiros - Psicóloga Clínica',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Germana Medeiros | Psicóloga Clínica',
    description: 'Psicoterapia baseada em evidências para adultos. Atendimento online no Brasil e exterior.',
    images: ['/images/psicologa-germana-hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'Person'],
  'name': 'Germana Medeiros',
  'jobTitle': 'Psicóloga Clínica',
  'url': 'https://psicologagermanamedeiros.com.br',
  'image': 'https://psicologagermanamedeiros.com.br/images/psicologa-germana-hero.webp',
  'description': 'Psicóloga clínica especialista em Terapia Cognitivo-Comportamental (TCC) com mais de 25 anos de experiência, oferecendo atendimento online para adultos.',
  'telephone': '+5585991990688',
  'email': 'contato@psicologagermanamedeiros.com.br',
  'knowsAbout': ['Terapia Cognitivo-Comportamental', 'Ansiedade', 'Depressão', 'Autoconhecimento', 'Desenvolvimento Pessoal'],
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'BR'
  },
  'medicalSpecialty': 'Psychiatric'
};

import CookieBanner from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased relative`}
      >
        <div className="fixed inset-0 bg-noise" />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
