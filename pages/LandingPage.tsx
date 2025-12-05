import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Globe, Cpu, LayoutGrid } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background-dark font-sans text-gray-200 overflow-x-hidden selection:bg-primary selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-lg border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-black fill-current"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">FLUXTIME</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="hidden sm:block px-4 py-2 text-sm font-bold text-white hover:text-primary transition-colors">
              Entrar
            </Link>
            <Link to="/dashboard" className="px-5 py-2.5 bg-primary text-black text-sm font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,255,157,0.5)] transition-all">
              Criar Conta
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: 'linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,1)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3FSaNfjGYwxLfS_5nQtdqfpxaaAccQVZlVXFtGyY9hWn8Q121gdpFi92z8tvBWKLoBd2RuSiCcjYS9MpJc-e8EIlmdBmKRmlZ79OA_JIcz7V4idvjhvxX6Q213VbIlYnx65xEzdslKt4lVZ46L4qsPXgAYXdkT--JqejT_S4tfq659EFOQOIUjRVxmQ6dbCuSPwV4bu_KFkZiU8QgG8Yt5TYBGaTKV98LZTjfnSmga4XQp1SLntS4vwh0gOV3XXO4PeMCc0ivKR4")' }}
          />
          <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
              Torne-se Sócio do Ecossistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">FLUXTIME</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Um ecossistema digital 360° que integra automação, IA, coleta de notícias, 
              criação de vídeos, SaaS, ferramentas OSINT e módulos de monetização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/dashboard" className="px-8 py-4 bg-primary text-black text-lg font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,255,157,0.3)]">
                Quero ser Sócio
              </Link>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-bold rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                Conhecer Projeto
              </button>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <div className="glassmorphism rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full border-2 border-primary/50 overflow-hidden shadow-[0_0_20px_rgba(0,255,157,0.2)]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5IF9R89jPDkUlN5SoPSGZ9mmRlXO25UmofrzMXqW7MC-CnJzeAR-VDieHzY-7sGZhpefIZSl1Hp9bDkJx7lO5SDAHKWyRx9BnTWe3aVK_afPGEWYlAKPuzntnUQjtN13XMyXT7AMWnrS-Uq0FbNfo7GpuTaVaU2goOnrb80x0apAOj6BEnM-QiK4baGv7dBUIt1znl7KMilJQ9412IEfE51IljNykVv0Js_5rpObXGo35ONtlSoO8C6adnBpHU4nk3PNMqN-AIqc" 
                alt="Jonathan Edward"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Quem Criou: Jonathan Edward</h3>
              <p className="text-gray-400 leading-relaxed">
                Visionário por trás da revolução FLUXTIME, combinando expertise em IA e automação para construir o futuro da inteligência digital.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages Grid */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Vantagens e Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Activity, title: "Metas de Lucro", desc: "Projeções financeiras robustas com múltiplos fluxos de receita." },
              { icon: Globe, title: "Expansão Global", desc: "Estratégia de entrada em mercados internacionais." },
              { icon: Cpu, title: "Inovações com IA", desc: "P&D contínuo para manter a vanguarda tecnológica." },
              { icon: LayoutGrid, title: "Novos Módulos SaaS", desc: "Desenvolvimento ágil de novas ferramentas." }
            ].map((item, i) => (
              <div key={i} className="glassmorphism p-6 rounded-xl hover:bg-white/5 transition-colors group">
                <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-white text-center mb-16">Roadmap do Futuro</h3>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full"></div>
              <div className="absolute top-1/2 left-0 w-3/4 h-1 bg-primary -translate-y-1/2 rounded-full"></div>
              
              <div className="relative flex justify-between">
                {[
                  { q: "Q1 2024", label: "Lançamento", active: true },
                  { q: "Q3 2024", label: "Expansão", active: true },
                  { q: "Q1 2025", label: "IA 2.0", active: true },
                  { q: "Q4 2025", label: "IPO", active: false }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ring-4 ring-background-dark ${step.active ? 'bg-primary' : 'bg-gray-600'}`}></div>
                    <div className="text-center">
                      <p className={`font-bold ${step.active ? 'text-white' : 'text-gray-500'}`}>{step.q}</p>
                      <p className="text-xs text-gray-400">{step.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Pronto para Fazer Parte da Revolução?</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Compre sua parte e fature junto com a revolução digital. Junte-se a um grupo seleto de visionários.
            </p>
            <Link to="/dashboard" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_40px_rgba(0,255,157,0.4)] transition-all">
              Acessar Ecossistema <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;