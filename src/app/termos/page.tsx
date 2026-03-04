import Footer from "@/components/Footer";

export const metadata = {
    title: "Termos de Uso e Política de Privacidade | Germana Medeiros",
    description: "Termos de Uso e Política de Privacidade do site da psicóloga Germana Medeiros, em conformidade com a LGPD.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function TermosEPrivacidade() {
    return (
        <>
            <header className="w-full pt-16 pb-8 flex flex-col items-center justify-center gap-8 relative z-10">
                <a href="/" className="transition-transform duration-500 hover:scale-[1.02]">
                    <img src="/images/logo-germana-psicologa.webp" alt="Germana Medeiros - Psicóloga Clínica" className="h-12 sm:h-16 w-auto object-contain mix-blend-multiply contrast-[1.1]" />
                </a>
                <a href="/" className="btn-navy px-8! py-3! text-sm flex items-center gap-2 shadow-md shadow-navy/10 hover:shadow-lg hover:shadow-navy/20">
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Voltar para o Início
                </a>
            </header>
            <main className="min-h-screen pt-8 pb-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(17,42,70,0.05)] border border-navy/5">
                        <h1 className="font-serif text-3xl md:text-4xl text-navy mb-8">Termos de Uso e Política de Privacidade</h1>

                        <div className="prose prose-navy max-w-none text-navy/80 space-y-6">
                            <p className="text-sm border-l-2 border-gold pl-4 text-navy/60 italic">Última atualização: Março de 2026</p>

                            <section>
                                <h2 className="text-xl font-bold text-navy mb-3 mt-8">1. Introdução</h2>
                                <p>Bem-vindo(a) ao site de Germana Medeiros - Psicóloga Clínica (CRP 02221). Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso e Política de Privacidade. Caso não concorde com alguma parte destes termos, recomendamos que não utilize nosso site.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-navy mb-3 mt-8">2. Coleta de Dados Pessoais (LGPD)</h2>
                                <p>Em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), informamos que a coleta de dados neste site ocorre apenas nas seguintes situações:</p>
                                <ul className="list-disc pl-5 mt-2 space-y-2">
                                    <li><strong>Formulário de Contato / Avaliação Inicial:</strong> Quando você preenche ativamente formulários no site, coletamos dados básicos (como nome, telefone, e-mail e motivo do contato) exclusivamente para fins de agendamento e triagem clínica.</li>
                                    <li><strong>Comunicação via WhatsApp:</strong> Ao clicar no botão de WhatsApp, você será redirecionado para o aplicativo, onde a comunicação inicial ocorrerá, sujeita aos termos e políticas do próprio WhatsApp/Meta.</li>
                                </ul>
                                <p className="mt-2">Não coletamos dados sensíveis (conforme definição da LGPD) diretamente pelo site de forma automatizada.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-navy mb-3 mt-8">3. Uso e Tratamento dos Dados</h2>
                                <p>Os dados pessoais fornecidos por você serão utilizados exclusivamente para:</p>
                                <ul className="list-disc pl-5 mt-2 space-y-2">
                                    <li>Responder a dúvidas, solicitações de agendamento e fornecer informações sobre a psicoterapia.</li>
                                    <li>Realizar o processo de avaliação inicial mútua e formalizar o início do acompanhamento terapêutico.</li>
                                    <li>Comunicações estritamente profissionais referentes ao serviço prestado.</li>
                                </ul>
                                <p className="mt-2">Sob nenhuma hipótese comercializamos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing ou publicidade.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-navy mb-3 mt-8">4. Retenção e Segurança dos Dados</h2>
                                <p>Armazenamos suas informações apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletadas, ou para cumprimento de obrigações legais, regulatórias (Código de Ética do Psicólogo) ou do Conselho Federal de Psicologia (CFP).</p>
                                <p>Implementamos medidas técnicas e organizacionais de segurança para proteger seus dados contra acessos não autorizados, destruição, perda ou alteração acidental ou ilícita.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-navy mb-3 mt-8">5. Direitos do Titular (LGPD)</h2>
                                <p>Como titular dos dados, você tem o direito garantido pela LGPD de:</p>
                                <ul className="list-disc pl-5 mt-2 space-y-2">
                                    <li>Confirmar a existência de tratamento de dados;</li>
                                    <li>Acessar seus dados;</li>
                                    <li>Solicitar a correção de dados incompletos, inexatos ou desatualizados;</li>
                                    <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
                                    <li>Revogar o consentimento a qualquer momento.</li>
                                </ul>
                                <p className="mt-2">Para exercer qualquer um destes direitos, entre em contato através do e-mail <strong>contato@psicologagermanamedeiros.com.br</strong>.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-navy mb-3 mt-8">6. Cookies e Tecnologias de Rastreamento</h2>
                                <p>Este site pode utilizar "cookies" estritamente necessários para garantir o funcionamento técnico básico da página. Não utilizamos cookies invasivos de rastreamento de terceiros para perfis de publicidade (retargeting) sem o seu consentimento explícito, respeitando a sua privacidade.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-navy mb-3 mt-8">7. Limitação de Responsabilidade e Atendimento em Crise</h2>
                                <p>Este site possui caráter informativo e não substitui de forma alguma o acompanhamento de saúde adequado. A terapia online oferecida é regida pela Resolução CFP 11/2018.</p>
                                <p className="font-medium text-rose mt-2">Importante: O atendimento online não é recomendado para casos de emergência psiquiátrica ou risco de vida (ideação suicida grave). Nestes casos, busque imediatamente o serviço de saúde mais próximo, o SUS (SAMU 192) ou o CVV (Centro de Valorização da Vida - Ligue 188).</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-navy mb-3 mt-8">8. Alterações nesta Política</h2>
                                <p>Reservamo-nos o direito de atualizar esta Política e Termos a qualquer momento, sem aviso prévio, para refletir melhorias contínuas ou adequações legais. A versão mais recente estará sempre disponível nesta página.</p>
                            </section>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
