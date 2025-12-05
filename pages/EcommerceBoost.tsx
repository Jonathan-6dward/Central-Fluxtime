import React, { useState } from 'react';
import { 
  Copy, Zap, BarChart2, Video, Globe, UploadCloud, 
  Search, Shield, Layers, ArrowRight, Play, CheckCircle2, 
  Terminal, Cpu, AlertTriangle, TrendingUp, ShoppingBag, 
  Smartphone, Share2, Package, Eye, ChevronDown, ChevronUp, 
  Download, Wand2, Rocket, Lock
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import api from '../services/api'; // Integrated API service

const FluxProduct = () => {
  const [url, setUrl] = useState('');
  const [isCloning, setIsCloning] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [cloneStatus, setCloneStatus] = useState<string>('Aguardando URL...');

  const handleClone = async () => {
    if (!url) return;
    setIsCloning(true);
    setCloneStatus('Iniciando conexão segura...');
    
    // Simulate complex cloning process steps
    setTimeout(() => setCloneStatus('Extraindo metadados do concorrente...'), 800);
    setTimeout(() => setCloneStatus('Baixando imagens em Alta Resolução...'), 1800);
    setTimeout(() => setCloneStatus('Reescrevendo copy com IA Persuasiva...'), 2800);
    
    // In a real scenario, this would call the backend:
    // await api.post('/api/ecommerce/clone', { url });
    
    setTimeout(() => {
        setIsCloning(false);
        setCloneStatus('Produto Clonado com Sucesso!');
    }, 4000);
  };

  const trendData = [
    { name: 'D1', value: 20 }, { name: 'D2', value: 45 }, { name: 'D3', value: 30 },
    { name: 'D4', value: 80 }, { name: 'D5', value: 100 }, { name: 'D6', value: 90 },
    { name: 'D7', value: 110 },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-20 font-sans text-gray-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 text-center overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neon-blue/10 blur-[120px] rounded-full pointer-events-none"></div>
         
         <div className="relative z-10 space-y-6 max-w-5xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-widest mb-4 animate-fade-in-up">
               <Cpu size={14} /> FluxProduct Engine 2025
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight font-display animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
               Transforme Qualquer Produto em uma <span className="text-neon-blue text-glow">Máquina de Vendas</span>.
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
               O <span className="text-white font-bold">FluxProduct</span> clona produtos virais, analisa concorrentes, gera anúncios completos e publica direto na sua loja — tudo automaticamente em segundos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
               <button onClick={() => document.getElementById('clone-section')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-neon-blue text-black text-lg font-bold rounded-xl hover:shadow-[0_0_40px_rgba(76,201,240,0.4)] transition-all flex items-center gap-2 justify-center group">
                  <Zap size={20} fill="currentColor" className="group-hover:scale-110 transition-transform" /> Clonar Produto Agora
               </button>
               <button className="px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-bold rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2 justify-center">
                  <Play size={20} /> Ver Demonstração
               </button>
            </div>
         </div>

         {/* Hero Mockup */}
         <div className="mt-16 relative max-w-5xl mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="glassmorphism rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#0A0A0A]">
               <div className="flex items-center gap-2 p-4 border-b border-white/10 bg-[#111]">
                  <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto bg-black/50 px-4 py-1 rounded-md text-xs text-gray-500 font-mono flex items-center gap-2">
                     <Shield size={10} className="text-green-500"/> flux-product-cloner.exe
                  </div>
               </div>
               <div className="p-8 bg-[#0D0F15] flex flex-col md:flex-row gap-8 items-center justify-center min-h-[300px]">
                  {/* Left: Input */}
                  <div className="flex-1 w-full space-y-4">
                     <div className="bg-black/40 border border-white/10 rounded-xl p-4 flex gap-3 items-center">
                        <ShoppingBag className="text-gray-500" />
                        <input type="text" placeholder="Cole a URL (Shopee, AliExpress, Shopify...)" className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-600 font-mono text-sm" disabled />
                     </div>
                     <div className="flex gap-2">
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-neon-blue w-[70%] animate-pulse"></div>
                        </div>
                     </div>
                     <div className="text-xs font-mono text-neon-blue text-left space-y-1">
                        <p>> Conectando ao SINT Trends... OK</p>
                        <p>> Baixando 12 imagens em Alta Resolução... OK</p>
                        <p>> Analisando 450 reviews... OK</p>
                        <p className="animate-pulse">> Gerando Landing Page de Alta Conversão...</p>
                     </div>
                  </div>
                  {/* Right: Result */}
                  <div className="flex-1 w-full bg-white/5 rounded-xl border border-white/10 p-4 relative group cursor-pointer hover:border-neon-blue/50 transition-all">
                     <div className="absolute top-2 right-2 bg-green-500 text-black text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1"><CheckCircle2 size={10}/> CONCLUÍDO</div>
                     <div className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-700 rounded-lg animate-pulse"></div>
                        <div className="space-y-2 flex-1">
                           <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                           <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                           <div className="flex gap-2 mt-2">
                              <div className="h-6 w-16 bg-neon-blue/20 rounded border border-neon-blue/30"></div>
                              <div className="h-6 w-16 bg-white/10 rounded"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-20 px-4">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-16 font-display">Como Funciona o <span className="text-neon-blue">Fluxo de Clonagem</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { icon: Copy, title: "1. Cole a URL", desc: "Suporta Shopee, TikTok Shop, Shopify, WooCommerce, Amazon e Mercado Livre." },
                  { icon: Cpu, title: "2. IA Extrai Tudo", desc: "Fotos, vídeos, títulos, descrições, reviews, hashtags e metadados ocultos." },
                  { icon: Rocket, title: "3. Gere em 1 Clique", desc: "Criativos, scripts, landing pages e exportação direta para sua loja." }
               ].map((step, i) => (
                  <div key={i} className="glassmorphism p-8 rounded-2xl bg-[#111] border border-white/10 relative group hover:border-neon-blue/30 transition-all">
                     <div className="absolute -top-6 left-8 w-12 h-12 bg-[#0A0A0A] border border-white/10 rounded-xl flex items-center justify-center text-neon-blue shadow-neon-blue">
                        <step.icon size={24} />
                     </div>
                     <h3 className="text-xl font-bold text-white mt-4 mb-2">{step.title}</h3>
                     <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. CORE FUNCTIONALITIES */}
      <section className="py-20 px-4 bg-[#0D0F15] border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center md:text-left">
               <h2 className="text-3xl font-bold text-white font-display">Funcionalidades <span className="text-neon-blue">Premium</span></h2>
               <p className="text-gray-400 mt-2">O arsenal completo para dropshippers e marcas digitais.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <FeatureCard 
                  icon={Copy} color="text-neon-blue" 
                  title="Clonagem Completa" 
                  items={["Título SEO & Descrição", "Download Imagens/Vídeos (Limpos)", "Variações de Preço", "Avaliações Reescritas"]}
               />
               <FeatureCard 
                  icon={BarChart2} color="text-yellow-400" 
                  title="Análise de Concorrentes PRO" 
                  items={["Saturação Real & Curva de Vendas", "Previsões SINT Trends", "Ranking de Anúncios", "Gatilhos Emocionais"]}
               />
               <FeatureCard 
                  icon={Video} color="text-pink-500" 
                  title="Criador de Anúncios Auto" 
                  items={["10 Ganchos Virais", "5 Scripts UGC", "Geração de Vídeo (Reactor)", "Thumbnails Automáticas"]}
               />
               <FeatureCard 
                  icon={Eye} color="text-emerald-400" 
                  title="Real Spy & Library" 
                  items={["TikTok Ads Library", "Meta Ads Spy", "Histórico de Preços", "Ranking de Vendedores"]}
               />
               <FeatureCard 
                  icon={UploadCloud} color="text-purple-400" 
                  title="Exportação Instantânea" 
                  items={["Shopify & WooCommerce", "Shopee & Mercado Livre", "Loja Integrada", "CSV Universal"]}
               />
               <FeatureCard 
                  icon={Zap} color="text-orange-400" 
                  title="Automations IA (n8n)" 
                  items={["Postagem Automática", "Ajuste Dinâmico de Preço", "Monitoramento de Estoque", "Alerta de Novos Concorrentes"]}
               />
            </div>
         </div>
      </section>

      {/* 4. CLONE MODE ACTION AREA */}
      <section id="clone-section" className="py-20 px-4">
         <div className="max-w-7xl mx-auto space-y-8">
            <div className="glassmorphism p-8 rounded-2xl border border-neon-blue/30 bg-[#111] relative overflow-hidden">
               <div className="relative z-10 flex flex-col md:flex-row gap-6 items-end">
                  <div className="flex-1 w-full space-y-4">
                     <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Zap className="text-neon-blue" /> Clonar Produto
                     </h3>
                     <p className="text-gray-400">Cole a URL abaixo para iniciar a extração completa.</p>
                     <div className="flex gap-4">
                        <input 
                           type="text" 
                           value={url}
                           onChange={(e) => setUrl(e.target.value)}
                           placeholder="https://shopee.com.br/produto..." 
                           className="flex-1 h-14 bg-black/40 border border-white/20 rounded-xl pl-5 text-white focus:border-neon-blue outline-none transition-all text-lg"
                        />
                        <button 
                           onClick={handleClone}
                           disabled={isCloning}
                           className="h-14 px-8 bg-neon-blue text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(76,201,240,0.4)] transition-all flex items-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                           {isCloning ? 'Processando...' : 'Iniciar Extração'}
                        </button>
                     </div>
                     {isCloning && (
                        <p className="text-neon-blue text-sm font-mono animate-pulse mt-2 flex items-center gap-2">
                           <Terminal size={14}/> {cloneStatus}
                        </p>
                     )}
                  </div>
               </div>
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 blur-[80px] rounded-full pointer-events-none"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <button className="h-40 glassmorphism rounded-2xl border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/5 transition-all flex flex-col items-center justify-center gap-3 group">
                  <Video size={32} className="text-gray-500 group-hover:text-pink-500 transition-colors" />
                  <div className="text-center">
                     <span className="text-xl font-bold text-white block">Criar Anúncios</span>
                     <span className="text-sm text-gray-500 group-hover:text-gray-300">Scripts + Vídeos + Thumbs (Reactor)</span>
                  </div>
               </button>
               <button className="h-40 glassmorphism rounded-2xl border border-white/10 hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all flex flex-col items-center justify-center gap-3 group">
                  <BarChart2 size={32} className="text-gray-500 group-hover:text-yellow-400 transition-colors" />
                  <div className="text-center">
                     <span className="text-xl font-bold text-white block">Analisar Concorrentes</span>
                     <span className="text-sm text-gray-500 group-hover:text-gray-300">Saturação + Previsões SINT</span>
                  </div>
               </button>
            </div>
         </div>
      </section>

      {/* 5. SINT INTEGRATION */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
         <div className="max-w-7xl mx-auto glassmorphism p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-[#111] to-[#0A0A0A]">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">
                     Powered by SINT Trends
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-display">A previsão mais precisa do mercado.</h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                     Não adivinhe. O FluxProduct cruza dados do SINT para mostrar exatamente quando um produto vai viralizar ou saturar.
                  </p>
                  <ul className="space-y-3">
                     {["Probabilidade de Viralização (Score)", "Previsão de Demanda (7 dias)", "Keywords Explosivas", "Alerta de Saturação"].map(item => (
                        <li key={item} className="flex items-center gap-3 text-gray-300 font-medium">
                           <CheckCircle2 size={18} className="text-purple-500" /> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="flex-1 w-full h-[300px] bg-black/40 rounded-xl border border-white/10 p-4">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={trendData}>
                        <defs>
                           <linearGradient id="colorTrendFlux" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#A259FF" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#A259FF" stopOpacity={0}/>
                           </linearGradient>
                        </defs>
                        <Tooltip contentStyle={{backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px'}} />
                        <Area type="monotone" dataKey="value" stroke="#A259FF" strokeWidth={3} fill="url(#colorTrendFlux)" />
                     </AreaChart>
                  </ResponsiveContainer>
                  <div className="flex justify-between mt-2 px-2 text-xs text-gray-500 font-mono">
                     <span>Hoje</span>
                     <span>Previsão +7d</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. AI PAGE BUILDER */}
      <section className="py-20 px-4">
         <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12 font-display">Page Builder IA <span className="text-gray-600 text-lg ml-2">(Landing Pages Automáticas)</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="md:col-span-2 glassmorphism p-8 rounded-2xl border border-white/10 bg-[#111] text-left">
                  <h3 className="text-xl font-bold text-white mb-4">Geração Instantânea de LPs</h3>
                  <div className="space-y-4">
                     <div className="flex gap-3 items-center p-3 bg-white/5 rounded-lg border border-white/5">
                        <Wand2 className="text-neon-blue" />
                        <div>
                           <p className="text-white font-bold text-sm">Copywriting Persuasivo</p>
                           <p className="text-gray-500 text-xs">Headlines, Benefícios, Prova Social, FAQ.</p>
                        </div>
                     </div>
                     <div className="flex gap-3 items-center p-3 bg-white/5 rounded-lg border border-white/5">
                        <Smartphone className="text-pink-500" />
                        <div>
                           <p className="text-white font-bold text-sm">Mobile First Design</p>
                           <p className="text-gray-500 text-xs">Layout premium otimizado para conversão no celular.</p>
                        </div>
                     </div>
                     <div className="flex gap-3 items-center p-3 bg-white/5 rounded-lg border border-white/5">
                        <Download className="text-green-400" />
                        <div>
                           <p className="text-white font-bold text-sm">Exportável</p>
                           <p className="text-gray-500 text-xs">HTML, JSON ou publicação direta no Shopify.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center p-4 relative overflow-hidden">
                  <div className="w-[180px] h-[320px] bg-white rounded-[20px] border-4 border-gray-800 relative shadow-2xl overflow-hidden flex flex-col">
                     {/* Fake Mobile Preview */}
                     <div className="h-32 bg-gray-200 w-full"></div>
                     <div className="p-2 space-y-2">
                        <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                        <div className="h-2 w-full bg-gray-100 rounded"></div>
                        <div className="h-2 w-full bg-gray-100 rounded"></div>
                        <div className="h-8 w-full bg-black rounded mt-2"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
         <h2 className="text-3xl font-bold text-white text-center mb-10 font-display">Perguntas Frequentes</h2>
         <div className="space-y-4">
            {[
               { q: "É permitido clonar produtos?", a: "O FluxProduct extrai dados públicos e reescreve descrições usando IA para garantir originalidade e evitar plágio direto, mantendo sua operação segura." },
               { q: "Funciona para Shopee e TikTok Shop?", a: "Sim! Nossa engine suporta as principais plataformas de e-commerce e marketplaces globais." },
               { q: "Consome muita API ou créditos?", a: "A extração básica é ilimitada. Recursos avançados de IA (geração de vídeo/imagem) consomem seus tokens do plano Pro/Agency." },
               { q: "Preciso ter loja própria?", a: "Não necessariamente. Você pode usar o FluxProduct para espionar concorrentes ou gerar criativos para afiliados." },
            ].map((item, i) => (
               <div key={i} className="glassmorphism rounded-xl border border-white/10 overflow-hidden">
                  <button 
                     onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                     className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                     <span className="font-bold text-white">{item.q}</span>
                     {activeFaq === i ? <ChevronUp className="text-neon-blue"/> : <ChevronDown className="text-gray-500"/>}
                  </button>
                  {activeFaq === i && (
                     <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 bg-black/20">
                        {item.a}
                     </div>
                  )}
               </div>
            ))}
         </div>
      </section>

      {/* 9. FOOTER (Simple for Module Page) */}
      <footer className="text-center pt-20 border-t border-white/5">
         <div className="flex items-center justify-center gap-2 mb-4">
            <Shield size={16} className="text-gray-600"/>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">FluxTime Secure Module</span>
         </div>
         <p className="text-sm text-gray-600">FluxProduct Pulse &copy; 2025 FluxTime Ecosystem.</p>
      </footer>

    </div>
  );
};

const FeatureCard = ({ icon: Icon, color, title, items }: any) => (
   <div className="glassmorphism p-6 rounded-2xl border border-white/10 bg-[#111] hover:bg-white/5 transition-colors group">
      <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform`}>
         <Icon size={20} />
      </div>
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
         {items.map((item: string) => (
            <li key={item} className="text-sm text-gray-400 flex items-center gap-2">
               <div className="w-1 h-1 rounded-full bg-white/20"></div> {item}
            </li>
         ))}
      </ul>
   </div>
);

export default FluxProduct;